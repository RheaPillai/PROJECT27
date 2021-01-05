class Roof{

    constructor(x,y,width,height){
    var option=
    {
    isStatic:true
    }
        this.width=width
        this.height=height
        this.body=Bodies.rectangle(this.x,this.y,width,height,option)
        World.add(world,this.body)
}

    display()
    {
    var pos=this.body.position
    rect(CENTER)
    fill("blue")
    rect(pos.x,pos.y,this.width,this.height)

    }

}