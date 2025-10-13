class Person{

    say(name){
        if (name){
            this.#withName(name)
        }else{
            this.#withoutName()
        }
    }

    #withName(name){
        console.log(`halo ${name}`)
    }

    #withoutName(){
        console.log(`Halo`)
    }
}

const terry = new Person()
terry.say("terry")