const guessNum
const count = 0

function ranNum () {
  const temp = Math.random()*100
  guessNum = Math.floor(temp)
  console.log(guessNum)
}

function guessResult() {
  count += 1
  console.log(count)
  if (count == 10 ) {
    alert('Too many try!\nGAME OVER!')
  }

  let gN = parseInt(document.getElementById('guessN').value)

  if (guessNum == gN) {
    document.getElementById('result').value = 'Game Finish!'
  } else if (guessNum > gN) {
    document.getElementById('result').value = 'Put a higher Number'
  } else if (guessNum < gN) {
    document.getElementById('result').value = 'Put a lower Number'
  }
}


