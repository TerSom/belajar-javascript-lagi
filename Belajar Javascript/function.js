function fucntionHelloWord(){
    console.log("hello World")
}
fucntionHelloWord()

function sayHello(firstName,lastName){
    console.log(`halo nama awal kamu ${firstName} dan nama akhir kamu ${lastName}`)
}
sayHello("terry","somay")

function sayHello2(firstName,lastName){
    const hello = `halo ${firstName} ${lastName}`
    return hello
}

const sapa = sayHello2("Terry","Umay")
console.log(sapa)

function getFinalscroe(value){
    if(value >= 90){
        return "A"
    }else if (value >= 80){
        return "B"
    }else if (value >= 70){
        return "C"
    }else if (value >= 60){
        return "D"
    }else{
        return "KAMU TIDAK LULUS"
    }
}

let hasil = getFinalscroe(1000)
console.log(hasil)

function isContains(array,searchValue){
    for( element of array){
        if(element === searchValue){
            return true
        }
    }
    return false
}

let contrains = isContains([1,2,3,4,5,6,7,8,9,10],"2")
console.log(contrains)

function register(name,gender = "unknown"){
    console.log(`Halo ${name} gender ${gender}`)
}

register("terry")
register("terry", "male")
register("terry", undefined)