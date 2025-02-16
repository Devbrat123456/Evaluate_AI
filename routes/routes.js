const express = require('express');
const router = express.Router();
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

router.get('/:page', home);
router.get('*', (req, res) => {
    res.send("404 Page not found");
})

//  this url should be in last other wise it will call the views of that url 

module.exports = router;