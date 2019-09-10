function removeFromList(list, input) {
  list.splice(input, 1)
  return list
}

module.exports = removeFromList;