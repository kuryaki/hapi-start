'use strict';

const sayHello = (services) => (request, _h) => { // eslint-disable-line

    const { language, subject } = request.query;

    return services.sayHello(language, subject);
};

module.exports = (services) => {

    return {
        sayHello: sayHello(services)
    };
};
