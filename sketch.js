//Create variables here
var dog,happydog,database,foods,foodstoke;
function preload()
{
	//load images here
}

function setup() {
	createCanvas(800, 700);
  database = firebase.database();
  console.log(database);
  createCanvas(500,500);

  dog = createSprite(250,250,10,10);
  dog.shapeColor = "red";
  foodstoke=database.ref("food");
  foodstoke.on("value",readstoke);
}


function draw() {  

  if(keyWentDown(UP_Arrow))
  {
    writestoke(foods)
    dog.addImage(dogHappy);
  }
  drawSprites();
  //add styles here

}



