const {Pool} = require("pg");
const dotenv = require("dotenv");

dotenv.config();

const pool = new Pool({
	host: process.env.DB_HOST,
	port: process.env.DB_PORT,
	database: process.env.DB_NAME,
	user: process.env.DB_USER,
	password: process.env.DB_PASSWORD,
});

pool.connect((err, client, release) => {
	if (err) {
		console.error("Error acquiring client", err);
		return;
	}
	console.log("Connected to the database!");
	release();
});

try {
	pool.query("SELECT * FROM admin", (err, result) => {
		if (err) {
			console.error("Error executing query", err);
			return;
		}
		console.log(result.rows);
	});
} catch (error) {
	console.error("Error in query execution", error);
}

module.exports = pool;
