class Pantallas {
  constructor() {
    this.posX=0;
    this.posY=0;
    this.tamX=680;
    this.tamY=480;
    this.fon = fondo;
    fondo.delay(17);
    this.pan = pantallas;
    this.bo = boton;
    this.ba = barra;
    this.ti = reloj;
  }

  inicio() {
    image (this.pan[0], this.posX, this.posY, this.tamX, this.tamY);
    if (mouseX>30 && mouseX<200 && mouseY>210 && mouseY<280) {
      push();
      tint(180);
      image(boton[0], 30, 210, 200, 80);
      pop();
    } else {
      image(boton[0], 30, 210, 200, 80);
    }

    if (mouseX>30 && mouseX<300 && mouseY>300 && mouseY<390) {
      push();
      tint(180);
      image(boton[1], 30, 300, 200, 80);
      pop();
    } else {
      image(boton[1], 30, 300, 200, 80);
    }
  }

  instrucciones() {
    image (this.pan[1], this.posX, this.posY, this.tamX, this.tamY);
    image(boton[2], 550, 420, 60, 40);
  }

  juego() {
    push();
    tint(230, 255); //baja la claridad de la imagen para que resalte mas el personaje.
    image(this.fon, this.posX, this.posY, this.tamX, this.tamY);
    //fill(237, 219, 19);
    //rect (0, 15, 190, 50);
    pop();
    image (this.ba, this.posX, 10, 300, 100);
    image(this.ti, 515, 0, 130, 120);
  }

  ganar() {
    image (this.pan[2], this.posX, this.posY, this.tamX, this.tamY);
    image(boton[2], 550, 420, 60, 40);
  }

  perder() {
    image (this.pan[3], this.posX, this.posY, this.tamX, this.tamY);
    image(boton[2], 550, 420, 60, 40);
  }

  creditos() {
    image (this.pan[4], this.posX, this.posY, this.tamX, this.tamY);
    image(boton[2], 550, 420, 60, 40);
  }
}
