let imgs = {
  //preload the imges 
  bg: new Image(),
  bd:new Image(),
  startBtn: new Image(),
  up_pipe: new Image(),
  up_mod: new Image(),
  down_pipe: new Image(),
  down_mod: new Image(),
 
  loadImg: function (fn) {
    this.bg.src = './img/bg.png';
    this.bd.src = './img/bird.png';
    this.startBtn.src = './img/startbutton.jpg';
    this.up_pipe.src = './img/up_pipe.png';
    this.up_mod.src = './img/up_mod.png';
    this.down_pipe.src = './img/down_pipe.png';
    this.down_mod.src = './img/down_mod.png';
   
    let that = this;
    // to check loading imga complete or not
    let timer = setInterval(function() {
      if (that.bg.complete) {
       
        clearInterval(timer);
       
        fn();
      }
    }, 50)
  }
}
