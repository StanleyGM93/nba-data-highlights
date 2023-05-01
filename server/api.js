const express = require("express");
const cors = require("cors");
require("dotenv").config();
const app = express();

app.use(cors());

const ApiKey = process.env.X_RAPIDAPI_KEY;

app.listen(3000, () => {
	console.log("Server listening on port 3000");
	console.log(ApiKey);
});
