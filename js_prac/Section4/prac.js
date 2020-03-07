function updateResult() {
  const checked = document.getElementById("checked").checked;

  if (checked == true) {
    document.getElementById("result").innerHTML = "Checked";
  } else {
    document.getElementById("result").innerHTML = "Not Checked";
  }
}

function showText() {
  const checked = document.getElementById("checked").checked;
  const text = document.getElementById('result')
  if (checked == true) {
    text.style.display = 'block'
  } else {
    text.style.display = 'none'
  }
}


function lightSwitch() {
  const checked = document.getElementById("checked").checked;

  if (checked == true) {
    document.bgColor = 'black'
  } else {
    document.bgColor = 'white'
  }
}

function checkbrowser(brows) {
  document.getElementById('answer').value = brows
}