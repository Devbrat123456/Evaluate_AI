const express = require('express');
const router = express.Router();
const chatBoxController = require("../app/controllers/chatBoxController");
const path = require('path');
const filepath=path.join(__dirname,'../public/assets/audio/');


router.get('/', chatBoxController.avatar);
router.post('/storeToken', chatBoxController.storeToken);
router.get('/textToSpeech', chatBoxController.textToSpeech);
router.post('/speechToText', chatBoxController.speechToText);
router.get('/getJsonFile', chatBoxController.getJsonFile);


module.exports = router