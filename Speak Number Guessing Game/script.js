const msgEl = document.getElementById("msg");

const randomNum = getRandomNumber();

window.SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;

let recognition = new window.SpeechRecognition();

recognition.start();

function onSpeak(e) {
  const msg = e.results[0][0].transcript;

  writeMessage(msg);
  checkNumber(msg);
}

function writeMessage(msg) {
  msgEl.innerHTML = `
      <div>You said: </div>
      <span class='box'> ${msg}</span>
    `;
}

function checkNumber(msg) {
  const num = +msg;

  if (Number.isNaN(num)) {
    msgEl.innerHTML += "<div>숫자가 아닙니다.</div>";
    return;
  }

  if (num > 100 || num < 1) {
    msgEl.innerHTML += "<div>1~100 사이의 숫자를 입력하세요.</div>";
    return;
  }

  if (num === randomNum) {
    document.body.innerHTML = `
      <h2>축하합니다! <br><br>
      랜덤 숫자는 ${num} 입니다.</h2>
      <button class="play-again" id="play-again">Play Again</button>
    `;
  } else if (num > randomNum) {
    msgEl.innerHTML += "<div>보다 낮은 숫자를 입력하세요.</div>";
  } else {
    msgEl.innerHTML += "<div>보다 높은 숫자를 입력하세요.</div>";
  }
}

function getRandomNumber() {
  return Math.floor(Math.random() * 100) + 1;
}

recognition.addEventListener("result", onSpeak);

recognition.addEventListener('end', () => {
  recognition.start()
})

document.body.addEventListener('click', () => {
  if (e.target.id == 'play-again') {
    window.location.reload()
  }
})