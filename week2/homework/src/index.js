'use strict';

var fs = require('fs')
let filename = './todolist.txt';
let currentList = fs.readFileSync(filename, "utf-8").toString().split("\n");
let whichFunction = process.argv[2];
let rawInput = process.argv.splice(3).join(' ')
let userInput = `${rawInput}`
let helpfile = fs.readFileSync('./helpfile.txt', "utf-8")

const {
  addToList,
  removeFromList,
  resetList,
  confirmReset
} = require('./modules');



function writeFile(file, list) {
  let updateList = list.join("\n")
  fs.writeFile(file, updateList, function (err) {
    if (err) throw error;
  })
}



function whichDo(file, list, theFunction, input) {
  if (theFunction == 'add') {
    addToList(file, list, input)
    console.log(`Okay, ${input} is on your list`)
  }
  else if (theFunction == 'remove') {
    removeFromList(list, input)
    console.log(`Okay, item ${input} is no longer on your list`)
  }
  else if (theFunction == 'list') {
    console.log('The items on your list are: ', list)
  }
  else if (theFunction == 'confirm') {
    resetList(list);
  }

  else if (theFunction == 'reset') {
    confirmReset(list)
  }
  else {
    console.log(helpfile)
  };
}

function runList(file, list, theFunction, input) {
  whichDo(file, list, theFunction, input);
  writeFile(file, list)

}

runList(filename, currentList, whichFunction, userInput)