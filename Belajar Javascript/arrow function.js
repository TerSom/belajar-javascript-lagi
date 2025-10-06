// const hello = (name) => {
//     const nama = `Halo nama aku ${name}`
//     return nama
// }

// console.log(hello("67"))

// const hi = (name) => console.log(`halo nama ku ${name}`)
// hi("69")

// const sum = (first,second) => first + second
// console.log(sum(10,10))

// const nama = aku => console.log(`halo nama ku ${aku}`)

// nama("kocak")

// function giveMeName(callback){
//     callback("terry")
// }

// giveMeName((i) => console.log(`hello ${i}`))

// const nime = (nama) => {
//     alert(`halo nama ku ${nama}`)
// }

// const person = {
//     nama : "terry",
//     hi : nime
// }

// person.hi("terry")

console.log(this)

const person = {
    name : "Budi",
    SayHi : function (nama){
        console.log(`halo nama aku ${this.name} dan nama kamu ${nama}`)
    }
}

person.SayHi("terry")