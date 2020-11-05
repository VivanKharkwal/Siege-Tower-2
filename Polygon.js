class Polygon{
    constructor(x,y){
        var options = {
            'restitution':0.8,
            'friction':1.0,
            'density':1.0,
            'isStatic' : false
        }
        this.body = Bodies.circle(x,y,20,options);
        this.image = loadImage("hexagon.png");
        World.add(world,this.body);
    }

    display(){
        push();
        var angle = this.body.angle;
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image ,0,0,40,40);
        pop();
    }
}
