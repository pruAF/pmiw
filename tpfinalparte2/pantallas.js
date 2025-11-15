class Pantallas{
 constructor(){
   this.posX=0;
   this.posY=0;
   this.tamX=680;
   this.tamY=480;
   this.fon = fondo;
   fondo.delay(17);
 }
 
 dibujar(){
 push();
 tint(230,255); //baja la claridad de la imagen para que resalte mas el personaje.
 image(this.fon,this.posX,this.posY,this.tamX,this.tamY);
 pop();
 }
  
 
}
