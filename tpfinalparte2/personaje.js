class Personaje {
  constructor() {
    this.posX=100;
    this.posY=300;
    this.tamX = 100;
    this.tamY=160;
    this.pj = personajeH;
    this.contadorImg=0;
    this.tiempo=0;
    this.s = saltoH;
    this.img = imgActual;
    this.vida = 3;
    
    this.vel = 0;
    this.gravedad = 0.5;
    this.salto= -10;
    this.suelo=true;
  }

  dibujar() {
    //if(this.vida){
    if(!this.suelo){
      if(this.vel < 0){
        this.img = this.s[0];
      }else{
       this.img = this.s[1]; 
      }
    }else{
     this.img = this.pj[this.contadorImg]; 
     this.correr();
    }
    image(this.img, this.posX, this.posY, this.tamX, this.tamY);
    //}

  }

  actualizar() {
    this.vel += this.gravedad;
    this.posY += this.vel;

    if (this.posY > 300 ) {
      this.vel = 0;
      this.posY = 300;
      this.suelo=true;
    }
    
  }

  correr() {
    if ((millis()-this.tiempo)>180) {
      this.tiempo = millis();
      this.contadorImg++;

      if (this.contadorImg == this.pj.length) {
        this.contadorImg=0;
      }
    }
  }

 teclaPresionada(keyCode){
   if(keyCode == ENTER){
     this.saltar();
   }
 }
  saltar() {
    if (this.suelo) {
      this.vel = this.salto;
      this.suelo = false;
    }    
  }
  
  perderVida(){
    this.vida--;
  }
  
  muerto(){
    this.vida = 0;
  }

  chocar(objeto) {
  //  if(dist(this.posX,this.posY,objeto.posX,objeto.posY)<15){
  //    this.perderVida();
  //  }
  //  if(this.vida=0){
      
  //  }
  }
}
