'use strict';

const Massive = require('massive');

module.exports = {
    name: 'db',
    register: async (server, options) => {

        const db = await Massive(options);

        server.app.db = db;
    }
};
