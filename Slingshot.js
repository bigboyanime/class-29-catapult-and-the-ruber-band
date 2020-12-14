class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.sling1=loadImage("sprites/sling1.png");
        this.sling2=loadImage("sprites/sling2.png");
        this.sling3=loadImage("sprites/sling3.png");
        this.pointB = pointB
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }

    fly(){
        this.sling.bodyA = null;
    }

    display(){
        image(this.sling1, 200, 20, );
        image(this.sling2, 170, 20, );
       // image(this.sling3, 200, 20, );

        if(this.sling.bodyA){
            var point1 = this.sling.bodyA.position;
            var point2 = this.pointB;
            strokeWeight(4);
            stroke(48,22,8)
            //line(point1.x, point1.y, point2.x, point2.y);
           if (point1.x <220){
            line(point1.x-20,point1.y,point2.x-10,point2.y);
            line(point1.x-20,point1.y,point2.x+30,point2.y-3);
            image(this.sling3,point1.x-30,point1.y-10,15,30);
           }
           else
           {
            line(point1.x+25,point1.y,point2.x-10,point2.y);
            line(point1.x+25,point1.y,point2.x+30,point2.y-3);
            image(this.sling3,point1.x+25,point1.y-10,15,30);
           }
          }
    }
    
}