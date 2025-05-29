const module_path = `chatBox`;
const CommonModel = require('../models/CommonModel');
const userModel = new CommonModel('users');
const skillModel = new CommonModel('skills');
const questionModel = new CommonModel('questions');
const feedbackModel = new CommonModel('Feedback');
const CandidateResponsesModel = new CommonModel('CandidateResponses');
const sdk = require("microsoft-cognitiveservices-speech-sdk");
const readline = require("readline");
const path = require("path");
const fs = require("fs");
const { spawn } = require('child_process');
const { getJsonFile, runRhubarbCommand, currentTimeStamp, getDatetime } = require('../../config/utils/helper');
const { AssemblyAI } = require('assemblyai');
const { getIo } = require('../../config/socket');
const io = getIo();


const chatBoxController = {

    avatar: async (req, res, next) => {
        try {
            const { session_id, user_id } = req.body;

            let level_id = 1;
            const existingRecord = await userModel.findOne({ id: user_id });
            

            if (!session_id) {
                req.flash('error', 'No Session Generated');
                return res.redirect('/');

            }
            return res.render(`${module_path}/avatar`, { user: existingRecord[0], level_id, skill: '', session_id, user_id });

        } catch (error) {
            return res.status(500).json({ message: error });
        }

    },
    storeToken: async (req, res, next) => {



        let data = req.body.data;
        let dataToSave = {
            avatar_id: data._id,
            createdAt: data.createdAt,
            updatedAt: data.updatedAt,
            token: data.token,
            isAnonymous: data.isAnonymous,
            isGuest: data.isGuest
        }
        try {
            const newAvatar = await avatarModel.create(dataToSave);
            console.log(newAvatar);
            if (newAvatar.affectedRows > 0) {
                let msg = {
                    message: "Store Successfully",
                }
                return res.status(200).json(msg);
            } else {
                let msg = {
                    message: "Failed Successfully",
                }
                return res.status(500).json(msg);
            }

        } catch (error) {
            return res.status(500).json(error);
        }
    },

    textToSpeech: async (req, res, next) => {
        try {


            const text = req.query.dataOnline; // Retrieve query parameters

            const audioFile = path.join(__dirname, "../../public/assets/audio/ElevenLabsNew.wav");
            const speechConfig = sdk.SpeechConfig.fromSubscription(process.env.SPEECH_KEY, process.env.SPEECH_REGION);
            const audioConfig = sdk.AudioConfig.fromAudioFileOutput(audioFile);
            speechConfig.speechSynthesisVoiceName = "en-US-AvaMultilingualNeural";
            // speechConfig.speechSynthesisOutputFormat = sdk.SpeechSynthesisOutputFormat.Riff16Khz16BitMonoPcm;
            var synthesizer = new sdk.SpeechSynthesizer(speechConfig, audioConfig);

            let lastOffset = 0;
            let audioFileJson = { mouthCues: [] };

            synthesizer.visemeReceived = function (s, e) {
                let currentOffset = e.audioOffset / 10000; // Convert to milliseconds
                let visemeId = e.visemeId;
                let startTime = lastOffset;
                let endTime = currentOffset;

                // console.log(`(Viseme) Audio offset: ${currentOffset}ms, Viseme ID: ${visemeId}`);

                // Save viseme timing
                audioFileJson.mouthCues.push({ start: startTime, end: endTime, value: visemeId });

                lastOffset = currentOffset; // Update offset
            };
            // console.log(audioFileJson);


            //    // If VisemeID is the only thing you want, you can also use `speakTextAsync()`
            //    // synthesizer.speakSsmlAsync(text);
            //    console.log(synthesizer);

            synthesizer.speakTextAsync(text,
                async function (result) {
                    if (result.reason === sdk.ResultReason.SynthesizingAudioCompleted) {
                        const jsonFilePath = path.join(__dirname, "../../public/assets/audio/audioFile.json");
                        fs.writeFileSync(jsonFilePath, JSON.stringify(audioFileJson, null, 2));
                        synthesizer.close();
                        synthesizer = null;

                        // Respond with the audio JSON and file path
                        return res.status(200).json({ audioFilePath: '/assets/audio/ElevenLabsNew.wav' });

                    } else {
                        console.error("Synthesis failed:", result.errorDetails);
                        synthesizer.close();
                        synthesizer = null;

                        return res.status(200).json({ error: result.errorDetails });
                    }
                },
                function (err) {
                    console.trace("err - " + err);
                    synthesizer.close();
                    synthesizer = null;
                    return res.status(200).json({ error: "Speech synthesis failed." });
                }
            );
        }
        catch (err) {
            return res.status(200).json({ 'error': err });
        }
    },
    getJsonFileFun: async (req, res, next) => {
        try {

            const audioJsonFile = await getJsonFile();
            io.on('connect', (socket) => {
                socket.emit('json_file', audioJsonFile);
            })
            return res.status(200).json({ audioJsonFile });
        } catch (error) {
            return res.status(200).json({ 'error': error });
        }

    },




    speechToText: async (req, res, next) => {

        try {
            if (!req.files) {
                return res.status(400).json({ error: 'No file uploaded' });
            }

            const pathforAudioFile = path.join(__dirname, '../../public/assets/audio/audio.wav');

            console.log(pathforAudioFile);
            const speechConfig = sdk.SpeechConfig.fromSubscription(process.env.SPEECH_KEY, process.env.SPEECH_REGION);
            speechConfig.speechRecognitionLanguage = "en-US";

            // speechConfig.setProperty(sdk.PropertyId.SpeechServiceConnection_AutoDetectSourceLanguages, "en-US,hi-IN,es-ES,en-IN");
            const wavBuffer = fs.readFileSync(pathforAudioFile);
            const pushStream = sdk.AudioInputStream.createPushStream();
            pushStream.write(wavBuffer);
            pushStream.close();

            // const audioConfig = sdk.AudioConfig.fromStreamInput(pushStream);
            const audioConfig = sdk.AudioConfig.fromStreamInput(fs.createReadStream(pathforAudioFile));
            const speechRecognizer = new sdk.SpeechRecognizer(speechConfig, audioConfig);

            speechRecognizer.recognizeOnceAsync(result => {
                // console.log(sdk.ResultReason);
                console.log(result.text);
                switch (result.reason) {

                    case sdk.ResultReason.RecognizedSpeech:
                        console.log(`RECOGNIZED: Text=${result.text}`);
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


            return res.status(200).json({ 'audioPath': pathforAudioFile });
        } catch (error) {
            return res.status(400).json({ 'error': error });
        }
    },
    newSpeechtoText: async (req, res, next) => {
        const client = new AssemblyAI({
            apiKey: "59a3ee56dc964e9bb4d8d74d7ee545ad"
        })

        let audioUrl = "http://localhost:8000/assets/audio/audio.wav";
        const config = {
            audio_url: audioUrl
        }
        const transcript = await client.transcripts.transcribe(config);
        console.log(transcript.text);

        return res.status(200).json();

    },
    storeAnswer: async (req, res) => {
        try {
            const { data, user_id, emailid, difficulty, topic } = req.body;
            let ans = await questionModel.create({ question: data.question, expected_answer: data.expected_answer, email: emailid, level: difficulty, topic, user_id })
            console.log(ans);
            return res.status(200).json({ ans });

        }
        catch (err) {
            return res.status(500).json(err);
        }

    },
    updateAnswer: async (req, res) => {
        try {
            const { user_email, question_id, user_answer } = req.body;
            let status = CandidateResponsesModel.updateOnMultipleCol({ 'ResponseText': user_answer }, [{ column: `QuestionId`, value: question_id }, { column: 'CandidateEmail', value: user_email }]);
            return res.status(200).json(status);
        }
        catch (error) {
            return res.status(500).json(error);
        }
    },
    getQuestion: async (req, res) => {
        let id = 1;
        let question = await questionModel.findOne({ id })
        return res.status(200).json({ question: question[0] });
    },
    generateResult: async (req, res) => {
        //  let user_id =1;
        //  let skill_id =1;
        //  let interview_date =1;
        //  what if he takes multiple interview at the same day , then i will have to put interview date and time 
        let question = await questionModel.buildDynamicQueryJoin(['questions'], ['questions.question', 'questions.expected_answer', 'questions.user_answer', 'questions.email', 'questions.level', 'questions.topic'], [], [{ column: 'is_correct', value: 1 }, { column: 'user_id', value: user_id }, { column: 'level', value: level_id }, { column: 'topic', value: topic }]);
        // res.render(`${module_path}/result`,)

    },
    uploadRecording: async (req, res) => {
        try {
            return res.status(200).json({ message: "Good" });

        }
        catch (error) {
            return res.status(500).json({ message: error || "Something wrong" });
        }
    },
    subscriptionKey: async (req, res) => {

        try {
            return res.status(200).json({ subcrition_key: process.env.API_SUBSCRIPTION_KEY, base_url: process.env.API_BASE_URL });
        }
        catch (error) {
            return res.status(500).json({ message: error || "Something wrong" });

        }
    },
    getFeedBack: async (req, res) => {


        try {
            const { session_id } = req.body;

            return res.render(`${module_path}/feedback`, {
                session_id
            });
        }
        catch (error) {
            return res.status(500).json({ message: error || "Something wrong" });


        }
    }, feedBackStore: async (req, res) => {
        try {
            const { rating, feedback, session_id } = req.body;
            if (!session_id) {
                return res.status(500).json({ message: "Please Provide Session id" });
            }



            let existingRecord = await feedbackModel.findOne({ session_id });
            let resonponse;
            //    console.log(existingRecord);
            if (existingRecord.length > 0) {
                let dataToSave = {
                    rating,
                    feedback,
                    updated_at: getDatetime(),
                };
                resonponse = await feedbackModel.update(dataToSave, `session_id='${session_id}'`);

            } else {
                let dataToSave = {
                    rating,
                    feedback,
                    session_id,
                    created_at: getDatetime(),
                };
                resonponse = await feedbackModel.create(dataToSave);
            }


            return res.status(200).json({ message: "Stored", status: 200, noload: true, session_id })
        }
        catch (error) {
            console.log(error);
            return res.status(500).json({ message: error || "something Wrong" });
        }
    },
    getResult: async (req, res) => {

        try {
            const { session_id } = req.body;
            let existingRecord = await questionModel.findOne({ session_id });
            //  console.log(existingRecord);
            return res.render(`${module_path}/result`, {
                session_id,
                existingRecord
            });


        }
        catch (err) {
            return res.status(500).json({ message: error || "something Wrong" });
        }


    },
    testingMic: async (req, res) => {
        try {
          const { session_id, user_id } = req.body;
          console.log(session_id,user_id);      
          return res.render(`${module_path}/testingMic`, { session_id, user_id });
        } catch (error) {
            console.log(error);
             return res.status(500).json({message:error});
        }
      

    }
}


const convertTextToAudio = (text) => {
    let uqId = currentTimeStamp();
    const audioFile = path.join(__dirname, `../../public/assets/audio/ElevenLabsNew${uqId}.wav`);
    const speechConfig = sdk.SpeechConfig.fromSubscription(process.env.SPEECH_KEY, process.env.SPEECH_REGION);
    const audioConfig = sdk.AudioConfig.fromAudioFileOutput(audioFile);
    speechConfig.speechSynthesisVoiceName = "en-US-AvaMultilingualNeural";
    // speechConfig.speechSynthesisOutputFormat = sdk.SpeechSynthesisOutputFormat.Riff16Khz16BitMonoPcm;
    var synthesizer = new sdk.SpeechSynthesizer(speechConfig, audioConfig);

    let lastOffset = 0;
    let audioFileJson = { mouthCues: [] };


    synthesizer.visemeReceived = function (s, e) {
        let currentOffset = e.audioOffset / 10000; // Convert to milliseconds
        let visemeId = e.visemeId;
        let startTime = lastOffset;
        let endTime = currentOffset;

        // console.log(`(Viseme) Audio offset: ${currentOffset}ms, Viseme ID: ${visemeId}`);

        // Save viseme timing
        audioFileJson.mouthCues.push({ start: startTime, end: endTime, value: visemeId });

        lastOffset = currentOffset; // Update offset
    };
    // console.log(audioFileJson);


    //    // If VisemeID is the only thing you want, you can also use `speakTextAsync()`
    //    // synthesizer.speakSsmlAsync(text);
    //    console.log(synthesizer);

    synthesizer.speakTextAsync(text,
        async function (result) {
            if (result.reason === sdk.ResultReason.SynthesizingAudioCompleted) {
                const jsonFilePath = path.join(__dirname, `../../public/assets/audio/audioFile${uqId}.json`);
                fs.writeFileSync(jsonFilePath, JSON.stringify(audioFileJson, null, 2));
                synthesizer.close();
                synthesizer = null;
                let data = {
                    audipath: `/assets/audio/ElevenLabsNew${uqId}.wav`,
                    speakingText: text,
                    uqId
                }
                io.emit('audioPath', data);

                // Respond with the audio JSON and file path
                // return res.status(200).json({ audioFilePath: '/assets/audio/ElevenLabsNew.wav' });

            } else {
                console.error("Synthesis failed:", result.errorDetails);
                synthesizer.close();
                synthesizer = null;

                // return res.status(200).json({ error: result.errorDetails });
            }
        },
        function (err) {
            console.trace("err - " + err);
            synthesizer.close();
            synthesizer = null;
            // return res.status(200).json({ error: "Speech synthesis failed." });
        }
    );


}

const updateUserAnswerOfQuestion = async (user_email, question_id, user_answer) => {

    try {
        let status = await CandidateResponsesModel.updateOnMultipleCol({ 'ResponseText': user_answer }, [{ column: `QuestionId`, value: question_id }, { column: 'CandidateEmail', value: user_email }]);
        // return res.status(200).json(status);
        console.log(status, "updating the answer");
    }
    catch (error) {
        console.log(error, "while updating Answer");
    }
}


io.on('connect', (socket) => {


    let speechRecognizer;
    let pushStream;
    let recognizerRestartTimer;
    let isStreamClosed = false;

    function initSpeechRecognizer() {
        const speechConfig = sdk.SpeechConfig.fromSubscription(process.env.SPEECH_KEY, process.env.SPEECH_REGION);
        speechConfig.speechRecognitionLanguage = "en-US";
        speechConfig.setProperty(
            sdk.PropertyId.Speech_SegmentationSilenceTimeoutMs,
            "3000" // milliseconds — increase this to tolerate longer pauses (5 seconds here)
        );

        pushStream = sdk.AudioInputStream.createPushStream();
        const audioConfig = sdk.AudioConfig.fromStreamInput(pushStream);
        speechRecognizer = new sdk.SpeechRecognizer(speechConfig, audioConfig);
        isStreamClosed = false;


        speechRecognizer.recognizing = (s, e) => {
            // console.log("emitting");
            // console.log("INTERIM:", e.result.text);
            io.emit("sttinterim", e.result.text);
        };

        speechRecognizer.recognized = (s, e) => {
            if (e.result.reason === sdk.ResultReason.RecognizedSpeech) {
                // console.log("emitting");
                // console.log("FINAL:", e.result.text);
                io.emit("sttfinal", e.result.text);
            }
        };
        speechRecognizer.sessionStarted = (s, e) => {
            console.log("Session started:", e.sessionId);
        };

        speechRecognizer.sessionStopped = (s, e) => {
            console.log("Session stopped. Restarting...");
            restartRecognizer();
        };

        speechRecognizer.canceled = (s, e) => {
            console.log("CANCELED:", e.reason);
            if (e.reason === sdk.CancellationReason.Error) {
                console.log("Error:", e.errorDetails);
            }
        };

        speechRecognizer.startContinuousRecognitionAsync();
        //  clearInterval(recognizerRestartTimer);
        // recognizerRestartTimer = setInterval(restartRecognizer, 3 * 60 * 1000); 
    }

    function restartRecognizer() {
        speechRecognizer.stopContinuousRecognitionAsync(() => {
            initSpeechRecognizer(); // re-initialize stream and recognizer
        });
    }

    initSpeechRecognizer();
    socket.on('text_file', (text) => {
        convertTextToAudio(text);
    });
    socket.on('get_json_file', async (audioPath) => {
        let { uqId, audipath } = audioPath;
        const audioJsonFile = await getJsonFile(uqId);
        let data = {
            'jsonFile': audioJsonFile,
            'audioPath': audioPath
        }
        socket.emit('json_file', data);
    });

    socket.on('answerUpdate', async (response) => {
        console.log(response);
        updateUserAnswerOfQuestion(response.user_email, response.question_id, response.user_answer);

    })

    socket.on('gettingAudio', async (buffer) => {

        if (!isStreamClosed && pushStream) {
            pushStream.write(Buffer.from(buffer)); // write all chunks
        }

    })

    socket.on('endStream', () => {
        if (pushStream) {
            pushStream.close();
            isStreamClosed = true;
        }
        if (speechRecognizer) {
            speechRecognizer.stopContinuousRecognitionAsync(() => {
                console.log("Recognition stopped.");
            });
        }
    });

    socket.on('saveAudioFile', async (data) => {
        console.log(data);
        saveAudioFileQuestionWise(data.buffer, data.fileName);
    })
})

const saveAudioFileQuestionWise = async (buffer, fileName) => {

    const filePath = path.join(__dirname, '../../public/uploads', fileName);
    fs.writeFile(filePath, Buffer.from(buffer), (err) => {
        if (err) {
            console.error('Error saving file:', err);
            return;
        }
        console.log('Audio file saved:', filePath);
    });
}






module.exports = chatBoxController;