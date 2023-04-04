const express = require('express');
const serverConfig = require('./server.config');

const app = express(); // Initialize express instance

// initialize the server
module.exports = app.listen((serverConfig.HOST, serverConfig.PORT), () => {
    console.log(`Application Running on ${serverConfig.HOST}:${serverConfig.PORT}`);
});
