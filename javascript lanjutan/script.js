// object literal

// let mahasiswa1 = {
//     nama : "terry",
//     energi : 10,
//     minum : function(porsi) {
//         this.energi = this.energi + porsi;
//         console.log(`halo ${this.nama}, selamat minum`)
//     }
// }

// let mahasiswa2 = {
//     nama : "umay",
//     energi : 10,
//     minum : function(porsi) {
//         this.energi = this.energi + porsi;
//         console.log(`halo ${this.nama}, selamat minum`)
//     }
// }

// function Declaration

// function mahasiswa(nama,energi) {
//     let mahasiswa = {}
//     mahasiswa.nama = nama
//     mahasiswa.energi = energi

//     mahasiswa.minum = function(porsi){
//         this.energi += porsi
//         console.log(`halo ${this.nama}, selamat minum dan energi kamu bertambah ${this.energi}`)
//     }

//     mahasiswa.main = function(jam){
//         this.energi += jam
//         console.log(`halo ${this.nama}, selamat main energi kamu berkurang ${this.energi}`)

//     }

//     return mahasiswa
// }

// const terry = mahasiswa("terry",10)
// const umay = mahasiswa("umay",20)

// Constracture function
function Mahasiswa(nama,energi) {
    this.nama = nama
    this.energi = energi

    this.minum = function(porsi){
        this.energi += porsi
        console.log(`halo ${this.nama}, selamat minum dan energi kamu ${this.energi - porsi} bertambah ${porsi} jadi ${this.energi}`)
    }

    this.main = function(jam){
        this.energi -= jam
        console.log(`halo ${this.nama}, selamat main energi kamu ${this.energi + jam} berkurang ${jam} jadi ${this.energi}`)

    }

}

const terry = new Mahasiswa("terry",10)
terry.minum(20)
console.log(terry)
terry.main(10)
console.log(terry)
