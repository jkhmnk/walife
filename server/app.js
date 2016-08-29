const express = require('express');
const path = require('path');
// var proxyMiddleware = require('http-proxy-middleware')
var config = require('../build/config.js')
// var generateProxyConfig = require('../config/generateProxyConfig.js')

// ------------app----------------
const app = express();

// proxy
// const proxyTable = generateProxyConfig(config)
// Object.keys(proxyTable).forEach(function (context) {
//  var options = proxyTable[context]
//  if (typeof options === 'string') {
//    options = {target: options}
//  }
//  app.use(proxyMiddleware(context, options))
// })


// handle fallback for HTML5 history API
//app.use(require('connect-history-api-fallback')({
//  index: '/index.html',
//  verbose: false
//}))

// static
app.use('/' + config.projectName + '/static', express.static(path.resolve(__dirname, '../dist/' + config.projectName + '/static')));
app.use('/' + config.projectName + '', express.static(path.resolve(__dirname, '../dist/' + config.projectName + '/index.html')));

// /index.html
app.get('/index.html', function (req, res) {

    var options = {
        root: path.resolve(__dirname, '../dist/' + config.projectName + '/'),
    }

    var fileName = 'index.html'

    res.sendFile(fileName, options, function (err) {
        if (err) {
            console.log(err);
            res.status(err.status).end();
        }
    });
});

// 404
app.use(function (req, res, next) {
    const err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handlers
app.use(function (err, req, res, next) {
    res.status(err.status || 500);
    res.json({
        message: err.message,
        error: err
    });
});

var http = require('http');
//import app from './app'
//import http from 'http'


/**
 * Get port from environment and store in Express.
 */

const port = normalizePort(5000);
app.set('port', port);

/**
 * Create HTTP server.
 */

const server = http.createServer(app);

/**
 * Listen on provided port, on all network interfaces.
 */

server.listen(port);
server.on('error', onError);
server.on('listening', onListening);

/**
 * Normalize a port into a number, string, or false.
 */

function normalizePort(val) {
    const port = parseInt(val, 10);

    if (isNaN(port)) {
        // named pipe
        return val;
    }

    if (port >= 0) {
        // port number
        return port;
    }

    return false;
}

/**
 * Event listener for HTTP server "error" event.
 */

function onError(error) {
    if (error.syscall !== 'listen') {
        throw error;
    }

    const bind = typeof port === 'string'
        ? 'Pipe ' + port
        : 'Port ' + port;

    // handle specific listen errors with friendly messages
    switch (error.code) {
        case 'EACCES':
            console.error(bind + ' requires elevated privileges');
            process.exit(1);
            break;
        case 'EADDRINUSE':
            console.error(bind + ' is already in use');
            process.exit(1);
            break;
        default:
            throw error;
    }
}

/**
 * Event listener for HTTP server "listening" event.
 */

function onListening() {
    const addr = server.address();
    const bind = typeof addr === 'string'
        ? 'pipe ' + addr
        : 'port ' + addr.port;
    //debug('Listening on ' + bind)
    console.log('Listening on ' + bind)
}
