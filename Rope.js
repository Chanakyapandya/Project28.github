class Rope {

constructor(bodyA,pointB){

    var options = {

    bodyA: bodyA,
    pointB: pointB,
    stiffness : 0.04,
    length:5


    }

    

this.rope = Constraint.create(options);

World.add(world,this.rope);

 

}

fly(){

    this.rope.bodyA = null;
    }

  attach(bodyA){

this.rope.bodyA = bodyA


  }
  

display(){

//var pointA = this.rope.bodyA.position
//var pointB = this.pointB;



if(this.rope.bodyA)
{


line(this.rope.bodyA.position.x,this.rope.bodyA.position.y,this.rope.pointB.x,this.rope.pointB.y)
strokeWeight(3);


}


}

}

