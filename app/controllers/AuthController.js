const passport = require('passport');
const CommonModel = require('../models/CommonModel');
const session = require('express-session');
const googleStrategy = require('passport-google-oauth20').Strategy;
const client_id = process.env.GOOGLE_CLIENT_ID;
const secret_key = process.env.GOOGLE_SECRET_KEY;
const { getDatetime } = require('../../config/utils/helper');
const callbackurl = process.env.GOOGLE_CALLBACK_URL;


passport.use(new googleStrategy({
    clientID: client_id,
    clientSecret: secret_key,
    callbackURL: callbackurl
}, async (accessToken, refreshToken, profile, done) => {

    try {
        const CommonModelInstance = new CommonModel('users');
        // Find if the user exists in the database

        const existingUser = await CommonModelInstance.findOne({ AUTH_TKN: profile.id });

        if (existingUser && existingUser.length > 0) {
            // If user exists, update data if necessary and pass the user to done

            try {
                const updateUser = await CommonModelInstance.update({
                    NAME: profile.displayName,
                    EMAIL: profile.emails[0].value,
                    PROFILE: profile.photos[0].value,
                    UPDATED_AT: getDatetime(),
                }, `AUTH_TKN=${profile.id}`);
            }
            catch (err) {
                return done(err, null);
            }

            return done(null, existingUser);
        } else {

            // If user does not exist, create a new user and pass it to done
            const newUser = await CommonModelInstance.create({
                NAME: profile.displayName,
                AUTH_TKN: profile.id,
                EMAIL: profile.emails[0].value,
                PROFILE: profile.photos[0].value,
                CREATED_AT: getDatetime(),

            });
            return done(null, newUser);
        }
    } catch (error) {
        return done(error, null);
    }
}))

passport.serializeUser((user, done) => {

    done(null, user);
})
passport.deserializeUser((user, done) => {
    done(null, user);
})

const authentication = (req, res, next) => {
    return passport.authenticate('google', {
        scope: ['profile', 'email'],
    })(req, res, next);  // Ensure it gets called in the middleware chain
};


const CallbackOnAuth = (req, res, next) => {
    passport.authenticate('google', { failureRedirect: '/', failureMessage: true }, (err, user, info) => {
        if (err) {
            return next(err); // Handle any error
        }
        if (!user) {
            return res.redirect('/'); // Redirect to login if no user is found
        }
        req.login(user, (err) => {  // Use req.login to establish session
            if (err) {
                return next(err);
            }
            return res.redirect('/'); // Redirect to the home page after successful login
        });
    })(req, res, next);
};

const logout = (req, res) => {
    res.clearCookie("authToken");
    req.logout((err) => {
        if (err) {
            return res.status(500).send("Error logging out");
        }

        res.redirect('/');
    })
}


module.exports = { authentication, CallbackOnAuth, logout };