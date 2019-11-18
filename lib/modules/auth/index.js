'use strict';

module.exports = {
    name: 'auth',
    dependencies: 'basic',
    register: (server, options) => {

        const validate = (_request, user, password, _h) => {

            const isValid = user === options.user && password === options.password;
            const credentials = { id: options.user };

            return { isValid, credentials };
        };

        server.auth.strategy('simple', 'basic', { validate });
        server.auth.default('simple');

    }
};
