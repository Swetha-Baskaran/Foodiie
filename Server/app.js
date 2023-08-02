const express = require("express");
const app = express();
require("./db/db");
const userRoutes = require("./routes/userRoutes");

// Middleware
app.use(express.json());
app.use(cors());

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
