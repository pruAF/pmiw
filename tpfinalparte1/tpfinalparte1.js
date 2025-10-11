//Priscila Fernandez 119022/8
//Cory Misha Matorra 120341/8
//https://youtu.be/5eRgpWpJ0xI

function setup() {
  createCanvas (640, 480);
}


function draw() {
  background(200);
  noCursor();

  if (estado==0) { //usamos if para paginas individuales como: portada, decisiones, finales y creditos
    Portada(640, 480);
  }

  for (let i = 1; i<4; i++) { //mientras que con for recorremos las paginas restantes a excepcion de las paginas finales y las paginas de decisiones
    if (estado==i) {
      pagina(640, 480, i);
    }
  }
  if (estado==4) {//las paginas de decisiones contienen textos centrados segun su largo
    pagDeci(640, 480, 4);
    textSize(20);
    text (decitxt[0], 100, 450);
    text(decitxt[1], 420, 450);
  }

  for (let i = 5; i<9; i++) {
    if (estado==i) {
      pagina(640, 480, i);
    }
  }

  if (estado==9) {
    pagFinal(640, 480, 9);
  }

  if (estado==10) {
    pagina(640, 480, 10);
  } else if (estado==11) {
    pagDeci(640, 480, 11);
    textSize(20);
    text (decitxt[2], 135, 450);
    text(decitxt[3], 405, 450);
  }

  for (let i = 12; i<16; i++) {
    if (estado==i) {
      pagina(640, 480, i);
    }
  }

  if (estado==16) {
    pagDeci(640, 480, 16);
    textSize(20);
    text (decitxt[4], 50, 450);
    text(decitxt[5], 405, 450);
  }

  for (let i = 17; i<19; i++) {
    if (estado==i) {
      pagina(640, 480, i);
    }
  }

  if (estado==19) {
    pagFinal(640, 480, 19);
  }

  if (estado==20) {
    pagina(640, 480, 20);
  } else if (estado==21) {
    pagFinal(640, 480, 21);
  }

  if (estado == 22) {
    creditoss(640, 480, 22);
  }

  Mouse(mouseX, mouseY, 40);
}

function mouseClicked() {
  print(estado);

//Salto de estados en las pantallas de portada y decisiones.
  if (estado == 0) {
    if (mouseX > 30 && mouseX < 200 && mouseY > 210 && mouseY < 280) {
      estado = 1;
    } else if (mouseX > 30 && mouseX < 200 && mouseY > 300 && mouseY < 370) {
      estado = 22;
    }
  }


  if (estado == 4 ) {
    if (mouseX > 40 && mouseX < 270 && mouseY > 405 && mouseY < 470) {
      estado = 10;
    } else if (mouseX > 340 && mouseX < 620 && mouseY > 407 && mouseY < 470) {
      estado = 5;
    }
  }

  if (estado == 11 ) {
    if (mouseX > 40 && mouseX < 270 && mouseY > 405 && mouseY < 470) {
      estado = 12;
    } else if (mouseX > 340 && mouseX < 620 && mouseY > 405 && mouseY < 470) {
      estado = 4;
    }
  }

  if (estado == 16 ) {
    if (mouseX > 40 && mouseX < 270 && mouseY > 405 && mouseY < 470) {
      estado = 17;
    } else if (mouseX > 340 && mouseX < 620 && mouseY > 405 && mouseY < 470) {
      estado = 20;
    }
  }


//definicion de la flecha que recorre los estados al hacer click y tambien una funcion de reinicio
  if (estado >= 0 && estado <= 23 && estado !== 4) {
    if (mouseX > 550 && mouseX < 590 && mouseY > 420 && mouseY < 460) {
      if (estado == 4) {
        estado = 5;
      } else {
        estado++;
      }
      if (estado == 10) {
        estado = 0;
      } else if (estado==10) {
        estado++;
      }
      if (estado == 20) {
        estado = 0;
      } else if (estado == 20) {
        estado++;
      }
      if (estado == 22) {
        estado = 0;
      } else if (estado == 22) {
        estado++;
      }
      if (estado == 23) {
        estado = 0;
      } else if (estado==23) {
        estado++;
      }
    }


//funcion para que suene una musica en la pagina 18 y un click en todo el programa
    if (estado == 18) {
      if (musica.isPlaying()) {
        musica.pause();
      } else {
        musica.play();
      }
    } else {
      musica.stop();
    }

    if (click.isPlaying()) {
      click.pause();
    } else {
      click.play();
    }
  }
}
