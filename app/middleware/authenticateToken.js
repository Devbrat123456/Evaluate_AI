
const jwt = require("jsonwebtoken");
const jwtSecret = process.env.JWT_SECRET_TOKEN;

function authenticateToken(req, res, next) {
    // const authHeader = req.headers["authorization"];
    // const token = authHeader && authHeader.split(" ")[1]; // Extract token
    const token = req.cookies.authToken;


    if (token) {
        jwt.verify(token, jwtSecret, (err, user) => {
            if (err) {
                return res.status(403).json({ message: "Invalid or expired token"+err });
            }

            req.user = [user]; // Attach user info to request
            next();
        });
    } else {
        next();
    }
    // Verify token

}

module.exports = authenticateToken;