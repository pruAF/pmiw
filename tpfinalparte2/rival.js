class Rival {
  constructor() {
    this.posX=30;
    this.posY=height-190;
    this.tamX = 100;
    this.tamY=160;
    this.pj = rivalK;
    this.contadorImg=0;
    this.tiempo=0;
  }

  dibujar() {
    image(this.pj[this.contadorImg], this.posX, this.posY, this.tamX, this.tamY);
    this.correr();
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
  }
}
