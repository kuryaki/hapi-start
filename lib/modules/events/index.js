'use strict';

const QStream = require('@openmessage/qstream');

module.exports = {
    name: 'events',
    register: (server, { redisUrl }) => {

        const qstream = QStream(redisUrl);

        server.app.qstream = qstream;
    }
};
