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
      response.end(JSON.stringify({ state: state }))
    }
    catch (err) {
      response.writeHead(404, { 'Content-Type': 'application/json' });
      response.end(JSON.stringify({ error: 'Not found' }))
    }
  });
  server.setTimeout(100)
  return server;
}

module.exports = {
  createServer
};