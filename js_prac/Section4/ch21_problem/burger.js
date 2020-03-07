const TAXRATE = 0.13;
const BURGERPRICE = 6.5;
const FRIESPRICE = 3.5;
const DRINKSPRICE = 2.5;

function updateOrder() {
  let B = parseInt(document.getElementById('burgers').value)
  let F = parseInt(document.getElementById('fries').value)
  let D = parseInt(document.getElementById('drinks').value)

  let subtotal = BURGERPRICE*B + FRIESPRICE*F + DRINKSPRICE*D

  let tax = subtotal*TAXRATE

  let total = subtotal + tax

  document.getElementById("subtotal").value = '$ ' + subtotal.toFixed(2)
  document.getElementById("tax").value = '$ ' + tax.toFixed(2)
  document.getElementById("total").value = '$ ' + total.toFixed(2)
}