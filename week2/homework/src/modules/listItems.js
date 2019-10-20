function listItems(list) {
  list = list.filter(Boolean)
  if (list.length < 1) { console.log('There are no items on your list') }
  else {
    let listLength = list.length;
    for (let i = 0; i < listLength; i++) {
      console.log(`${i + 1} ` + list[i]);
    }
  }
}

module.exports = listItems;