'use strict';

const Schemas = require('./schemas');

module.exports = (handlers) => [
    {
        method: 'GET',
        path: '/hello',
        config: {
            handler: handlers.sayHello,
            validate: {
                options: {
                    stripUnknown: true
                },
                query: Schemas.inputs.hello
            },
            response: {
                schema: Schemas.outputs.hello
            }
        }
    }
];
