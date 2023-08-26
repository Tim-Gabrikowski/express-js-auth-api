// import all functions from the logger module to a single object
import * as logger from "./logger.js";

// import and init dotenv (for environment files)
import dotenv from "dotenv";
dotenv.config();

import Express from "express";
const app = Express();

app.listen(process.env.PORT, () => {
	logger.info(
		"MAIN",
		"Listening on: " + "http://localhost:" + process.env.PORT
	);
});
