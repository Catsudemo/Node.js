
function whatURL(command, state) {
  switch (command) {
    case 'state':
      console.log('checked state')
      return state;
    case 'add':
      state = state + 1;
      console.log('added 1')
      return state;
    case 'subtract':
      state = state - 1;
      console.log('subtracted 1')
      return state;
    case 'reset':
      state = 10;
      console.log('reset state')
      return state;
    default:
      return state;

  }
}

module.exports = whatURL