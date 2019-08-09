'use strict';

// Dependencies
const Hapi = require('@hapi/hapi');

// Manifest
const Manifest = require('../config/manifest');

const startServer = async () => {

    const server = new Hapi.Server(Manifest.options);
    await server.register(Manifest.plugins);
    await server.start();
};

startServer().catch((err) => {

    console.error(err);
    process.exit(1);
});

console.log('Hello from Hapi: http://dontdefault:password@localhost:3000/hello?language=en&subject=World');
