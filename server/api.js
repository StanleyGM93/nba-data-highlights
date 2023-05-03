const express = require("express");
const cors = require("cors");
require("dotenv").config();
const app = express();

const seasonRouter = require("./routes/season");

app.use(cors());

app.use("/seasons", seasonRouter);

// Headers for API request
// const ApiKey = process.env.X_RAPIDAPI_KEY;
// const host = process.env.X_RAPIDAPI_HOST;

app.listen(3000, () => {
	console.log("Server listening on port 3000");
});
