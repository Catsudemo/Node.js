'use strict';

const http = require('http');
const whatIDO = require('./commands')

/* `createServer` MUST return an instance of `http.Server` otherwise the tests
 * will fail.
 */

function createServer(PORT) {
  let state = 10;


  const server = http.createServer((request, response) => {
    // TODO: Write your homework code here
    const URLString = request.url;
    const URLArray = URLString.split('/').filter(command => ["state", "add", "subtract", "reset"].includes(command));
    console.log('Initiating commands')

    for (const command of URLArray) {
      state = whatIDO(command, state)
    }

    response.writeHead(200, { 'Content-Type': 'application/json' });
    response.end(JSON.stringify({ response: `The answer is ${state}` }))
  });
  server.setTimeout(100)








  return server;
}

module.exports = {
  createServer
};
