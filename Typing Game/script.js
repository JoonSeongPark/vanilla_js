const word = document.getElementById("word");
const text = document.getElementById("text");
const scoreEl = document.getElementById("score");
const timeEl = document.getElementById("time");
const endgameEl = document.getElementById("end-game-container");
const settingsBtn = document.getElementById("settings-btn");
const settings = document.getElementById("settings");
const settingsForm = document.getElementById("settings-form");
const difficultySelect = document.getElementById("difficulty");

// List of words for game
const words = [
  "코딩",
  "자바스트립트",
  "파이썬",
  "머신러닝",
  "딥러닝",
  "깃허브",
  "도커",
  "루비",
  "루비온레일즈",
  "리액트",
  "리덕스",
  "제이쿼리",
  "텐서플로우",
  "파이토치",
  "워드투벡",
  "프론트엔드",
  "백엔드",
  "가상환경",
  "리눅스",
  "시각화",
  "분석",
];

let randomWord;

let score = 0;

let time = 10;

let difficulty =
  localStorage.getItem("difficulty") !== null
    ? localStorage.getItem("difficulty")
    : "medium";

difficultySelect.value =
  localStorage.getItem("difficulty") !== null
    ? localStorage.getItem("difficulty")
    : "medium";
text.focus();

const timeInterval = setInterval(updateTime, 1000);

function getRandomWord() {
  return words[Math.floor(Math.random() * words.length)];
}

function addWordToDOM() {
  randomWord = getRandomWord();
  word.innerHTML = randomWord;
}

function updateScore() {
  score++;
  scoreEl.innerHTML = score;
}

function updateTime() {
  time--;
  timeEl.innerHTML = time + "s";

  if (time === 0) {
    clearInterval(timeInterval);

    gameOver();
  }
}

function gameOver() {
  endgameEl.innerHTML = `
  <h1>Time ran out</h1>
  <p>Your final score is ${score}</p>
  <button onclick="location.reload()">Restart</button>
  `;

  endgameEl.style.display = "flex";
}

addWordToDOM();

text.addEventListener("input", (e) => {
  const insertedText = e.target.value;

  if (insertedText === randomWord) {
    addWordToDOM();
    updateScore();

    e.target.value = "";

    if (difficulty === "hard") {
      time += 1;
    } else if (difficulty === "medium") {
      time += 2;
    } else {
      time += 3;
    }
    
    updateTime();
  }
});

difficultySelect.addEventListener("click", () =>
  settings.classList.toggle("hide")
);

settingsForm.addEventListener("change", (e) => {
  difficulty = e.target.value;
  localStorage.setItem("difficulty", difficulty);
});
