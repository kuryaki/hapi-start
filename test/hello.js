
'use strict';

const Code = require('@hapi/code');
const Lab = require('@hapi/lab');
const Hapi = require('@hapi/hapi');

const Hello = require('modules/hello');

const lab = exports.lab = Lab.script();
const { describe, it, before } = lab;
const expect = Code.expect;

describe('Hello', () => {

    let server;

    before(async () => {

        server = new Hapi.Server();

        await server.register([
            {
                plugin: Hello,
                options: {
                    es: { hello: 'Hola'  },
                    en: { hello: 'Hello' }
                }
            }
        ]);
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
