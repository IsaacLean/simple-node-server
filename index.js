var server = require('./server');
var requestHandlers = require('./requestHandlers');
var router = require('./router');

var handle = {
    '/': requestHandlers.start,
    '/start': requestHandlers.start,
    '/upload': requestHandlers.upload
};

server.start(router.route, handle);
