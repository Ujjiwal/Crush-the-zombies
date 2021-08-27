class Stone {
    constructor(x, y, w,h,) 
    {
      let options = {
       restitution:0.8
      };
      
      this.body = Bodies.rectangle(x, y, w, h, options);
      this.w = w;
      this.h = h;
      World.add(world, this.body);
    }
  
    show() {
      let pos = this.body.position;
      let angle = this.body.angle;
      push();
      translate(pos.x,pos.y);
      rotate(angle);
      rectMode(CENTER);
      fill("light blue");
      ellipse(0, 0, this.w, this.h);
      pop();
    }
  }
