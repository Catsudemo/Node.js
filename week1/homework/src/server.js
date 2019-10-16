'use strict';

const http = require('http');
const whatCommand = require('./commands')

function createServer(PORT) {
  let state = 10;

  const server = http.createServer((request, response) => {
    const URLString = request.url;
    console.log(URLString)
    try {
      state = whatCommand(URLString, state)

      response.writeHead(200, { 'Content-Type': 'application/json' });
      response.end(JSON.stringify({ response: `The state is ${state}` }))
    }
    catch (err) {
      response.writeHead(406, { 'Content-Type': 'application/json' });
      response.end(JSON.stringify({ response: `${err}` }))
    }
  });
  server.setTimeout(100)
  return server;
}

module.exports = {
  createServer
};