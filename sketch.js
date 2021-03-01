var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
 
var particles = [];
var plinkos = [];
var divisions=[];
var help;
var particle;
var count=0;
var gameState="play";
var line;

var divisionHeight=300;
var score =0;
function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);


   for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }


    for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 75; j <=width; j=j+50) 
   {
    
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,375));
    }

    

    
}
 


function draw() {
  background("black");
  textSize(20)
  fill("white")
 text("Score : "+score,20,30);
  Engine.update(engine);
 
  
   for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();
     
   }
 //  if(frameCount%60===0){
  if(help==1&&count<5){
     particles.push(new Particle(random(width/2-200, width/2+200), 10,10));
     //score++;
     help=2
   }

   if(count>=5){
     push()
     textSize(50)
     fill("red");
     text("Game Over",290,239);
     textSize(20);
     text("Press R To Restart",310,310);
     pop()
     if(keyCode==82||keyCode==114){
       count=0;
       score=0;
     }
   }
 
  for (var j = 0; j < particles.length; j++) {
   
     //particles[j].display();
     particle=particles[j];
    
   }
   for (var k = 0; k < divisions.length; k++) {
     
     divisions[k].display();
   }

console.log(mouseX)
   

   if(particle!=null){
    particle.display();
    //console.log("A");
    if(particle.body.position.y>780){
      //console.log("b");
      if(particle.body.position.x<318){
        score=score+500;
        particle=null;
        particles=[];
        //console.log("cA");
        count++;
      }else if(particle.body.position.x<560&&particle.body.position.x>320){
        score=score+100;
        particle=null;
        particles=[];
        //console.log("cA");
        count++;
      }else if(particle.body.position.x<800&&particle.body.position.x>570){
        score=score+200;
        particle=null;
        particles=[];
        count++;
        //console.log("cA");
      }
    }
  }
  

   text("500",20,520);
   text("500",100,520);
   text("500",180,520);
   text("500",260,520);
   text("100",340,520);
   text("100",420,520);
   text("100",500,520);
   text("200",580,520);
   text("200",660,520);
   text("200",740,520);
  
     push();
     stroke("yellow")
     strokeWeight(6)
     line(1,470,800,470);
pop();



}

function mouseReleased(){
  help=1;
}