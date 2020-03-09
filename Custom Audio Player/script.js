const audio = document.getElementById('audio')
const play = document.getElementById('play')
const stop = document.getElementById('stop')
const progress = document.getElementById('progress')
const timestamp = document.getElementById('timestamp')
const songTitle = document.getElementById('songTitle')
const downBtn = document.querySelector('.downBtn')

let songName = audio.src.slice(audio.src.lastIndexOf('/')+1, audio.src.lastIndexOf('.'))

songTitle.innerHTML = songName

function updatePlayIcon(){
  if (audio.paused) {
    play.innerHTML = '<i class="fa fa-play fa-2x"></i>'
  } else {
    play.innerHTML = '<i class="fa fa-pause fa-2x"></i>'
  }
}

function updateProgress(){
  progress.value = (audio.currentTime / audio.duration) * 100

  let mins = Math.floor(audio.currentTime / 60)
  if (mins <10) {
    mins = '0'+String(mins)
  }
  let secs = Math.floor(audio.currentTime % 60)
  if (secs <10) {
    secs = '0'+String(secs)
  }

  timestamp.innerHTML = `${mins}:${secs}`
}

function toggleAudioStatus(){
  if (audio.paused) {
    audio.play()
  } else {
    audio.pause()
  }
}
function stopAudio(){
  audio.currentTime = 0
  audio.pause()
}
function setAudioProgress(){
  audio.currentTime = (progress.value*audio.duration)/100
}

function alertInfo() {
  alert("This song is from SoundCloud.\nDon't worry about Copyright.")
}

audio.addEventListener('play', updatePlayIcon)
audio.addEventListener('pause', updatePlayIcon)
audio.addEventListener('timeupdate', updateProgress)

play.addEventListener('click', toggleAudioStatus)

stop.addEventListener('click', stopAudio)

progress.addEventListener('change', setAudioProgress)

downBtn.addEventListener('click', alertInfo)