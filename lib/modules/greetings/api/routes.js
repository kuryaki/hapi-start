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
    },
    {
        method: 'GET',
        path: '/count',
        config: {
            handler: handlers.count,
            validate: {
                options: {
                    stripUnknown: true
                }
            },
            response: {
                schema: Schemas.outputs.count
            }
        }
    }
];
