var addToBagButton = document.getElementsByClassName('addToBag')[0];


addToBagButton.addEventListener('click', addToBag);

function addToBag() {
  var bag = getBagContent() || {};
  var item = this.parentElement.parentElement.parentElement;
  var itemName = item.querySelector('.name').innerHTML;
  var itemSize = item.querySelector('input[name="size"]:checked').value;
  var itemColor = item.querySelector('input[name="color"]:checked').value;
  var itemId = itemName + '/' + itemSize + '/' + itemColor;


  if (bag.hasOwnProperty(itemId) && bag[itemId][2] == itemSize && bag[itemId][3] == itemColor) {
  	bag[itemId][4].amount += 1;
  } else {
    var itemPrice = item.querySelector('.price').innerHTML.substring(1);
    var itemAmount = 1;
    bag[itemId] = [itemName, itemPrice, itemSize, itemColor, {amount: itemAmount}];
  }

  updateBagContent(bag);
}

function getBagContent() {
  return JSON.parse(localStorage.getItem('bag'));
}

function updateBagContent(bagContent) {
  localStorage.setItem('bag', JSON.stringify(bagContent));
}
