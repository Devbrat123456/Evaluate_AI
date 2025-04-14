const express = require('express');
const router = express.Router();
const chatBoxController = require("../app/controllers/chatBoxController");
const path = require('path');
const filepath=path.join(__dirname,'../public/assets/audio/');

const multer = require('multer');


const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, filepath); 
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname);
    }
})
const upload = multer({ storage: storage });

router.get('/', chatBoxController.avatar);
router.post('/storeToken', chatBoxController.storeToken);
router.get('/textToSpeech', chatBoxController.textToSpeech);
router.post('/speechToText',upload.any('audio'),chatBoxController.speechToText);
router.get('/getJsonFile', chatBoxController.getJsonFileFun);
router.post('/storeAnswer', chatBoxController.storeAnswer);
router.post('/getQuestion', chatBoxController.getQuestion);
router.post('/generateResult', chatBoxController.generateResult);


module.exports = router