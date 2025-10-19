const angka = [-1, 8, 9, 1, 4, -5, -4, 3, 2, 9]

// filter
// const newAngka = []

// for(let i = 0; i < angka.length; i++){
//     if(angka[i] >= 3){
//         newAngka.push(angka[i])
//     }
// }

// const newAngka = angka.filter( a => a > 3)

// const newAngka = angka.filter( (a) => {
//     return a > 3
// })
// console.log(newAngka)

// map
// const newAngka = angka.map(a => a * 2)
// console.log(newAngka)

// reduce
// const newAngka = angka.reduce((accumalator, currentValue) => accumalator + currentValue)
// console.log(newAngka)

// method Chaining
const hasil = angka.filter(a => a > 5).map(k => k * 3).reduce((accumalator, currentValue) => accumalator + currentValue )
console.log(hasil)
