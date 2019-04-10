
  function drawBg() {
    ctx.drawImage(imgs.bg,0,0);
  }

  function clean() {
    ctx.clearRect(0,0,canvas.width,canvas.height);
  }
  function init() {
    imgs.loadImg(startingpage);
  }

  function drawStartBtn() {
    ctx.drawImage(imgs.startBtn,130,300);
  }

 function startingpage() {
    clean();
    drawBg();
    drawStartBtn(); 
}

function clicktostart(a) {
  //make sure you click startbutton
  
    clean();
   
   
    gameLayer();
    //using keyboard to contral up and down
    window.addEventListener('keydown',kd,false)
   
    //delete start button reaction
    canvas.removeEventListener('click',clicktostart,false);
  
}
canvas.addEventListener('click', clicktostart , false);

function createPipes() {
  let pipe = new Pipe(imgs.up_pipe,imgs.up_mod,imgs.down_pipe,imgs.down_mod);
   //adding pipe in to array pipes, replace them after have 3 pipes
   if(pipes.length<3){
     pipes.push(pipe);
   }else{
     pipes[index] = pipe;
     index++;
     if(index >= 3){
       index = 0;
     }
   }
 }


