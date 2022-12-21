const express = require("express")
const cors = require("cors")
// const bodyparser = require("body-parser")

const routes = require("../api/routes/v1")

/**
 * Express instance
 * @public
 */
const app = express();

app.use((req, _, next) => {
	req.headers.origin = req.headers.origin || req.headers.host;
	next();
});

// CORS configuration
app.use(cors());

// Parse Body
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Routes
app.use('/api/v1', routes);

module.exports = app;