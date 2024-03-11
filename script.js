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
myprogressbar.addEventListener('change',()=>{
    audioElement.currentTime = myprogressbar.value*audioElement.duration/100;
})

const makeallplays = ()=>{
    Array.from(document.getElementsByClassName('songitemplay')).forEach((element)=>{
        element.classList.remove('fa-circle-pause');
        element.classList.add('fa-circle-play');
    })
}

Array.from(document.getElementsByClassName('songitemplay')).forEach((element) => {
    element.addEventListener('click',(e)=>{
        if(audioElement.paused || audioElement.currentTime<=0){
        makeallplays();
        songIndex = parseInt(e.target.id)
        e.target.classList.remove('fa-circle-play');
        e.target.classList.add('fa-circle-pause');
        audioElement.src = `audio/${songIndex}.mp3`
        mastersongname.innerHTML = songs[songIndex + 1].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        masterplay.classList.remove('fa-circle-play');
        masterplay.classList.add('fa-circle-pause');
        gif.style.opacity = 1;
        }
        else{
        audioElement.pause();
        e.target.classList.add('fa-circle-play');
        e.target.classList.remove('fa-circle-pause');
        mastersongname.innerHTML = songs[songIndex].songName;
        // audioElement.src = `audio/${index}.mp3`
        // audioElement.currentTime = 0;
        masterplay.classList.add('fa-circle-play');
        masterplay.classList.remove('fa-circle-pause');
        gif.style.opacity = 0;
        }
    })
})

document.getElementById('next').addEventListener('click',()=>{
    if(songIndex >= 5){
        songIndex = 0;
    } 
    else{
        songIndex += 1;
    }
        audioElement.src = `audio/${songIndex + 1}.mp3`
        mastersongname.innerHTML = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        masterplay.classList.remove('fa-circle-play');
        masterplay.classList.add('fa-circle-pause');
})

document.getElementById('previous').addEventListener('click',()=>{
    if(songIndex <= 0){
        songIndex = 0;
    } 
    else{
        songIndex -= 1;
    }
        audioElement.src = `audio/${songIndex + 1}.mp3`
        mastersongname.innerHTML = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        masterplay.classList.remove('fa-circle-play');
        masterplay.classList.add('fa-circle-pause');
})