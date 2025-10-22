// Destructuring Array
// const perkenalan = ['halo','nama','saya','terry']

// const [satu,dua,tiga,empat] = perkenalan
// console.log(satu)
// console.log(dua)

// skip items
// const [satu,,,empat] = perkenalan
// console.log(empat)

// swap itemas
// let a = 1;
// let b = 2;
// console.log(a)
// console.log(b)
// let = [a, b] = [b, a];
// console.log(a)
// console.log(b)

// retrunt value function
// function coba(){
//     return [1,2]
// }

// const [a,b] = coba()
// console.log(a)

// rest parameter
// const [a, ...value] = [1,2,3,4,5]
// console.log(a)
// console.log(value)

// Destructuring Object
// const mhs = {
//     nama : "terry",
//     umur : 17
// }

// const {nama , umur} = mhs
// console.log(nama,umur)

// assigment tanpa object
// ({nama , umur} = { nama : "terry", umur : 17})

// console.log(nama)

// assgin ke variabel baru
// const mhs = {
//     nama : "terry",
//     umur : 17
// }

// const {nama : n,umur : u} = mhs
// console.log(n)
// console.log(u)

// memberikan default value
// const mhs = {
//     nama : "terry",
//     umur : 17,
//     email : "umaysomay@gmail.com"
// }

// const {nama , umur, email = "default@gmail.com"} = mhs
// console.log(email)

// // bisa memberi nilai default dan juga assign ke variabel baru
// const mhs = {
//     nama : "terry",
//     umur : 17,
//     email : "umaysomay@gmail.com"
// }

// const {nama : n , umur : u, email : e = "default@gmail.com"} = mhs
// console.log(e)

// rest parameter
// const mhs = {
//     nama : "terry",
//     umur : 17,
//     email : "umaysomay@gmail.com"
// }

// const {nama : n, ...value} = mhs
// console.log(value)

// mengambil field pada object
const mhs = {
    id : 123,
    nama : "terry",
    umur : 17,
    email : "umaysomay@gmail.com"
}

function getId({id}){
    return id
}

console.log(getId(mhs))




