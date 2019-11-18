'use strict';

/**
 * Business Layer - Data Access Abstraction
 */


const trackEvent = (db) => (_key, event) => {

    db.greetings.insert({ event });
};

const countEvents = (db) => async (_key, _payload) => {

    return await db.greetings.count();
};

module.exports = (db, _events) => {

    return {
        trackEvent: trackEvent(db),
        countEvents: countEvents(db)
    };
};
