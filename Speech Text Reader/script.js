const main = document.querySelector("main");
const voiceSelect = document.getElementById("voices");
const textarea = document.getElementById("text");
const readBtn = document.getElementById("read");
const toggleBtn = document.getElementById("toggle");
const closeBtn = document.getElementById("close");

const data = [
  {
    image: "./img/drink.jpg",
    text: "목말라",
  },
  {
    image: "./img/food.jpg",
    text: "배고파",
  },
  {
    image: "./img/tired.jpg",
    text: "피곤해",
  },
  {
    image: "./img/hurt.jpg",
    text: "아파 죽겠어",
  },
  {
    image: "./img/happy.jpg",
    text: "히힛 행복해",
  },
  {
    image: "./img/angry.jpg",
    text: "으아아아 화난다!",
  },
  {
    image: "./img/sad.jpg",
    text: "흑흑 눈물나도록 슬퍼",
  },
  {
    image: "./img/scared.jpg",
    text: "무서워",
  },
  {
    image: "./img/outside.jpg",
    text: "밖에 나가고 싶어",
  },
  {
    image: "./img/home.jpg",
    text: "집에 갈래",
  },
  {
    image: "./img/school.jpg",
    text: "학교 가고싶어",
  },
  {
    image: "./img/grandma.jpg",
    text: "할머니 보고싶어",
  },
];

data.forEach(createBox);

function createBox(item) {
  const box = document.createElement("div");

  const { image, text } = item;

  box.classList.add("box");
  box.innerHTML = `
    <img src="${image}" alt="${text}" />
    <p class="info">${text}</p>
  `;

  box.addEventListener("click", () => {
    setTextMessage(text);
    speakText();

    box.classList.add("active");
    setTimeout(() => {
      box.classList.remove("active");
    }, 800);
  });

  main.appendChild(box);
}

const message = new SpeechSynthesisUtterance();

let voices = [];

function getVoices() {
  voices = speechSynthesis.getVoices();

  voices.forEach((voice) => {
    const option = document.createElement("option");

    option.value = voice.name;
    option.innerText = `${voice.name} ${voice.lang}`;

    voiceSelect.appendChild(option);
  });
}

function setTextMessage(text) {
  message.text = text;
}

function speakText() {
  speechSynthesis.speak(message);
}

function setVoice(e) {
  message.voice = voices.find((voice) => voice.name === e.target.value);
}

speechSynthesis.addEventListener("voiceschanged", getVoices);

toggleBtn.addEventListener("click", () =>
  document.getElementById("text-box").classList.toggle("show")
);

closeBtn.addEventListener("click", () =>
  document.getElementById("text-box").classList.remove("show")
);

voiceSelect.addEventListener("change", setVoice);

readBtn.addEventListener('click',() => {
  setTextMessage(textarea.value)
  speakText()
})

getVoices();
