class Stone{

    constructor(x,y,r){
    
    
        var options = {
       
        isStatic : false,
        restitution: 0,
        friction : 1,
        density : 1

    
        }
    
    this.body = Bodies.circle(x,y,r,options);
   // this.width = width;
   // this.height = height;

   this.r = r;



    
    this.image = loadImage("stone.png");
    r = 50;

    
    World.add(world,this.body)


    }


    display(){

      var pos = this.body.position;

     push();
     rectMode(CENTER)
     translate(pos.x,pos.y)
      
     image(this.image,0,0,this.r,this.r);

     pop();


    }



}