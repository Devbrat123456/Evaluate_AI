const express = require('express');
const app = express();
const path = require('path');
const csrf = require('csurf');
const session = require('express-session');
const passport = require('passport');
const dotenv = require('dotenv').config();
const cookieParser = require('cookie-parser');
const flash = require('connect-flash');

const sdk = require("microsoft-cognitiveservices-speech-sdk");
const http = require('http');
const fs = require('fs');
const socketIO = require('socket.io');



const speechConfig = sdk.SpeechConfig.fromSubscription(process.env.SPEECH_KEY, process.env.SPEECH_REGION);
speechConfig.speechRecognitionLanguage = "en-US";

const port = process.env.PORT || 3000; // Required to attach WebSocket to HTTP server


let server = http.createServer(app);
// const httpServer = createServer(app); // Create HTTP server for WebSockets
const io = socketIO(server);



// Routes
const router = require('../routes/routes');
const dashboard = require('../routes/dashboard');
const chatBox = require('../routes/chatBox');
const protectedRoutes = require('../routes/protectedRoutes');
const authenticateToken = require('../app/middleware/authenticateToken');



// Middleware order is important!
// 1. Parse body and cookies
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());
app.use(authenticateToken);

// 2. Session management
app.use(session({
    secret: process.env.SESSION_SECRET || 'default_secret',
    cookie: {},
    resave: false,
    saveUninitialized: false,
}));

// 3. Flash messages
app.use(flash());

// 4. CSRF Protection
app.use(csrf({ cookie: true }));

// 5. Multer (placed after CSRF middleware)
// Ensure "file" matches your HTML form field name

// 6. Passport authentication
app.use(passport.initialize());
app.use(passport.session());

// 7. Static file handling
app.use(express.static(path.join(__dirname, '../public')));

// 8. View engine setup
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '../views'));

// Custom Error Handling for CSRF Tokens
app.use((err, req, res, next) => {
    if (err.code === 'EBADCSRFTOKEN') {
        req.flash('error', 'Invalid CSRF token! Please try again.');
        return res.redirect('back');
    }
    next(err);
});


// Global Middleware for Flash and CSRF
app.use((req, res, next) => {

    // console.log(req.user);
    res.locals.user = req.user && req.user.length > 0 ? req.user[0] : null;

    res.locals.csrfToken = req.body._csrf || req.csrfToken(); // Always pass the CSRF token
    const messages = {
        success: req.flash('success'),
        error: req.flash('error')
    };
    res.locals.message = messages.success[0] || messages.error[0] || null; // Grab only the first message
    res.locals.code = messages.success.length ? 'success' : (messages.error.length ? 'error' : null);
    // console.log(res.locals.message, res.locals.code);
    next();
});

// Routes
try {
    app.use('/admin', dashboard); // Admin-specific routes
    app.use('/authorised', protectedRoutes); // General routes
    app.use('/chatbox', chatBox); // General routes
    app.use('/', router);

    io.on('connection', (socket) => {
        let audioBuffer = [];
        console.log('New client connected');





        socket.on('message', (data) => {
            // console.log(data);

            const audioStream = Buffer.from(data);
            // console.log("Received Audio Buffer:", audioStream);

            // audioBuffer.push(data);
            // const audioStream = Buffer.concat(audioBuffer);
            // let jsonString=audioStream.toString('utf8');
            // const jsonData = JSON.parse(jsonString); 
            // console.log(jsonData);

            const audioFile = path.join(__dirname, "../public/assets/audio/ElevenLabsNew.wav");
            const audioFiletemp = path.join(__dirname, "../public/assets/audio");
            const newFile = path.join(__dirname, "../public/assets/audio/temp_audio.webm");
            fs.writeFileSync(newFile, audioStream);
            // // console.log(audioFile);
            if (!fs.existsSync(newFile)) {
                console.error("Error: temp_audio.webm file does not exist.");
                return;
            }
            const stats = fs.statSync(newFile);
            if (stats.size === 0) {
                console.error("Error: temp_audio.webm file is empty.");
                return;
            }

            // console.log(1);

            const wavBuffer = fs.readFileSync(audioFile);

            const pushStream = sdk.AudioInputStream.createPushStream();
            pushStream.write(wavBuffer);
            pushStream.close();

            const audioConfig = sdk.AudioConfig.fromStreamInput(pushStream);
            const speechRecognizer = new sdk.SpeechRecognizer(speechConfig, audioConfig);
            speechRecognizer.recognizeOnceAsync(result => {
                // console.log(sdk.ResultReason);
                switch (result.reason) {

                    case sdk.ResultReason.RecognizedSpeech:
                        // console.log(`RECOGNIZED: Text=${result.text}`);
                        break;
                    case sdk.ResultReason.NoMatch:
                        console.log("NOMATCH: Speech could not be recognized.");
                        break;
                    case sdk.ResultReason.Canceled:
                        const cancellation = sdk.CancellationDetails.fromResult(result);
                        console.log(`CANCELED: Reason=${cancellation.reason}`);

                        if (cancellation.reason == sdk.CancellationReason.Error) {
                            console.log(`CANCELED: ErrorCode=${cancellation.ErrorCode}`);
                            console.log(`CANCELED: ErrorDetails=${cancellation.errorDetails}`);
                            console.log("CANCELED: Did you set the speech resource key and region values?");
                        }
                        break;
                    default:
                        console.log(result.reason, "default");
                }
                speechRecognizer.close();
            });


        });
        // process.exit(1);
        socket.on('disconnect', () => {

            console.log('Client disconnected');

        });

    });


    // General routes
} catch (error) {
    console.error('Error while setting up routes:', error);
}

// Export the app and port
module.exports = { app, port, io, server };