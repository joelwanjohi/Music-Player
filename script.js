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