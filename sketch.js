
var playerCount=0;



function setup(){
  canvas = createCanvas(400,400);
  database = firebase.database();
  form = new Form()
  form.display();
  player = new Player();

}


