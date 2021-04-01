class Paper{
    constructor(x,y,r){
        
        var g_options={
            isStatic:false,
            restitution:0.3,
            friction:0.5,
            density:1.2
        }
       
        this.x=x;
        this.y=y;
        this.r=r;
        this.body=Bodies.circle(this.x,this.y,this.r/2,g_options);3
        World.add(world,this.body);
        this.image=loadImage("Sprites/1.png");
        }

        display(){
            var pos=this.body.position;
            push();
            translate(pos.x,pos.y);
            ellipseMode(CENTER);
            fill("red");
            
            stroke("red");
            strokeWeight(2);
            ellipse(0,0,30,30);
            pop();
        }
	};