const express = require('express');

//const db = require('./data/dbConfig.js');
let accountrouter = require('./account/accountrouter');


const server = express();

server.use(express.json());

server.use('/api/accounts', accountrouter)

module.exports = server;