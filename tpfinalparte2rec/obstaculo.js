class Obstaculo {
  constructor(posX) {
    this.posX=posX+640;
    this.posY=height-90;
    this.vel = 5;
    this.obj = obs;
    this.tamX = 50;
    this.tamY = 60;
    this.choque = false;
  }

  dibujar() {
    image(this.obj,this.posX,this.posY,this.tamX,this.tamY);
  }

  mover() {
    this.posX -= this.vel;
  }
  
 
}
