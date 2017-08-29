var bagElement = document.getElementsByClassName('bag')[0];

bagElement.addEventListener('click', function() {
  location.href = 'shopping-bag.html';
});

var bag = getBagContent();
bagElement.innerHTML = '<span class="bagIcon"></span>Bag £' + bag['sum'];

function getBagContent() {
  return JSON.parse(localStorage.getItem('bag'));
}
