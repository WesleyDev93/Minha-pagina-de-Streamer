const audioContext = new AudioContext();
const element = document.getElementById('trilha01');


const source = audioContext.createMediaElementSource(element);
source.connect(audioContext.destination)



const play = document.querySelector ('.play');
      play.addEventListener('click',function(){
        element.play();  
      })

const pause = document.querySelector ('.pause');
      pause.addEventListener('click',function(){
        element.currentTime = 0  
      })