const jwt = require("jsonwebtoken");
require("dotenv").config();
const bcrypt = require("bcrypt");

const hashPassword = async password => {
	const saltRounds = 10;
	return await bcrypt.hash(password, saltRounds);
};

const requireAuthentication = (req, res, next) => {
	try {
		const token = req.headers.authorization.split(" ")[1];
		if (!token) {
			return res
				.status(401)
				.json({error: "Authentication token is missing."});
		}

		const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
		req.user = {userId: decodedToken.userId};
		next();
	} catch (error) {
		if (error.name === "JsonWebTokenError") {
			return res.status(401).json({error: "Invalid authentication token."});
		} else if (error.name === "TokenExpiredError") {
			return res
				.status(401)
				.json({error: "Authentication token has expired."});
		}

		res.status(401).json({error: "Authentication failed."});
	}
};

module.exports = {requireAuthentication, hashPassword};
