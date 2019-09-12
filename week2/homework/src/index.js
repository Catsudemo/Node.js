'use strict';

var fs = require('fs')
let filename = './todolist.txt';
let whichFunction = process.argv[2];
let userInput = process.argv.splice(3).join(' ')
let helpfile = fs.readFileSync('./helpfile.txt', "utf-8")

const {
  addToList,
  removeFromList,
  listItems,
  resetList,
  confirmReset
} = require('./modules');

if (!fs.existsSync(filename)) {
  fs.writeFileSync(filename, '', function (err) {
    if (err) throw error;
  })
}

let currentList = fs.readFileSync(filename, "utf-8").toString().split("\n");

function writeFile(file, list) {
  let updateList = list.join("\n")
  fs.writeFileSync(file, updateList, function (err) {
    if (err) throw error;
  })
}

function runCommand(list, theFunction, input) {
  if (theFunction == 'add') {
    addToList(list, input)
    console.log(`Okay, ${input} is on your list`)
  }
  else if (theFunction == 'remove') {
    removeFromList(list, input)
    console.log(`Okay, item ${input} is no longer on your list`)
  }
  else if (theFunction == 'list') {
    listItems(list)
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
  runCommand(list, theFunction, input);
  writeFile(file, list)

}

runList(filename, currentList, whichFunction, userInput)