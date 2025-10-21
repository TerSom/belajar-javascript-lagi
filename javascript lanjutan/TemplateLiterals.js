// template literals
const nama = "terry"
const umur = 17
console.log(`nama ${nama} umur ${umur}`)

// embedded expresion
console.log(`${1 + 1}`)
// console.log(`${alert("kocak")}`)
const angka = 11
console.log(`${(angka % 2) ? "ganjil" : "genap"}`)

// html fragment
const mhs = {
    nama : "terry",
    umur : 17,
    nrp : "123131552",
    email : "umaysomay@gmail.com"
}

el = `<div class="mhs">
    <h2 class"nama">${mhs.nama}</h2>
    <span class="umur">${mhs.umur}</span>
    <span class="nrp">${mhs.nrp}</span>
    <span class="nrp">${mhs.email}</span>
</div>`

console.log(el)
