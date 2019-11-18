'use strict';

// Plugins
const BasicAuth = require('@hapi/basic');

// Modules
const Auth = require('../lib/modules/auth');
const DB = require('../lib/modules/db');
const Events = require('../lib/modules/events');
const Greetings = require('../lib/modules/greetings');

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
            plugin: DB,
            options: {
                host: process.env.PG_HOST || '127.0.0.1',
                port: process.env.PG_PORT || 5432,
                database: process.env.PG_DB || 'hapi_start',
                user: process.env.PG_USER || 'postgres',
                password: process.env.PG_PWD,
                ssl: process.env.PG_SSL || false,
                poolSize: process.env.PG_POOL || 10
            }
        },
        {
            plugin: Events,
            options: {
                redisUrl: process.env.REDIS_URL || 'redis://localhost'
            }
        },
        {
            plugin: Greetings,
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
