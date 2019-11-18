'use strict';

const Routes = require('./api/routes');
const Handlers = require('./api/handlers');

const Services = require('./services');
const Repository = require('./services/repository');
const Workers = require('./workers');

module.exports = {
    name: 'greetings',
    dependencies: [
        'db',
        'events'
    ],
    register: (server, options) => {

        const { db, events } = server.app;

        const services = Services(
            Repository(
                db,
                events
            ),
            options
        );

        server.route(
            Routes(
                Handlers(
                    services
                )
            )
        );

        server.app.hello = services;

        server.log(['info'], 'Greetings plugin Started');
        Workers(services, options).start();
    }
};
