var box1;
function setup() 
{
  createCanvas(400, 400);
  //instanstiation
  box1=new Box(50,50,20,20,6,3);

}

function draw() 
{
  
  background(220);
  box1.show();
  box1.move();
box1.ymove();
}

