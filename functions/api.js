const express = require('express');
const serverless = require('serverless-http');
const cors = require('cors');
const app = express();
const bodyParser = require('body-parser');

const router = require('./router');

app.use(cors());
app.use(bodyParser.json());
app.use('/api', router);  // path must route to lambda

module.exports = app;
module.exports.handler = serverless(app);