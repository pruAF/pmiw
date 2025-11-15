class Juego {
  constructor(cantObs) {
   this.posX=0;
   this.posY=0;
   this.cant= cantObs;
   this.crearPantallas();
   this.crearObjetos();
   this.crearPersonaje();
   this.crearRival();
  }
  
  dibujar(){
    this.pantallas.dibujar();
    
    for(let i = 0; i<this.cant; i ++){
    this.obstaculo[i].mover();
    this.obstaculo[i].dibujar();
    }
    
    this.rival.dibujar();
    this.personaje.dibujar();
    this.personaje.actualizar();
 

  }
  
  crearRival(){
    this.rival = new Rival();
  }
  
  crearPersonaje(){
    this.personaje = new Personaje();
  }
  
  ganar(){
    
  }
  
  temporizador(){
    
  }
  
  crearPantallas(){
   this.pantallas = new Pantallas(); 
  }
  
  crearObjetos(){
    this.obstaculo = [];
    for(let i = 0; i<this.cant; i++) {
    this.obstaculo[i] = new Obstaculo(width+i*800);
    }
  }
  
  teclaPresionada(keyCode){
    this.personaje.teclaPresionada(keyCode);
  }
  

  
}
