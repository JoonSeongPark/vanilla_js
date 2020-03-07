alert("Hello, I am your friend.")

const clickHandler = () => {
  const name = prompt("What is your name?", "Enter your name here")
  alert("It is good to meet you, "+ name)
  document.getElementById('face').src = 'happy.png'
}