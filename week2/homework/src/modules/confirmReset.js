function confirmReset(list) {
  if (list.length > 0) {
    console.log('Are you sure you want to remove all items from your list? Type confirm to confirm')
  }
  else {
    console.log('There are no items on your list.')
  }
  return list
}

module.exports = confirmReset