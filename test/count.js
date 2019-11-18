
'use strict';

const Code = require('@hapi/code');
const Lab = require('@hapi/lab');
const Hapi = require('@hapi/hapi');

const Greetings = require('modules/greetings');

const lab = exports.lab = Lab.script();
const { describe, it, before } = lab;
const expect = Code.expect;

describe('Count Gretings', () => {

    let server;

    const greetingEvents = [];

    before(async () => {

        server = new Hapi.Server();

        await server.register([
            {
                plugin: {
                    name: 'db',
                    register: () => {

                        server.app.db = {
                            greetings: {
                                count: () => {

                                    return greetingEvents.length;
                                },
                                insert: (event) => {

                                    greetingEvents.push(event);
                                }
                            }
                        };
                    }
                }
            },
            {
                plugin: Greetings,
                options: {
                    es: { hello: 'Hola'  },
                    en: { hello: 'Hello' }
                }
            }
        ]);
    });

    it('counts 10 greetings', async () => {

        const helloRequest = {
            method: 'GET',
            url: '/hello'
        };

        let totalGreetings = 0;

        while (totalGreetings < 10) {

            await server.inject(helloRequest);
            totalGreetings++;
        }

        const request = {
            method: 'GET',
            url: '/count'
        };

        const response = await server.inject(request);

        expect(response.statusCode).to.equal(200);
        expect(response.result).to.equal(10);
    });

});
