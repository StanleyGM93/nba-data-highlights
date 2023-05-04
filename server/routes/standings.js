const express = require("express");
const standingsRouter = express.Router();
const axios = require("axios");

const standingsRequest = {
	method: "GET",
	url: "https://api-nba-v1.p.rapidapi.com/standings",
	params: {
		league: "standard",
		// Need to change the season to a request param
		season: "2021",
	},
	headers: {
		"X-RapidAPI-Key": process.env.X_RAPIDAPI_KEY,
		"X-RapidAPI-Host": process.env.X_RAPIDAPI_HOST,
	},
};

standingsRouter.get("/", async (req, res) => {
	try {
		const response = await axios.request(standingsRequest);
		console.log(response.data);
		res.send(response.data);
	} catch (error) {
		console.error(error);
	}
});

module.exports = standingsRouter;
