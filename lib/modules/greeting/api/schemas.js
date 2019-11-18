'use strict';

const Joi = require('@hapi/joi');

module.exports = {
    inputs: {
        hello: Joi.object({
            language: Joi.string().valid('en', 'es'),
            subject: Joi.string().pattern(/^[a-zA-Z\s]*$/).max(20).default('world')
        })
    },
    outputs: {
        hello: Joi.string()
    }
};
