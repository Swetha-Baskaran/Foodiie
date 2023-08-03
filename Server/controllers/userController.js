const pool = require("../db/db");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const {hashPassword} = require("../middlewares/authentication");
require("dotenv").config();

const registerUser = async (req, res) => {
	try {
		const {username, email, password} = req.body;

		// Check if the username or email already exists in the database
		const existingUser = await pool.query(
			"SELECT * FROM users WHERE username = $1 OR email = $2",
			[username, email]
		);

		if (existingUser.rows.length > 0) {
			return res
				.status(409)
				.json({error: "Username or email already exists."});
		}

		// Hash the password
		const hashedPassword = await hashPassword(password);

		// Insert the user into the users table
		const newUser = await pool.query(
			"INSERT INTO users (username, email, password, full_name) VALUES ($1, $2, $3, $1) RETURNING *",
			[username, email, hashedPassword]
		);

		res.status(200).json(newUser.rows[0]);
	} catch (error) {
		console.error("Error registering user:", error);
		res.status(500).json({error: "Internal Server Error"});
	}
};

const loginUser = async (req, res) => {
	try {
		const {username, password} = req.body;

		// Find the user in the database based on the provided username
		const user = await pool.query("SELECT * FROM users WHERE username = $1", [
			username,
		]);

		// If the user is not found, return an error
		if (user.rows.length === 0) {
			return res.status(400).json({error: "Invalid credentials"});
		}

		// Compare the provided password with the hashed password in the database
		const isValidPassword = await bcrypt.compare(
			password, // Pass the raw password here
			user.rows[0].password // Pass the hashed password from the database here
		);

		// If the password is incorrect, return an error
		if (!isValidPassword) {
			return res.status(400).json({error: "Invalid credentials"});
		}

		// User is authenticated, generate an authentication token (JWT)
		const token = jwt.sign(
			{userId: user.rows[0].user_id},
			process.env.JWT_SECRET,
			{
				expiresIn: "1h", // Token expires in 1 hour (adjust as needed)
			}
		);

		// Return the authentication token in the response
		res.status(200).json({token});
	} catch (error) {
		console.error("Error logging in:", error);
		res.status(500).json({error: "Internal Server Error"});
	}
};

module.exports = {registerUser, loginUser};
