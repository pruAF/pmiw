let personajeH = [];
let rivalK = [];
let fondo;
let saltoH = [];
let saltoK= [];
let imgActual;
let cono;
let vida;
let pantallas = [];
let boton = [];
let reloj;
let barra;
let fuente;
let musica;
let sonido = [];

function preload(){
  personajeH[0] = loadImage('/data/0.png');
  personajeH[1] = loadImage('/data/1.png');
  personajeH[2] = loadImage('/data/2.png');
  personajeH[3] = loadImage('/data/3.png');
  
  saltoH[0] = loadImage('/data/s1.png');
  saltoH[1] = loadImage('/data/s2.png');
  
  rivalK[0] = loadImage('/data/k0.png');
  rivalK[1] = loadImage('/data/k1.png');
  rivalK[2] = loadImage('/data/k2.png');
  rivalK[3] = loadImage('/data/k3.png');
  
  saltoK[0] = loadImage('/data/s3.png');
  saltoK[1] = loadImage('/data/s4.png');
  
  obs = loadImage('/data/cono.png');
  
  fondo = loadImage('/data/fondo.gif');
  pantallas[0] = loadImage('/data/portada.png');
  pantallas[1] = loadImage('/data/instrucciones.jpeg');
  pantallas[2] = loadImage('/data/Hgano.jpeg');
  pantallas[3] = loadImage('/data/Kgano.jpeg');
  pantallas[4] = loadImage('/data/creditos.png');
  
  boton[0] = loadImage('/data/start.png');
  boton[1] = loadImage('/data/credits.png');
  boton[2] = loadImage('/data/flecha.png');
  
  vida = loadImage ('/data/corazon.png');
  reloj = loadImage('/data/tiempo.png');
  barra = loadImage('/data/barravida.png');
  
  fuente = loadFont('/data/SuperMario256.ttf');
  
  musica = loadSound('/data/Mfondo.mp3');
  sonido[0] = loadSound('/data/salto.mp3');
  sonido[1] = loadSound('/data/choque.mpeg');
  sonido[2] = loadSound('/data/perder.mpeg');
  sonido[3] = loadSound('/data/ganar.mpeg');

}
