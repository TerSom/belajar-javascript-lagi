function sapa(name){
    console.log(`halo ${name}`)
}

let sayHello = sapa;
sayHello("somay")

function giveMeName(callback){
    callback("terry")
}
giveMeName(sayHello)