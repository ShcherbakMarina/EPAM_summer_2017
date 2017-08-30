var bagElement = document.getElementsByClassName('bag')[0];

bagElement.addEventListener('click', function() {
  location.href = 'shopping-bag.html';
});

var bag = getBagContent() || {};
if (bag.hasOwnProperty('sum') && bag['sum'] > 0) {
  bagElement.innerHTML = '<span class="bagIcon"></span>Bag £' + bag['sum'] + ' (' + bag['totalAmount'] + ')';
} else {
  bagElement.innerHTML = '<span class="bagIcon"></span>Bag (0)';
}

function getBagContent() {
  return JSON.parse(localStorage.getItem('bag'));
}
