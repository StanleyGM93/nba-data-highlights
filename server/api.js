const express = require("express");
const cors = require("cors");
require("dotenv").config();
const app = express();

const seasonRouter = require("./routes/season");
const standingsRouter = require("./routes/standings");

app.use(cors());

app.use("/seasons", seasonRouter);
app.use("/standings", standingsRouter);

app.listen(3001, () => {
	console.log("Server listening on port 3001");
});
