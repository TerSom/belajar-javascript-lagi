class Shape{
    constructor(name){
        this.name = name
    }

    paint(){
        console.log("shape")
    }
}

class Circle extends Shape{
    constructor(name,age){
        super(name)
        this.age = age
    }

    paint(){
        super.paint()
        console.log("circle")
    }
}

const obj = new Circle()

obj.paint()