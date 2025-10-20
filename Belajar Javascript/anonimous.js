let sapa = function (name){
    console.log(`haslo ${name}`)
}

sapa("terry")

function giveMeName(callback){
    callback("soamy")
}

giveMeName(sapa)
giveMeName(function (name){
    console.log(`halos ${name}`)
})
