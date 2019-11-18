'use strict';

/**
 * Business Layer - Use Cases
 */

const sayHello = (options) => (language, subject) => {

    const greeting = options[language || 'en'].hello;

    return `${greeting} ${subject}!`;
};

const track = (repository) => (event, params) => {

    repository.trackEvent(event, params);
};

const count = (repository) => (event) => {

    return repository.countEvents(event);
};


// Greetings Subsystem Facade: services layer / use cases

module.exports = (repository, options) => {

    return {
        sayHello: sayHello(options),
        track: track(repository),
        count: count(repository)
    };
};
