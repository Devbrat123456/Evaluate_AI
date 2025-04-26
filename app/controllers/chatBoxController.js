const module_path = `chatBox`;
const CommonModel = require('../models/CommonModel');
const userModel = new CommonModel('users');
const skillModel = new CommonModel('skills');
const questionModel = new CommonModel('questions');
const CandidateResponsesModel = new CommonModel('CandidateResponses');
const sdk = require("microsoft-cognitiveservices-speech-sdk");
const readline = require("readline");
const path = require("path");
const fs = require("fs");
const { spawn } = require('child_process');
const { getJsonFile, runRhubarbCommand } = require('../../config/utils/helper');
const {AssemblyAI} =require('assemblyai');
const {getIo}= require('../../config/socket');
const io = getIo();


const chatBoxController = {

    avatar: async (req, res, next) => {

            const {user_id,level_id,skill_id}=req.query;
        const existingRecord = await userModel.findOne({id:user_id});
        const skill = await skillModel.findOne({id:skill_id});
        console.log(skill);
        if (existingRecord.length ==0) {

            req.flash('error', 'No user Found Unauthorized entry ');
            return res.redirect('/');

        } else {
            shouldFetch = 1;
        }
        return res.render(`${module_path}/avatar`,{user:existingRecord[0],level_id,skill:skill[0]});
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
            try{


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
            async function(result) {
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
                function(err) {
                    console.trace("err - " + err);
                    synthesizer.close();
                    synthesizer = null;
                    return res.status(200).json({ error: "Speech synthesis failed." });
                }
        );
     }
    catch(err)
    {
         return res.status(200).json({ 'error': err });
    }
},
    getJsonFileFun: async (req, res, next) => {
        try {
           
            const audioJsonFile = await getJsonFile();
             io.on('connect',(socket)=>{
                  socket.emit('json_file',audioJsonFile);
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

       let audioUrl="http://localhost:8000/assets/audio/audio.wav";
        const config = {
            audio_url: audioUrl
        }
        const transcript = await client.transcripts.transcribe(config);
        console.log(transcript.text);

         return res.status(200).json();

    },
     storeAnswer:async(req,res)=>{
             try{
            const {data,user_id,emailid,difficulty,topic}=req.body;
             let ans = await questionModel.create({question:data.question,expected_answer:data.expected_answer,email:emailid,level:difficulty,topic,user_id})
                console.log(ans);
               return res.status(200).json({ans});

             }
             catch(err)
             {
                return res.status(500).json(err);
             }

     },
     updateAnswer:async(req,res)=>{
          try{
                const {user_id,question_id,user_answer}=req.body;
                let status=CandidateResponsesModel.update({user_answer},`question_id=${question_id}`);
                return res.status(200).json(status);
          }
          catch(error){
            return res.status(500).json(error);
          }
     },
     getQuestion:async(req,res)=>{
             let id=1;
               let question=await questionModel.findOne({id})
                return res.status(200).json({question:question[0]});
     },
     generateResult:async(req,res)=>{
             //  let user_id =1;
             //  let skill_id =1;
             //  let interview_date =1;
            //  what if he takes multiple interview at the same day , then i will have to put interview date and time 
             let question=await questionModel.buildDynamicQueryJoin(['questions'],['questions.question','questions.expected_answer','questions.user_answer','questions.email','questions.level','questions.topic'],[],[{column:'is_correct',value:1},{column:'user_id',value:user_id},{column:'level',value:level_id},{column:'topic',value:topic}]);
             // res.render(`${module_path}/result`,)
        

     }

}


const convertTextToAudio=(text)=>{
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
            async function(result) {
                    if (result.reason === sdk.ResultReason.SynthesizingAudioCompleted) {
                         const jsonFilePath = path.join(__dirname, "../../public/assets/audio/audioFile.json");
                         fs.writeFileSync(jsonFilePath, JSON.stringify(audioFileJson, null, 2));
                        synthesizer.close();
                        synthesizer = null;
                        let data ={
                            audipath:'/assets/audio/ElevenLabsNew.wav',
                            speakingText:text
                        }
                        io.emit('audioPath',data);

                        // Respond with the audio JSON and file path
                        // return res.status(200).json({ audioFilePath: '/assets/audio/ElevenLabsNew.wav' });

                    } else {
                        console.error("Synthesis failed:", result.errorDetails);
                        synthesizer.close();
                        synthesizer = null;

                        // return res.status(200).json({ error: result.errorDetails });
                    }
                },
                function(err) {
                    console.trace("err - " + err);
                    synthesizer.close();
                    synthesizer = null;
                    // return res.status(200).json({ error: "Speech synthesis failed." });
                }
        );


}
            io.on('connect',(socket)=>{
                  socket.on('text_file',(text)=>{
                        convertTextToAudio(text);
                  });
                   socket.on('get_json_file',async(audioPath)=>{
                    const audioJsonFile = await getJsonFile();
                    let data= {
                        'jsonFile':audioJsonFile,
                        'audioPath':audioPath
                    }
                    socket.emit('json_file',data);
                  });
             })


module.exports = chatBoxController;