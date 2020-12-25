const app = () => {
    const song = document.querySelector('.song')
    const play = document.querySelector('.play')
    const outline = document.querySelector('.moving-outline circle')
    const video = document.querySelector('.vid-container video')

    const sounds = document.querySelectorAll('.sound-picker button')
    const timeDisplay = document.querySelector('.time-display')

    const outlineLength = outline.getTotalLength();

    let fakeDuration = 600;
    outline.style.strokeDashArray = outlineLength;
    outline.style.strokeDashOffset = 500;

    play.addEventListener('click',() => {
        checkPlaying(song)
    })

    const checkPlaying = song => {
        if(song.paused) {
            song.play()
            play.src = './svg/pause.svg'
        } else {
            song.pause()
            play.src = './svg/play.svg'
        }

    }

    song.ontimeupdate = () => {
        let currentTime = song.currentTime
        let elapsed = fakeDuration - currentTime
    }
   
}

app()