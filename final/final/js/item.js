var addToBagButton = document.getElementsByClassName('addToBag')[0];


addToBagButton.addEventListener('click', addToBag);
// console.log(addToBag);

function addToBag() {
  var parent = this.parentElement;
  console.log(parent);
}
