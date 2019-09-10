function resetList(list) {
  let all = list.length;
  list.splice(0, all);
  console.log('Okay, everything has been removed from your list. ')
  return list
}

module.exports = resetList