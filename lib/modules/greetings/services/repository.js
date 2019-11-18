'use strict';

/**
 * Business Layer - Data Access Abstraction
 */

const greetingEvents = [];

const trackEvent = (_key, payload) => {

    greetingEvents.push(payload);
};

const countEvents = (_key, payload) => {

    return greetingEvents.length;
};

module.exports = (_db, _events) => {

    return {
        trackEvent,
        countEvents
    };
};
