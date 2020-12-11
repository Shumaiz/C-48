class Cup{
    constructor(x,y,angle){
        var options={
            restitution: 0.5,
            friction: 0.8,
            isStatic: true
        }
        this.body = Bodies.rectangle(x,y,15,30,options);
        Matter.Body.setAngle(this.body,angle)
    this.x = x
    this.y = y
    this.width = 15
    this.height = 30
    this.angle = angle
    this.image = loadImage("Sprites/cup.png");

    World.add(world,this.body);
    }
    display(){
        var pos = this.body.position
        var angle = this.body.angle
        push()
        translate(pos.x,pos.y);
        rotate(angle)
        imageMode(CENTER)
        image(this.image,0,0,this.width,this.height)
        pop()
    }
}