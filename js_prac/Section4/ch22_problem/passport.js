function yesClicked() {
  let yes = document.getElementById('yes').checked
  let passNum = document.getElementById('result')
  if (yes == true) {
    passNum.style.display = 'block'
  } else {
    passNum.style.display = 'none'
  }
}