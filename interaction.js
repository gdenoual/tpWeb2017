
// La création d'un Dnd requière un canvas et un interacteur.
// L'interacteur viendra dans un second temps donc ne vous en souciez pas au départ.
function DnD(canvas, interactor) {
	// Définir ici les attributs de la 'classe'
	
	var x0 = 0;
	var y0 = 0;
	var x1 = 0;
	var y1 = 0;
	var press = false;

	// Developper les 3 fonctions gérant les événements


	  this.pression = function(evt) {
		console.log(evt);
		var res = getMousePosition(canvas, evt) ;

		this.x0 = res.x;
		this.y0 = res.y;		

		console.log("X0  : " + this.x0 +" Y0 : " +  this.y0);
   		press= true;
 		 }.bind(this);
	// Associer la fonction a la classe , le protype ( pour alan) =) 


	  this.deplacement = function(evt) {

		if(press){
		var res = getMousePosition(canvas, evt) ;

		console.log("X0  : " + this.x0 +" Y0 : " +  this.y0);
		this.x1 = res.x;
		this.y1 = res.y;
		console.log("X1  : " + this.x1 +" Y1 : " +  this.y1);
   		 }
		
		}.bind(this);	


	  this.relachement = function(evt) {

		var res = getMousePosition(canvas, evt) ;

		this.x1 = res.x;
		this.y1 = res.y;
		console.log("X1  : " + this.x1 +" Y1 : " +  this.y1);


   		 press= false;
 		 }.bind(this);



	// Associer les fonctions précédentes aux évènements du canvas.

		canvas.addEventListener('mousedown', this.pression, false);
		canvas.addEventListener('mousemove', this.deplacement, false);
		canvas.addEventListener('mouseup', this.relachement, false);
};


// Place le point de l'événement evt relativement à la position du canvas.
function getMousePosition(canvas, evt) {
  var rect = canvas.getBoundingClientRect();
  return {
    x: evt.clientX - rect.left,
    y: evt.clientY - rect.top
  };
};



