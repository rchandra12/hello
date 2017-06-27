'use strict';
var port = process.env.PORT || 1337;
var restify = require('restify');
var server = restify.createServer();

server.listen(port);

require('./routes')(server);