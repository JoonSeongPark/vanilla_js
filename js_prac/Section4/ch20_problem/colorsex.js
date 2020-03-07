document.bgColor = 'yellow'

document.getElementById('btn').addEventListener('click', colorFunction)

function colorFunction() {
  let sex = document.getElementById('sex').value

  if (sex == 'm') {
    document.bgColor = 'lightblue'
  } else if (sex == 'f') {
    document.bgColor = 'salmon'
  }
}