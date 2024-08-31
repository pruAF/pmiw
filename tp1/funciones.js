function circulos (x, y, size){
  noStroke();
  fill (0);
  circle (x+400,y,size);
}

function cuadrados (x, y, size){
  noStroke();
  if (keyIsPressed===true){
         key = 'c';
         fill (random (255),0, random (255));
  } 
  else{
         fill(0);
  }
  rect (x+400,y,size,size);
  }

function estoysobreObra(x, y, size){  
  if( mouseX > width/2 ){
    return true;
  }
  else{
    return false;
  }
}
