let person = {
    nama : "terry",
    umur : 17
}

let result = "nama" in person;
console.log(result)

if ("nama" in person){
    console.log(`Nama kamu ${person.nama}`)
}else{
    console.log("tidak ada")
}

const orang = {
    nama : "terry",
    umur : undefined
}

if ("umur" in orang){
    console.log(`nama kamu ${orang.umur}`)
}else(
    console.log("gk ada")
)

const names = [null,"terry",null]
const results = 0 in names
console.log(results) 