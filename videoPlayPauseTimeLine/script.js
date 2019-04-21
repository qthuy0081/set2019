var video = document.querySelector('.videoplayer')
var progress = document.querySelector('.timeline-progress')
var playOrPauseBtn = document.getElementById('play-pause')
var volumeBtn = document.getElementById('mute-unmute')

function playOrPause() {
    if(video.paused) {
        playOrPauseBtn.innerHTML = '<i class="fas fa-pause"></i>'
        video.play();
    }
    else {
        playOrPauseBtn.innerHTML = '<i class="fas fa-play"></i>'
        video.pause();
    }
}

video.addEventListener('timeupdate', function() {
    var timeposition = video.currentTime/video.duration;
    progress.style.width = timeposition * 100 + "%";
    if (video.ended) {
        playOrPauseBtn.className = 'play'; 
    }
})

function muteOrUnmute() {
    if(video.volume == 1.0) {
        volumeBtn.innerHTML = '<i class="fas fa-volume-up"></i>'
        video.volume = 0.0;
    }
    else {
        volumeBtn.innerHTML = '<i class="fas fa-volume-mute"></i>'
        video.volume = 1.0;
    }
}

// function screenCustomize() {
// }