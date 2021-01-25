class Ground{
    constructor(x,y,width,heigth){
    var options={
    isStatic : true
    }
    this.body=Bodies.rectangle(x,y,width,heigth,options);
    this.width=width;
    this.heigth=heigth;
    
    World.add(world,this.body);
}  
display(){
    var pos = this.body.position;
    rectMode(CENTER);
    fill (255);
    rect (0,0,this.width,this.heigth);
}
}