const draggable_list = document.getElementById("draggable-list");
const check = document.getElementById("check");

const koreaUniv = [
  "서울대",
  "카이스트",
  "고려대",
  "포항공대",
  "성균관대",
  "연세대",
  "한양대",
  "경희대",
  "광주과학기술원",
  "이화여대",
];

// Store listitems
const listItems = [];

let dragStartIndex;

createList();
addEventListeners();

// Insert list items into DOM
function createList() {
  [...koreaUniv]
    .map((univ) => ({ value: univ, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map((a) => a.value)
    .forEach((univ, index) => {
      const listItem = document.createElement("li");

      listItem.setAttribute("data-index", index);

      listItem.innerHTML = `
      <span class='number'>${index + 1}</span>
      <div class="draggable" draggable="true">
        <p class="univ-name">${univ}</p>
        <i class="fas fa-grip-lines"></i>
      </div>
    `;

      listItems.push(listItem);

      draggable_list.appendChild(listItem);
    });
}

function dragStart() {
  dragStartIndex = +this.closest("li").getAttribute("data-index");
}
function dragOver(e) {
  e.preventDefault();
}
function dragDrop() {
  const dragEndIndex = +this.getAttribute("data-index");
  swapItems(dragStartIndex, dragEndIndex);

  this.classList.remove("over");
}
function dragEnter() {
  this.classList.add("over");
}
function dragLeave() {
  this.classList.remove("over");
}

function swapItems(start, end) {
  const itemStart = listItems[start].querySelector(".draggable");
  const itemEnd = listItems[end].querySelector(".draggable");
  listItems[start].appendChild(itemEnd);
  listItems[end].appendChild(itemStart);
}

function checkOrder() {
  listItems.forEach((listItem, index) => {
    const univName = listItem.querySelector(".draggable").innerText.trim();

    if (univName !== koreaUniv[index]) {
      listItem.classList.add("wrong");
    } else {
      listItem.classList.remove("wrong");
      listItem.classList.add("right");
    }
  });
}

function addEventListeners() {
  const draggables = document.querySelectorAll(".draggable");
  const dragListItems = document.querySelectorAll(".draggable-list li");

  draggables.forEach((draggable) => {
    draggable.addEventListener("dragstart", dragStart);
  });
  dragListItems.forEach((item) => {
    item.addEventListener("dragover", dragOver);
    item.addEventListener("drop", dragDrop);
    item.addEventListener("dragenter", dragEnter);
    item.addEventListener("dragleave", dragLeave);
  });
}

check.addEventListener("click", checkOrder);
