class Mango{

    constructor(x,y,r){
    
    
        var options = {
       
        isStatic : true,
        restitution: 0,
        friction : 1

    
        }
    
    this.body = Bodies.circle(x,y,r,options);
   // this.width = width;
   // this.height = height;

   this.r = r;



    
    this.image = loadImage("mango.png");
    r = 10;

    
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