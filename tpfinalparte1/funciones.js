function Txt(x,y,i){
  textSize(20);
  text (txt[i], x+10,y+50);
}


function Portada(x,y){
  image(imagen[0],0,0,x,y);
  image(logo,20,50,220,100);
  fill(255);
  rect(20,200,220,190);
  image(boton[0],30,210,200,80);
  image(boton[1],30,300,200,80);
}

function pagina(x,y,i){
  image(imagen[i],0,0,x,y);
  stroke(1);
  fill(255,163,41);
  rect(0,0+400,width,height/3);
  image(boton[2],550,420,60,40);
  fill(0);
  Txt(10,400,i);
}

function decision (){
  image(decision1,40,405,270,80);
  image(decision2,340,405,270,80);
}


function pagDeci(x,y,i){
  image(imagen[i],0,0,x,y);
  fill(255);
  stroke(1);
  rect(0,0+400,width,height/3);
  fill(0);
  decision();
}

function pagFinal(x,y,i){
  image(imagen[i],0,0,x,y);
  fill(255,163,41);
  rect(0,0+400,width,height/3);
  fill(0);
  Txt(10,400,i);
  image(boton[3],550,410,70,50);
  
}

function creditoss(x,y,i){
  image(imagen[i],0,0,x,y);
  image(boton[2],550,420,60,40);
}

function Mouse(x,y,t){
  push();
  imageMode(CENTER);
  image(mouse,x,y,t,t);
  pop();
}
