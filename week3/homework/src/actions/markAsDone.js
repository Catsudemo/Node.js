'use strict';

function markAsDone(todo, request, response) {
  return new Promise((resolve, reject) => {
    const id = request.params.id;
    resolve(todo.markDone(id))
  })
    .then(todo => {
      response.status(200);
      response.json({ todo });
    })
    .catch(({ message, code }) => {
      response.status(code === 'not-found' ? 404 : 500);
      response.json({ error: message });
    });
};

module.exports = markAsDone;