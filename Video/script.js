var videoScreen = document.getElementById('video-screen')
var videoPanel = document.getElementsByClassName('video-panel')
var videoTime = document.getElementById('video-time')
var watched = 0
var timer

function convertToMinute (length) {
  let minute = Math.floor(length / 60)
  let second = Math.floor(length % 60)
  return minute + ":" + second
}

function playVideo () {
    videoScreen.play()
    startProgressBar()
    renderButton({
      function: pauseVideo,
      class: 'video-button',
      id: 'pause-button',
      icon: '<img src="https://img.icons8.com/ios/50/000000/pause-filled.png">',
      replace: 'play-button',
      position: 0
    })
    videoTime.innerText = convertToMinute(videoScreen.duration)
}

function pauseVideo () {
    videoScreen.pause()
    stopProgressBar()
    renderButton({
      function: playVideo,
      class: 'video-button',
      id: 'play-button',
      icon: '<img src="https://img.icons8.com/metro/26/000000/play.png">',
      replace: 'pause-button',
      position: 0
    })
}

function renderButton (options) {
    let newButton = document.createElement('button')
    newButton.addEventListener('click', options.function)
    newButton.className = options.class
    newButton.id = options.id
    newButton.innerHTML = options.icon
    videoPanel[options.position].replaceChild(newButton, document.getElementById(options.replace))
}

function startProgressBar () {
    let watchedBar = document.getElementById("watched-bar")
    let length = videoScreen.duration
    
    timer = setInterval(frame, 100)
    function frame () {
      if (watched >= length) {
        renderButton({
          function: playVideo,
          class: 'video-button',
          id: 'reset-button',
          icon: '<img src="https://img.icons8.com/metro/26/000000/recurring-appointment.png">',
          replace: 'pause-button',
          position: 0
        })
        watched = 0
        stopProgressBar()
      } 
      else {
        watched = watched + 0.1; 
        watchedBar.style.width = watched / length * 100 + '%';
      }
    }
}

function stopProgressBar () {
  clearInterval(timer)
}

function changeVolume () { //not complete
  if(!videoScreen.muted) {
    videoScreen.muted = true
    renderButton({
      function: changeVolume,
      class: 'video-button',
      id: 'mute-button',
      icon: '<img src="https://img.icons8.com/metro/26/000000/no-audio.png">',
      replace: 'unmute-button',
      position: 2
    })
  }else {
    videoScreen.muted = false
    renderButton({
      function: changeVolume,
      class: 'video-button',
      id: 'unmute-button',
      icon: '<img src="https://img.icons8.com/metro/26/000000/high-volume.png">',
      replace: 'mute-button',
      position: 2
    })
  }
}

function toggleFullScreen () {

}
