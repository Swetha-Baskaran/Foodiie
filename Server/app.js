const express = require("express");
const app = express();
require("./db/db");
const userRoutes = require("./routes/userRoutes");
const cors = require("cors"); // Import the cors package

// Middleware
app.use(cors()); // Use the cors middleware to enable CORS for all routes
app.use(express.json());

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
