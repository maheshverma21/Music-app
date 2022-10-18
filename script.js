console.log("welcome to spotify");

// initialize the variable
let songIndex= 0;
let audioElement = new Audio('1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');

let songs =[
    { songName: "Salam-e-Ishq", filePath: "song/1.mp3", coverPath:"covers/1.jpg"},
    { songName: "Salam-e-Ishq", filePath: "song/1.mp3", coverPath:"covers/1.jpg"},
    { songName: "Salam-e-Ishq", filePath: "song/1.mp3", coverPath:"covers/1.jpg"},
    { songName: "Salam-e-Ishq", filePath: "song/1.mp3", coverPath:"covers/1.jpg"},
    { songName: "Salam-e-Ishq", filePath: "song/1.mp3", coverPath:"covers/1.jpg"},
    { songName: "Salam-e-Ishq", filePath: "song/1.mp3", coverPath:"covers/1.jpg"},
    { songName: "Salam-e-Ishq", filePath: "song/1.mp3", coverPath:"covers/1.jpg"},
    { songName: "Salam-e-Ishq", filePath: "song/1.mp3", coverPath:"covers/1.jpg"},
]

// audioElement.play();
masterPlay.addEventListener('click',()=>{
    if(audioElement.paused  || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.add('fa-play-circle');
        masterPlay.classList.remove('fa-pause-circle');
        gif.style.opacity = 0;
    }
})
// listen to events
audioElement.addEventListener('timeupdate', ()=>{
    console.log('timeupdate');
    //update seekbar
progress = parseInt((audioElement.currentTime/audioElement.duration)* 100);

myProgressBar.value = progress;
})
myProgressBar.addEventListener('change', ()=>{
audioElement.currentTime = myProgressBar.value * audioElement.duration/100;
})