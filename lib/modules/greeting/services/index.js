'use strict';

/**
 * Business Layer - Use Cases
 */

// const Repository = require('./repository');

// Greetings Subsystem Facade, or services layer or use cases

module.exports = (db, options) => {

    // const repository = Repository(db);

    const sayHello = (language, subject) => {

        const greeting = options[language || 'en'].hello;

        return `${greeting} ${subject}!`;
    };

    return {
        sayHello
    };
};
