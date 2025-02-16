const module_path = `chatBox`;
const CommonModel = require('../models/CommonModel');
const avatarModel = new CommonModel('avatar');
const sdk = require("microsoft-cognitiveservices-speech-sdk");
const readline = require("readline");
const path = require("path");
const fs = require("fs");
const { spawn } = require('child_process');
const { getJsonFile, runRhubarbCommand } = require('../../config/utils/helper')


const chatBoxController = {

    avatar: async (req, res, next) => {
        const existingRecord = await avatarModel.findAll();

        let shouldFetch = 1;
        let bearer_token = undefined;
        if (existingRecord.length > 0) {
            shouldFetch = 0;
            bearer_token = existingRecord[0].token;

        } else {
            shouldFetch = 1;
        }
        return res.render(`${module_path}/avatar`, { shouldFetch, bearer_token });
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

        const text = req.query.dataOnline; // Retrieve query parameters

        const audioFile = path.join(__dirname, "../../public/assets/audio/ElevenLabsNew.wav");
        const speechConfig = sdk.SpeechConfig.fromSubscription(process.env.SPEECH_KEY, process.env.SPEECH_REGION);
        const audioConfig = sdk.AudioConfig.fromAudioFileOutput(audioFile);
        speechConfig.speechSynthesisVoiceName = "en-US-AvaMultilingualNeural";
        var synthesizer = new sdk.SpeechSynthesizer(speechConfig, audioConfig);


        synthesizer.speakTextAsync(text,
            async function(result) {
                    if (result.reason === sdk.ResultReason.SynthesizingAudioCompleted) {

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
    },
    getJsonFile: async (req, res, next) => {
        try {
            // await runRhubarbCommand();
            console.log("this is elel");
            const audioJsonFile = await getJsonFile();
            return res.status(200).json({ audioJsonFile });
        } catch (error) {
            return res.status(200).json({ 'error': error });
        }

    },
    speechToText: async (req, res, next) => {

        try {
            // if (!req.file) {
            //     return res.status(400).json({ error: 'No file uploaded' });
            // }
            // console.log(req.file);
            console.log(req.body,req.query,req.file);

            // await runRhubarbCommand();
            const pathforAudioFile = req.query.pathforAudioFile;
            console.log(pathforAudioFile, req.file);
            const speechConfig = sdk.SpeechConfig.fromSubscription(process.env.SPEECH_KEY, process.env.SPEECH_REGION);
            speechConfig.speechRecognitionLanguage = "en-US";
            const wavBuffer = fs.readFileSync(pathforAudioFile);
            const pushStream = sdk.AudioInputStream.createPushStream();
            pushStream.write(wavBuffer);
            pushStream.close();

            const audioConfig = sdk.AudioConfig.fromStreamInput(pushStream);
            const speechRecognizer = new sdk.SpeechRecognizer(speechConfig, audioConfig);
            console.log("hello audio checking");
            speechRecognizer.recognizeOnceAsync(result => {
                // console.log(sdk.ResultReason);
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


            return res.status(200).json();
        } catch (error) {
            return res.status(400).json({ 'error': error });
        }
    },

}


module.exports = chatBoxController;