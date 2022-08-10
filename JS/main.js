//Player de audio

const botaoPlay = document.querySelector ('.play');

console.log (botaoPlay);

botaoPlay.addEventListener ('click', function(){
            const tocar = document.querySelector ('audio');
                       tocar.play()
})


const botaoPause = document.querySelector ('.pause');

botaoPause.addEventListener ('click', function () {
    const parar  = document.querySelector ('audio');
                  parar.pause();
                  parar.currentTime = 0 
 })
     




      

  // interação com o botão enviar


const botao = document.querySelector ('.formulario__botao');
   botao.addEventListener ('click',function (){
               alert ('Sua mensagem foi enviada!');
   })
  
    
