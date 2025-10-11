let imagen = [];
let estado = 0;
let txt = [];
let boton = [];
let logo;
let decision1;
let decision2;
let decitxt = [];
let musica;
let click;
let mouse;

function preload(){
  //textos
  txt = loadStrings('/data/dialogo.txt');
  decitxt = loadStrings('/data/decisiones.txt');
  
  //imagenes
  imagen[0]=loadImage('/data/portada.png');
  imagen[1]=loadImage('/data/1.png');
  imagen[2]=loadImage('/data/2.png');
  imagen[3]=loadImage('/data/3.png');
  imagen[4]=loadImage('/data/4.gif');
  imagen[5]=loadImage('/data/5.png');
  imagen[6]=loadImage('/data/6.png');
  imagen[7]=loadImage('/data/7.png');
  imagen[8]=loadImage('/data/8.png');
  imagen[9]=loadImage('/data/9.png');
  imagen[10]=loadImage('/data/10.png');
  imagen[11]=loadImage('/data/11.png');
  imagen[12]=loadImage('/data/12.png');
  imagen[13]=loadImage('/data/13.png');
  imagen[14]=loadImage('/data/14.png');
  imagen[15]=loadImage('/data/15.png');
  imagen[16]=loadImage('/data/16.png');
  imagen[17]=loadImage('/data/17.png');
  imagen[18]=loadImage('/data/18.gif');
  imagen[19]=loadImage('/data/19.png');
  imagen[20]=loadImage('/data/20.png');
  imagen[21]=loadImage('/data/21.png');
  imagen[22]=loadImage('/data/creditos.png');
  
  //otros elementos
  logo = loadImage ('/data/logo.png');
  boton.push(loadImage('/data/start.png'));
  boton.push(loadImage('/data/credits.png'));
  boton.push(loadImage('/data/flecha.png'));
  boton.push(loadImage('/data/final.png'));
  decision1 = loadImage('/data/deci1.png');
  decision2 = loadImage('/data/deci2.png');
  mouse = loadImage('/data/pelota.png');

  musica = loadSound('/data/musica.mp3');
  click = loadSound ('/data/click.mp3');
  click.rate(2);
}
