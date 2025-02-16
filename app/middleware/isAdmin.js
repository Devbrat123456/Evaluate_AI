

const verifyAdmin = (req, res, next) => {

    if (!req.user) {

        return res.redirect('/'); // Redirect to login if no user is logged in
    }
    if (req.user[0] && req.user[0].ROLE_ID && req.user[0].ROLE_ID == 'ADMIN') {

        return next(); // User is admin, allow access
    } else {

        return res.redirect('/'); // Redirect to homepage for unauthorized users
    }
}

module.exports = verifyAdmin;