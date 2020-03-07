const myFunction = () => {
  document.getElementById("demo").innerHTML = "Hello";
};

const msgbox = () => {
  const a = parseInt(document.getElementById("first").value);
  const b = parseInt(document.getElementById("second").value);
  const c = a + b;
  document.getElementById("third").value = c;
};

const pushMe = () => {
  document.getElementById("name").value = "Joon";
  document.getElementById("email").value = "rytt@yonsei.ac.kr";
};

const submit = () => {
  const email = document.getElementById("email").value;
  alert("The value of the email text box is: " + email);
};

const x = document.getElementById("myBtn");
x.addEventListener("click", alertF);
x.addEventListener("click", alertFF);

// const alertF = () => {
//   alert('hello')
// }

function alertF() {
  alert("hello");
}

function alertFF() {
  alert("hello again");
}

const y = document.getElementById("newBtn");
y.addEventListener("mouseover", overF);
y.addEventListener("mouseout", outF);
y.addEventListener("click", clickF);

function overF() {
  document.getElementById("ppp").innerHTML += "on mouse over !<br>";
}
function outF() {
  document.getElementById("ppp").innerHTML += "on mouse out !<br>";
}
function clickF() {
  document.getElementById("ppp").innerHTML += "on click !<br>";
}
