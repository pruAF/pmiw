class Obstaculo {
  constructor(posX) {
    this.posX=posX+640;
    this.posY=height-40;
    this.vel = 5;
  }

  dibujar() {
    fill(0);
    triangle(this.posX, this.posY, this.posX+40, this.posY, this.posX+20, this.posY-40);
  }

  mover() {
    this.posX -= this.vel;
  }
  
 
}
