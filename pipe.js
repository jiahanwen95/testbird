//pipe combine with two part one part will make pipe looks ugly...
class Pipe {
    constructor(up_pipe,up_mod,down_pipe,down_mod) {
      
      this.up_pipe = up_pipe;//the up pipe head
      this.up_mod = up_mod;//the up middle
      this.down_pipe = down_pipe;
      this.down_mod = down_mod;
      this.up_height = Math.floor(Math.random()*60);//random height of pipe
      this.down_height = (60 - this.up_height)*3;//make sure the gap between up and down are same
      this.posX = 300;
      this.up_posY = this.up_height*3+this.up_pipe.height;
      this.down_posY = 362-this.down_height;
      this.hadSkipped = false;//check did bird passed pipe or not
      this.hadSkippedChange = false;
    }
    //draw head of pipe
    drawPipe() {
      ctx.drawImage(this.up_pipe,this.posX,this.up_height*3);
      ctx.drawImage(this.down_pipe,this.posX,362-this.down_height);
    }
    //body of pipe
    drawMods() {
      for(var i=0;i<this.up_height;i++){
        ctx.drawImage(this.up_mod,this.posX,i*3)
      }
      for(var j=0;j<this.down_height;j++){
        ctx.drawImage(this.down_mod,this.posX,362-this.down_height+this.down_pipe.height+j);
      }
    }
    //pipe move by changing x coordinates
    move() {
      this.posX -= 6;
      this.drawMods();
      this.drawPipe();
    }
  }