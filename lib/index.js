'use strict';

// Dependencies
const Hapi = require('@hapi/hapi');

// Manifest
const Manifest = require('../config/manifest');

const startServer = async () => {

    const server = new Hapi.Server(Manifest.options);

    server.events.on('response', (request) => {
        console.log(request.info.remoteAddress + ': ' + request.method.toUpperCase() + ' ' + request.path + ' --> ' + request.response.statusCode);
    });

    await server.register(Manifest.plugins);
    await server.start();
};

startServer().catch((err) => {

    console.error(err);
    process.exit(1);
});

process.on('uncaughtException', (err) => {

    console.error(err);
    process.exit(1);
});

process.on('unhandledRejection', (err) => {

    console.error(err);
    process.exit(1);
});

process.on('exit', (code) => {

    console.log('About to exit with code:', code);
});

console.log('Hello from Hapi: http://dontdefault:password@localhost:3000/hello?language=en&subject=World');
