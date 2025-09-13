function cuadrados(x,y,t) { 
 let radio = frameCount/10;
 
  if (keyIsPressed) {
    push();
    noStroke();
    translate(x+(width/2+10), y+10);
    rotate(radio);
    rectMode(CENTER);
    fill(0);
    rect(0, 0, t, t);
    pop();
  } else {
    push();
    noStroke();
    translate(x+(width/2+10), y+10);
    fill(0);
    rectMode(CENTER);
    rect(0, 0, t, t);
    pop();
  }
}

function circulos (x,y,t){
  noStroke();
  if(keyIsPressed){
    if(key == 'r'){
    fill(random(255),0,0);
    }else{
      key == 'a';
      fill (0,0,random(255));
    }
    }else{
      fill(0);
    }
    circle(x+(width/2+10),y+10,t);
}


function estoysobreObra(x, y, size){  
  if( mouseX > width/2 && mouseX < width && mouseY < height && mouseY > 0){
    return true;
  }
  else{
    return false;
  }
}
