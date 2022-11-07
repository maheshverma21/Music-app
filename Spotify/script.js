console.log("welcome to spotify");

// initialize the variable
let songIndex= 0;
let audioElement = new Audio('songs/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songItems = Array.from(document.getElementsByClassName('songItem'));
let songs =[
    { songName: "Warriyo Mortals", filePath: "songs/1.mp3", coverPath:"covers/1.jpg"},
    { songName: "Surviva", filePath: "songs/2.mp3", coverPath:"covers/2.jpg"},
    { songName: "Aafat song", filePath: "songs/3.mp3", coverPath:"covers/3.jpg"},
    { songName: "Jug Jug Jeeve", filePath: "songs/4.mp3", coverPath:"covers/4.jpg"},
    { songName: "Kesariya", filePath: "songs/5.mp3", coverPath:"covers/5.jpg"},
    { songName: "Manike Mage Hite", filePath: "songs/6.mp3", coverPath:"covers/6.jpg"},
    { songName: "Tere vich rab disda", filePath: "songs/7.mp3", coverPath:"covers/7.jpg"},
    { songName: "Bhool BHulaiyaa", filePath: "songs/8.mp3", coverPath:"covers/8.jpg"},
    { songName: "The Punjaban song", filePath: "songs/9.mp3", coverPath:"covers/9.jpg"},
    { songName: "Go down deh", filePath: "songs/10.mp3", coverPath:"covers/10.jpg"},
    { songName: "Hey Mama", filePath: "songs/11.mp3", coverPath:"covers/11.jpg"},
    { songName: "Sarena Safari", filePath: "songs/12.mp3", coverPath:"covers/12.jpg"},
    { songName: "Breaking the rules", filePath: "songs/13.mp3", coverPath:"covers/13.jpg"},
]
songItems.forEach((element, i)=>{
   
     element.getElementsByTagName("img")[0].src = songs[i].coverPath;
     element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
})
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
const makeallPlays = () => {
    
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.add('fa-play-circle');
        element.classList.remove('fa-pause-circle');
        })
}
Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click', (e)=>{
        // console.log(e.target);
        makeallPlays();
       
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src = `songs/${songIndex}.mp3`;
        masterSongName.innerText = songs[songIndex -1].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;
        masterPlay.classList.add('fa-pause-circle');
        masterPlay.classList.remove('fa-play-circle');
        songItemPlay.classList.add('fa-pause-circle');
        songItemPlay.classList.remove('fa-play-circle');
        
    })
})

document.getElementById('next').addEventListener('click', ()=> {
   if(songIndex>=13){
    songIndex = 0;
   }
   else{
    songIndex += 1;
    }
    audioElement.src = `songs/${songIndex}.mp3`;
    masterSongName.innerText = songs[songIndex -1].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        masterPlay.classList.add('fa-pause-circle');
        masterPlay.classList.remove('fa-play-circle');
})

document.getElementById('previous').addEventListener('click', ()=> {
    if(songIndex<=0){
     songIndex = 0;
    }
    else{
     songIndex -= 1;
     }
     audioElement.src = `songs/${songIndex}.mp3`;
     masterSongName.innerText = songs[songIndex -1].songName;
         audioElement.currentTime = 0;
         audioElement.play();
         masterPlay.classList.add('fa-pause-circle');
         masterPlay.classList.remove('fa-play-circle');
 })
//  1.addEventListener('click',()=>{
//     if(audioElement.paused  || audioElement.currentTime<=0){
//         audioElement.play();
//         1.classList.remove('fa-play-circle');
//         1.classList.add('fa-pause-circle');
        
//     }
//     else{
//         audioElement.pause();
//         1.classList.add('fa-play-circle');
//         1.classList.remove('fa-pause-circle');
        
//     }
// })