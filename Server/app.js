const express = require("express");
const app = express();
require("./db/db");
const userRoutes = require("./routes/userRoutes");
const cors = require("cors"); // Import the cors package

// Middleware
app.use(express.json());
app.use(cors()); // Use the cors middleware to enable CORS for all routes

// cors() is giving some issues so using this
app.use((req, res, next) => {
	res.header("Access-Control-Allow-Origin", "*");
	res.header(
		"Access-Control-Allow-Headers",
		"Origin, X-Requested-With, Content-Type, Accept"
	);
	next();
});

// Routes
app.use("/users", userRoutes);

// Error handling
app.use((err, req, res, next) => {
	console.error(err.stack);
	res.status(500).json({error: "Internal Server Error"});
});

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
	console.log(`Server is running on port ${port}`);
});
