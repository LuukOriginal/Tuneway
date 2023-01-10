const { version } = require('../../package.json');
const config = require('../config/config');

const swaggerDef = {
  openapi: '3.0.0',
  info: {
    title: 'Tuneway API documentation',
    version,
    // license: {
    //   name: 'MIT',
    //   url: 'https://github.com/LuukOriginal/Tuneway',
    // },
  },
  servers: [
    {
      url: `http://localhost:${config.port}/api/v1`,
    },
  ],
  components : []
};

module.exports = swaggerDef;
