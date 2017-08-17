document.addEventListener("DOMContentLoaded", function(event) {
  var arr = [];
  var body = document.body;

  function getAllTree(elem) {
    for (var i = 0; i < elem.children.length; i++) {
      arr.push(elem.children[i]);
      var l = elem.children[i].firstElementChild;
      while (l) {
        arr.push(l);
        l = getAllTree(l);
      }
    }
    return elem.nextElementSibling;
  }

  getAllTree(body);

  for (var i = 0; i < arr.length; i++) {
    console.log(arr[i].children.length);
    if (!arr[i].children.length) {
      arr[i].setAttribute('class', 'blink');
    }
  }
});
