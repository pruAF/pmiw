let personajeH = [];
let rivalK = [];
let fondo;
let saltoH = [];
let saltoK= [];
let imgActual;

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
  
  fondo = loadImage('/data/fondo.gif');
}
