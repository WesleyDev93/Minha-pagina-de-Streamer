//Player de audio

const audioContext = new AudioContext();
const element = document.getElementById('trilha02');


const source = audioContext.createMediaElementSource(element);
source.connect(audioContext.destination)



const play = document.querySelector ('.play');
      play.addEventListener('click',function(){
        element.play();  
      })

const pause = document.querySelector ('.pause');
      pause.addEventListener('click',function(){
        element.currentTime = 0 
        element.pause (); 
       
      })

     




      

  // interação com o botão enviar


const botao = document.querySelector ('.formulario__botao');
   botao.addEventListener ('click',function (){
               alert ('Sua mensagem foi enviada!');
   })
  
    
