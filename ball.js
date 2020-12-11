class Ball{
    constructor(x,y,r){
        var options={
            restitution: 0.5,
            friction: 0.3,
            density: 0.9,
            isStatic: true            
        }
        this.body = Bodies.circle(x,y,r/2,options)
        
        this.x = x
        this.y = y
        this.r = r
        this.image = loadImage("Sprites/Ball.jpg")

        World.add(world, this.body);
    }
    display(){
    var pos = this.body.position
    pos.y = mouseY
    pos.x = mouseX
        push()
        translate(pos.x,pos.y)
        imageMode(CENTER)
        image(this.image,0,0,this.r*2)
        pop()
    }
}