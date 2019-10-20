function removeFromList(list, input) {
  const number = (parseInt(input, 10));
  console.log(number)
  list.splice((number), 1)
  return list
}

module.exports = removeFromList;