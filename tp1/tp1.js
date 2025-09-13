//Priscila Ayelen Fernandez
//119022/8
//https://youtu.be/FOJYm0YDJgU


let cant = 20;
let mod = 20;

function preload() {
  opart = loadImage ('/data/opart.jpg');
}

function setup() {
  createCanvas(800, 400);
  
}


function draw() {
  fill(255);
  rect(400, 0, 800, 400);
  image (opart, 0,0,400,400);

  for (let x=0; x<cant; x++) {
    for (let y=0; y<cant; y++) {
      if ((x+y)%2==0) {
        if (estoysobreObra(x, y, 400)){
          let d = dist(mouseX, mouseY, x*mod+400, y*mod+10);
          let tam = map( d, 0, 565, mod/2, mod*2);
          circulos (x*mod,y*mod,tam);
          }else{
          circulos (x*mod,y*mod,cant);
         }
      }else{
          cuadrados (x*mod, y*mod, cant);
        
      }
     }
    }
  }
