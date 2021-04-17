class particle {
    constructor(x, y) {
        var options = {
            restitution: 1,
            friction: 0,
            isStatic:false
        }
        this.x=x;
        this.y=y;
        this.r = 10;
        this.color=color(random(0,255),random(0,255),random(0,255));
        this.body = Bodies.circle(this.x,this.y, this.r, options);
        World.add(world, this.body);
    }
    display(){

        var pos = this.body.position;
        var angle = this.body.angle;

        push();
        translate(pos.x, pos.y);
        rotate(angle);
        imageMode(CENTER);
        noStroke();
        fill(this.color);
        ellipseMode(RADIUS);
        ellipse(0,0,this.r,this.r);
        pop();
    }
}