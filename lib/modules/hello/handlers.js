'use strict';

const sayHello = (options) => (request, _h) => { // eslint-disable-line

    const { language, subject } = request.query;

    const greeting = options[language].hello;

    return `${greeting} ${subject}!`;
};

module.exports = (options) => {

    return {
        sayHello: sayHello(options)
    };
};
