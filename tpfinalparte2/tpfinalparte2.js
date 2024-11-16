//Priscila Fernandez
//Alessandro Frade
//https://youtu.be/8RXVk5iZJJg

let objJuego;

function setup() {
 createCanvas (640,480);
 objJuego = new Juego();
}


function draw() {
objJuego.dibujar();
}



function keyPressed(){
  objJuego.tecla(keyCode);
}
