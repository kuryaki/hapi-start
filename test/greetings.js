
'use strict';

const Code = require('@hapi/code');
const Lab = require('@hapi/lab');
const Hapi = require('@hapi/hapi');

const Greetings = require('modules/greetings');

const lab = exports.lab = Lab.script();
const { describe, it, before } = lab;
const expect = Code.expect;

describe('Greetings', () => {

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

    it('works by default', async () => {

        const request = {
            method: 'GET',
            url: '/hello'
        };

        const response = await server.inject(request);

        expect(response.statusCode).to.equal(200);
        expect(response.result).to.equal('Hello world!');
    });

    it('works', async () => {

        const request = {
            method: 'GET',
            url: '/hello?language=es&subject=David'
        };

        const response = await server.inject(request);

        expect(response.statusCode).to.equal(200);
        expect(response.result).to.equal('Hola David!');
    });
});
