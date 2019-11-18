'use strict';

const Routes = require('./api/routes');
const Handlers = require('./api/handlers');

const Services = require('./services');
const Workers = require('./workers');

module.exports = {
    name: 'api',
    version: '0.0.1',
    dependencies: [

    ],
    register: (server, options) => {

        const { db, qstream } = server.app;

        const services = Services(db, options);

        server.route(
            Routes(
                Handlers(
                    services,
                    qstream,
                    options
                )
            )
        );

        server.app.hello = services;

        server.log(['info'], 'Hello plugin Started');
        Workers(db, options).start();
    }
};
