const pool = require("../db/db");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const registerUser = async (req, res) => {
	try {
		const {
			username,
			email,
			password,
			full_name,
			date_of_birth,
			address,
			profile_pic_url,
		} = req.body;

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
			"INSERT INTO users (username, email, password, full_name, date_of_birth, address, profile_pic_url) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *",
			[
				username,
				email,
				hashedPassword,
				full_name,
				date_of_birth,
				address,
				profile_pic_url,
			]
		);

		res.status(201).json(newUser.rows[0]);
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
			return res.status(401).json({error: "Invalid credentials"});
		}

		// Compare the provided password with the hashed password in the database
		const isValidPassword = await bcrypt.compare(
			password,
			user.rows[0].password
		);

		// If the password is incorrect, return an error
		if (!isValidPassword) {
			return res.status(401).json({error: "Invalid credentials"});
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
