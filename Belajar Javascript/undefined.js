let nama = 'g';

if (nama === undefined){
    console.log("undefined")
}else(
    console.log("defined")
)

let namagg = ['terry','kamu gg',]
delete namagg[0]

if (namagg[0] === undefined){
    console.log("undefined")
}else(
    console.log(`Halo ${namagg[0]}`)
)

let persons = {}

if (persons.name === undefined){
    console.log("gk ada nama")
}else(
    console.log(`nama kamu ${persons.name}`)
)

let person = {
    name : "terry"
}

if (person.name === undefined){
    console.log("gk ada nama")
}else(
    console.log(`nama kamu ${person.name}`)
)