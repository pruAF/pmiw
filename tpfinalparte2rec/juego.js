class Juego {
  constructor(cantObs) {
    this.posX=0;
    this.posY=0;
    this.cant= cantObs;

    this.crearPantallas();
    this.crearObjetos();
    this.crearPersonaje();
    this.crearRival();


    this.estado = 0;
    this.tiempoInicio = millis();
    this.tiempoRestante = 30;
    this.conteo = false;

    this.font = fuente;
    this.Mfondo = musica;
    this.Mfondo.setVolume(0.2);
    this.sound = sonido;
  }

  dibujar() {
    this.crearPantallas();
  }

  crearPantallas() {
    this.pantallas = new Pantallas();

    if (this.estado == 0) {
      this.pantallas.inicio();
      this.sound[0].stop();
    }
    if (this.estado == 1) {
      this.pantallas.instrucciones();
      this.sound[0].stop();
    }
    if (this.estado == 2) {
      this.pantallas.juego();

      for (let i = 0; i<this.cant; i ++) {
        this.obstaculo[i].mover();
        this.obstaculo[i].dibujar();

        this.rival.detectarObjeto(this.obstaculo[i]);
      }

      this.rival.dibujar();
      this.rival.actualizar();
      this.personaje.dibujar();
      this.personaje.actualizar();

      this.temporizador();
      this.controlarChoque();
    }

    if (this.estado == 3) {
      this.pantallas.ganar();
      this.sound[0].stop();
    }
    if (this.estado == 4) {
      this.pantallas.perder();
      this.sound[0].stop();
    }
    if (this.estado == 5) {
      this.pantallas.creditos();
      this.sound[0].stop();
    }
  }

  crearRival() {
    this.rival = new Rival();
  }

  crearPersonaje() {
    this.personaje = new Personaje(this);
  }

  crearObjetos() {
    this.obstaculo = [];
    for (let i = 0; i<this.cant; i++) {
      this.obstaculo[i] = new Obstaculo(width+i*800);
    }
  }

  temporizador() {
    if (this.conteo) {
      let tiempoPasado = int((millis() - this.tiempoInicio)/1000);
      this.tiempoRestante = 30 - tiempoPasado;

      if (this.tiempoRestante <= 0) {
        this.conteo = false;
        this.estado = 3;
        this.sound[3].play();
        this.Mfondo.stop();
      }
    }

    push();
    textFont(this.font);
    textAlign(CENTER);
    textSize(45);
    fill(245);
    text(this.tiempoRestante, 580, 75);
    pop();
  }

  controlarChoque() {
    for (let i = 0; i<this.cant; i++) {
      if (this.personaje.chocar(this.obstaculo[i])) {
        this.personaje.perderVida();
      }
    }

    if (this.personaje.cantVida <= 0) {
      this.estado = 4;
      this.sound[2].play();
      this.Mfondo.stop();
    }
  }

  resetearJuego() {
    this.personaje.cantVida = 3;
    this.personaje.inmune = false;

    this.tiempoInicio = millis();
    this.tiempoRestante = 30;
    this.conteo = false;

    this.crearObjetos();
  }


  teclaPresionada(keyCode) {
    this.personaje.teclaPresionada(keyCode);
  }


  click() {
    if (this.estado == 0) {
      if (mouseX > 30 && mouseX < 200 && mouseY > 210 && mouseY < 280) {
        this.estado = 1;
      } else if (mouseX > 30 && mouseX < 200 && mouseY > 300 && mouseY < 370) {
        this.estado = 5;
      }
    }

    if (mouseX > 550 && mouseX < 590 && mouseY > 420 && mouseY < 460) {
      if (this.estado == 1) {
        this.estado = 2;

        this.tiempoInicio = millis();
        this.conteo = true;
      }

      if (this.estado == 2) {
        if (this.Mfondo.isPlaying()) {
          this.Mfondo.pause();
        } else {
          this.Mfondo.play();
        }
      }



      if (this.estado == 3) {
        this.resetearJuego();
        this.estado = 0;
      }
      if (this.estado == 4) {
        this.resetearJuego();
        this.estado = 0;
      }

      if (this.estado == 5) {
        this.estado = 0;
      }
    }
  }
}
