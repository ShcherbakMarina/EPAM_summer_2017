var bag = JSON.parse(localStorage.getItem('bag'));

var d = document;
var wrapper = d.querySelector('.bagContent .wrapper');
var controlBtns = d.querySelector('.controlButtons');
var emptyBagBtn = d.querySelector('.emptyBagButton');
var buyNow = d.querySelector('.buyNow');
// var main = d.querySelector('main');
// var controlBtns = d.createElement('div');
// controlBtns.classList.add('controlButtons');
// var innerWrapper = d.createElement('div');
// innerWrapper.classList.add('wrapper');
// var emptyBagBtn = d.createElement('button');
// emptyBagBtn.classList.add('emptyBagButton');
// var buyNow = d.createElement('bu')

if (!bag) {
  addEmptyBagMsg();
} else {
  controlBtns.style.display = 'block';
}

for (var key in bag) {
  if (key == 'sum' || key == 'totalAmount') continue;
  var model = d.createElement('div');
  model.classList.add('model');
  var photo = d.createElement('div');
  photo.classList.add('photo');
  var img = d.createElement('img');
  img.src = bag[key][5];
  var info = d.createElement('div');
  info.classList.add('info');
  var title = d.createElement('p');
  title.innerHTML = bag[key][0];
  title.classList.add('name');
  var price = d.createElement('p');
  price.innerHTML = '£' + bag[key][1];
  price.classList.add('price');
  var color = d.createElement('p');
  color.innerHTML = 'Color: ' + bag[key][3];
  color.classList.add('color');
  var size = d.createElement('p');
  size.innerHTML = 'Size: ' + bag[key][2];
  size.classList.add('size');
  var quantity = d.createElement('p');
  quantity.innerHTML = 'Quantity: ' + bag[key][4].amount;
  quantity.classList.add('quantity');
  var removeItem = d.createElement('p');
  removeItem.innerHTML = 'Remove item';
  removeItem.classList.add('removeItem');
  removeItem.addEventListener('click', remove);
  wrapper.appendChild(model);
  model.appendChild(photo);
  model.appendChild(info);
  photo.appendChild(img);
  info.appendChild(title);
  info.appendChild(price);
  info.appendChild(color);
  info.appendChild(size);
  info.appendChild(quantity);
  info.appendChild(removeItem);
}

emptyBagBtn.addEventListener('click', function() {
  localStorage.removeItem('bag');
  bagElement.innerHTML = '<span class="bagIcon"></span>Bag (0)';

  while(wrapper.children[0]) {
    wrapper.removeChild(wrapper.children[0]);
  };

  addEmptyBagMsg();
  controlBtns.style.display = 'none';
});


buyNow.addEventListener('click', function() {
  localStorage.removeItem('bag');
  bagElement.innerHTML = '<span class="bagIcon"></span>Bag (0)';

  while(wrapper.children[0]) {
    wrapper.removeChild(wrapper.children[0]);
  };

  addPurchaseMsg();
  controlBtns.style.display = 'none';
});


function remove() {
  var model = this.parentElement.parentElement;
  var title = this.parentElement.querySelector('.name').innerHTML;
  var price = this.parentElement.querySelector('.price').innerHTML.substring(1);
  var size = this.parentElement.querySelector('.size').innerHTML.substring(6);
  var color = this.parentElement.querySelector('.color').innerHTML.substring(7);
  var quantity = this.parentElement.querySelector('.quantity');
  var itemId = title + size + color;
  var bag = JSON.parse(localStorage.getItem('bag'));
  if (bag[itemId][4].amount > 1) {
    bag[itemId][4].amount -= 1;
    quantity.innerHTML = 'Quantity: ' + bag[itemId][4].amount;
  } else {
    delete bag[itemId];
    wrapper.removeChild(model);
  }

  if (bag['totalAmount'] == 1) {
    localStorage.removeItem('bag');
  } else {
    bag['sum'] -= +price;
    bag['totalAmount'] -= 1;
  }

  if (!localStorage.getItem('bag')) {
    bagElement.innerHTML = '<span class="bagIcon"></span>Bag (0)';
    addEmptyBagMsg();
    controlBtns.style.display = 'none';
  } else {
    bagElement.innerHTML = '<span class="bagIcon"></span>Bag £' + bag['sum'] + ' (' + bag['totalAmount'] + ')';
    localStorage.setItem('bag', JSON.stringify(bag));
  }
}


function addEmptyBagMsg() {
  var p = d.createElement('p');
  p.classList.add('emptyBagMsg');
  p.innerHTML = 'Your shopping bag is empty. Use <a href="catalog.html">Catalog</a> to add new items.';
  wrapper.appendChild(p);
}

function addPurchaseMsg() {
  var p = d.createElement('p');
  p.classList.add('afterPurchaseMsg');
  p.innerHTML = 'Thank you for your purchase.';
  wrapper.appendChild(p);
}
