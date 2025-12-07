class Personaje {
  constructor(juego) {
    this.posX=100;
    this.posY=300;
    this.tamX = 100;
    this.tamY=160;
    this.pj = personajeH;
    this.contadorImg=0;
    this.tiempo=0;
    this.s = saltoH;
    this.img = imgActual;
    this.juego = juego;

    this.corazon = vida;
    this.cantVida = 3;
    this.inmune = false;
    this.tiempoInmune = 0;

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

    if (this.inmune) {
      if ((millis() / 100) % 2 < 1) {
        return;
      }
    }
    image(this.img, this.posX, this.posY, this.tamX, this.tamY);

    this.mostrarVidas();
  }

  actualizar() {
    this.vel += this.gravedad;
    this.posY += this.vel;

    if (this.posY > 300 ) {
      this.vel = 0;
      this.posY = 300;
      this.suelo=true;
    }

    if (this.inmune && millis() - this.tiempoInmune > 1000) {
      this.inmune = false;
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

  teclaPresionada(keyCode) {
    if (keyCode == UP_ARROW) {
      this.saltar();
      this.sound[0].play();
    }
  }
  saltar() {
    if (this.suelo) {
      this.vel = this.salto;
      this.suelo = false;
    }
  }

  chocar(objeto) {
    let centroPJx = this.posX + this.tamX / 2;
    let centroPJy = this.posY + this.tamY / 2;

    let centroOBJx = objeto.posX + objeto.tamX / 2;
    let centroOBJy = objeto.posY + objeto.tamY / 2;

    if (dist(centroPJx, centroPJy, centroOBJx, centroOBJy) < 50) {
      return true;
    }
    return false;
  }


  perderVida() {
    if (!this.inmune) {
      this.cantVida--;

      this.inmune = true;
      this.tiempoInmune = millis();
      this.sound[1].play();


      if (this.cantVida < 0) {
        this.cantVida = 0;
      }
    }
  }

  mostrarVidas() {
    for (let i = 0; i < this.cantVida; i++) {
      image(this.corazon, 120 + i*50, 40, 40, 40);
    }
  }
}
