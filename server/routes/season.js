const express = require("express");
const seasonRouter = express.Router();
const axios = require("axios");

const options = {
	method: "GET",
	url: "https://api-nba-v1.p.rapidapi.com/seasons",
	headers: {
		"X-RapidAPI-Key": process.env.X_RAPIDAPI_KEY,
		"X-RapidAPI-Host": process.env.X_RAPIDAPI_HOST,
	},
};

seasonRouter.get("/", async (req, res) => {
	try {
		const response = await axios.request(options);
		console.log(response.data);
		res.send(response.data);
	} catch (error) {
		console.log(error);
	}
});

module.exports = seasonRouter;
