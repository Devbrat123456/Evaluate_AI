const express = require('express');
const router = express.Router();
const path = require('path');
const filepath=path.join(__dirname,'../public/assets/profile/');
const filepathResume=path.join(__dirname,'../public/assets/resume/');

const multer = require('multer');


const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, filepath); 
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname);
    }
})
const storage2 = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, filepathResume); 
    },
    filename: function (req, file, cb) {

        const timestamp = new Date().toISOString().replace(/:/g, '-'); // Format timestamp
        const ext = path.extname(file.originalname); // Extract file extension
        const basename = path.basename(file.originalname, ext);
        // cb(null, file.originalname);
         cb(null, `${timestamp}${ext}`);
    }
})


const fileFilter = (req, file, cb) => {
    const allowedTypes = ['application/pdf', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document']; // PDF & DOCX
    if (allowedTypes.includes(file.mimetype)) {
        cb(null, true); // Accept file
    } else {
        cb(new Error('Only PDF and DOCX files are allowed!'), false); // Reject file
    }
};
const upload = multer({ storage: storage });
const upload2 = multer({ storage: storage2,fileFilter,limits:{ fileSize: 5 * 1024 * 1024 } });

/* 
If you try to define router in app.js and import it into router.js, you'll create a circular dependency:

    app.js imports router.js to attach routes.
    router.js imports app.js to get router.
Circular dependencies often lead to partial imports or undefined values because Node.js resolves imports in the order they appear. This can cause runtime errors like: */
// const router = express.Router();
const { home } = require('../app/controllers/HomeController');
const userClass = require('../app/controllers/usersController');
const dynamicResource = require('../config/utils/dynamicResource');
const { authentication, CallbackOnAuth, logout } = require('../app/controllers/AuthController');
router.route('/auth/google').get(authentication);
router.route('/auth/google/callback').get(CallbackOnAuth);
router.get('/Logout', logout);
router.route('/').get(home);
router.get('/register', userClass.Register);
dynamicResource(router, 'users');
router.post('/addUserEducation', userClass.AddEducation);
router.post('/addUserEmployement', userClass.AddEmployement);
router.post('/addUserSkills', userClass.AddUserSkills);
router.post('/login', userClass.Login);
router.post('/fetchUserSkill', userClass.fetchUserSkill);
router.post('/editUserSkills', userClass.EditUserSkills);
router.post('/fetchUserEmployement', userClass.FetchUserEmployement);
router.post('/editUserEmployement', userClass.EditUserEmployement);
router.post('/fetchUserEducation', userClass.FetchUserEducation);
router.post('/editUserEducation', userClass.editUserEducation);
router.post('/upload-profile',upload.any('profile') ,userClass.UploadProfile);

router.post('/upload-resume', (req, res, next) => {
    upload2.any('profile')(req, res, (err) => {
        if (err) {
            return res.status(500).json({ success: false, message: err.message });
        }
        next(); // Proceed to the controller if no errors
    });
}, userClass.UploadResume);
router.get('/:page', home);
router.get('*', (req, res) => {
    res.send("404 Page not found");
})

//  this url should be in last other wise it will call the views of that url 

module.exports = router;