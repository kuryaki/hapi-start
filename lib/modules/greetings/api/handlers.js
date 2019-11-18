'use strict';

const sayHello = (services) => (request, _h) => {

    const { language, subject } = request.query;

    services.track('greeting', request.query);

    return services.sayHello(language, subject);
};

const count = (services) => (request, _h) => {

    return services.count('greeting');
};

module.exports = (services) => {

    return {
        sayHello: sayHello(services),
        count: count(services)
    };
};
