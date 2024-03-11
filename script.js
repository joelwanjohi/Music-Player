// #initialize the variable
let songIndex = 1;
let audioElement = new Audio('audio/1.mp3');
let masterplay = document.getElementById('masterplay');
let myprogressbar = document.getElementById('myprogressbar');
let previous = document.getElementById('previous');
let next = document.getElementById('next');
let mastersongname = document.getElementById('mastersongname')

let songs = [
    {songName : "Wishing Well", filePath:"audio/1.mp3", coverPath:"logos/cover.mp3"},
    {songName : "Promises", filePath:"audio/2.mp3", coverPath:"logos/cover1.mp3"},
    {songName : "Paint City Red", filePath:"audio/3.mp3", coverPath:"/logos/cover2.mp3"},
    {songName : "Hotline Blink", filePath:"audio/4.mp3", coverPath:"logos/cover3.mp3"},
    {songName : "Caddy Shop", filePath:"audio/5.mp3", coverPath:"logos/cover.mp3"},
]

// Handle pause/play click
masterplay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterplay.classList.remove('fa-circle-play');
        masterplay.classList.add('fa-circle-pause');
        gif.style.opacity = 1;
    }
    else{
        audioElement.pause();
        masterplay.classList.add('fa-circle-play');
        masterplay.classList.remove('fa-circle-pause');
        gif.style.opacity = 0;
    }
})

// Listening to events 
audioElement.addEventListener('timeupdate',()=>{
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
    myprogressbar.value = progress;
})