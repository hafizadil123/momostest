const jwt = require('jsonwebtoken');

const authenticate = (req, res, next) => {
	// Get token from the header
	const token = req.header('x-auth-token');

	// Check if no token
	if (!token) {
		return res.status(401).json({ msg: 'No token, authorization denied' });
	}
	// verify token
	try {
         /* here token will verify through jwt, I am just here by passing for testing */
		// const decoded = jwt.verify(token, 'secret-key-here');
		// req.user = decoded.user;
		next();
	} catch (err) {
		return res.status(401).json({ msg: 'Token is no valid' });
	}
}
module.exports = authenticate;