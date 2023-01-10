const express = require('express');

// import all the routes here
// const userRoutes = require('./user.route');

const router = express.Router();

const defaultRoutes = [
	{
	  path: '/auth',
	  route: authRoute,
	},
	{
	  path: '/users',
	  route: userRoute,
	},
  ];
  
  const devRoutes = [
	// routes available only in development mode
	{
	  path: '/docs',
	  route: docsRoute,
	},
  ];
  

/**
 * GET v1/status
 */
router.get('/status', (req, res) => {
	res.json({
		message: 'OK',
		timestamp: new Date().toISOString(),
		IP: req.ip,
		URL: req.originalUrl,
	});
});

defaultRoutes.forEach((route) => {
	router.use(route.path, route.route);
});

/* istanbul ignore next */
if (config.env === 'development') {
	devRoutes.forEach((route) => {
		router.use(route.path, route.route);
	});
}

module.exports = router;