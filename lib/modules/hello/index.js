'use strict';

const Routes = require('./routes');
const Handlers = require('./handlers');

module.exports = {
    name: 'api',
    version: '0.0.1',
    register: (server, options) => {

        server.route(Routes(Handlers(options)));
        server.log(['info'], 'Hello plugin Started');
    }
};
