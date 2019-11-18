'use strict';

// Plugins
const BasicAuth = require('@hapi/basic');

// Modules
const Auth = require('../lib/modules/auth');
const Greeting = require('../lib/modules/greeting');

module.exports = {
    options: {
        port: process.env.PORT || 3000
    },
    plugins: [
        {
            plugin: BasicAuth
        },
        {
            plugin: Auth,
            options: {
                user: process.env.API_USER || 'dontdefault',
                password: process.env.API_PASSWORD || 'password'
            }
        },
        {
            plugin: Greeting,
            options: {
                es: {
                    hello: 'Hola'
                },
                en: {
                    hello: 'Hello'
                }
            }
        }
    ]
};
