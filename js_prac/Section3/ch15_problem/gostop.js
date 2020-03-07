const mouseDown = () => {
  document.getElementById('btn').src = 'go.png'
}
const mouseUp = () => {
  document.getElementById('btn').src = 'stop.png'
}

const goStop = (img) => {
  document.getElementById('btn').src = img
}