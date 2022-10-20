/*console.log("hello")
jQuery(function($) {
    $('#swapHeart').on('click', function() {
      var $el = $(this),
        textNode = this.lastChild;
      $el.find('span').toggleClass('glyphicon-heart glyphicon-heart-empty');
      $el.toggleClass('swap');
    });
  });
  function add(a,b){
  return a + b;
}
console.log(div)
function addcartitemsdom(caret dowen){
let total = 0;
for (let i =0; i < itmes.length; i++) {
$("#cart_data").append('...-
');
total += itmes[i].price;
}
}
$('#total').html(total);

*/

console.log("hiii");
// making function
/*
function removecartitem(event) {
  var buttonfloat = event.target;
  buttoncfloat.parentelment.remove();
}*/
function ready() {
  // reomve itmes from cart
  var reomvecartbuttons = document.getElementsByClassName("cart-remove");
  console.log(reomvecartbuttons);
  for (var i = 0; i < reomvecartbuttons.length; i++) {
    var button = reomvecartbuttons[i];
    button.addEventListener("click", function (event) {
      var buttonfloat = event.target;
      //buttonfloat.parentelment.remove();
      console.log(buttonfloat.parentNode.parentNode.parentNode.remove())
    });
  }
}
ready();

