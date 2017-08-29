var links = document.querySelectorAll('.model>a');

for (var i = 0; i < links.length; i++) {
  links[i].addEventListener('click', goToItemPage);
}

function goToItemPage(e) {
  e.preventDefault();
  var itemName = this.querySelector('.description').innerHTML;
  var price = this.querySelector('.price').innerHTML.substring(1);
  var photo = this.getElementsByTagName('img')[0].src;
  var link = this.getAttribute('href') + '?' + photo + '&' + itemName + '&' + price;
  location.href = link;
}
