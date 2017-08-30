/*парсинг url, чтобы достать данные для товара*/
var p_url = location.search.substring(1);
p_url = p_url.replace(/%20/g, ' ');
var parametr = p_url.split("&");

var bagElement = document.getElementsByClassName('bag')[0];

var item = document.querySelector('.item');
item.querySelector('img').src = parametr[0];
item.querySelector('.name').innerHTML = parametr[1];
item.querySelector('.price').innerHTML = '£' + parametr[2];



/*функционал по нажатию на кнопку Add to bag*/
var addToBagButton = document.getElementsByClassName('addToBag')[0];

addToBagButton.addEventListener('click', addToBag);

function addToBag() {
  var bag = getBagContent() || {};
  var item = this.parentElement.parentElement.parentElement;
  var itemName = item.querySelector('.name').innerHTML;
  var itemSize = item.querySelector('input[name="size"]:checked').value;
  var itemColor = item.querySelector('input[name="color"]:checked').value;
  var itemPhoto = item.querySelector('img').src;
  var itemId = itemName + '' + itemSize + '' + itemColor;
  var itemPrice = item.querySelector('.price').innerHTML.substring(1);
  var itemAmount = 1;
  var totalAmount = 1;


  if (bag.hasOwnProperty('sum')) {
    bag['sum'] += +itemPrice;
    bag['totalAmount'] += totalAmount;
  } else {
    bag['sum'] = +itemPrice;
    bag['totalAmount'] = totalAmount;
  }

  console.log(bag['sum']);
  bag['sum'] = +bag['sum'].toFixed(2);
  console.log(bag['sum']);

  bagElement.innerHTML = '<span class="bagIcon"></span>Bag £' + bag['sum'] + ' (' + bag['totalAmount'] + ')';

  if (bag.hasOwnProperty(itemId) && bag[itemId][2] == itemSize && bag[itemId][3] == itemColor) {
  	bag[itemId][4].amount += 1;
  } else {
    bag[itemId] = [itemName, itemPrice, itemSize, itemColor, {amount: itemAmount}, itemPhoto];
  }

  updateBagContent(bag);
}

function getBagContent() {
  return JSON.parse(localStorage.getItem('bag'));
}

function updateBagContent(bagContent) {
  localStorage.setItem('bag', JSON.stringify(bagContent));
}
