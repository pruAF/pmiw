class Rival {
  constructor() {
    this.posX=30;
    this.posY=height-190;
    this.tamX = 100;
    this.tamY=160;
    this.pj = rivalK;
    this.contadorImg=0;
    this.tiempo=0;
    this.img = imgActual;
    this.s = saltoK;
    
    this.vel = 0;
    this.gravedad = 0.5;
    this.salto= -10;
    this.suelo=true;
    
    this.sound = sonido;
  }

  dibujar() {
    if (!this.suelo) {
      if (this.vel < 0) {
        this.img = this.s[0];
      } else {
        this.img = this.s[1];
      }
    } else {
      this.img = this.pj[this.contadorImg];
      this.correr();
    }
    image(this.img, this.posX, this.posY, this.tamX, this.tamY);
  }

actualizar() {
    this.vel += this.gravedad;
    this.posY += this.vel;

    if (this.posY >= 300) {
      this.posY = 300;
      this.vel = 0;
      this.suelo = true;
    }
  }
  
  correr() {
    if ((millis()-this.tiempo)>180) {
      this.tiempo = millis();
      this.contadorImg++;

      if (this.contadorImg == this.pj.length) {
        this.contadorImg=0;
      }
    }
  }

  saltar() {
    if(this.suelo){
      this.vel = this.salto;
      this.suelo = false;
      this.sound[0].play();
    }
  }
  
  detectarObjeto(objeto){
   if(objeto.posX < this.posX + 150 && objeto.posX > this.posX){
     this.saltar();
   }
  }
}
