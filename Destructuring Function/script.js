// // desctructuring
// function kalkulasi(a,b) {
//     return [a + b, a - b ,a * b, a / b ]
// }

// const [tambah,kurang,kali,bagi] = kalkulasi(2,5)
// console.log(kurang)

// function kalkulasi(a,b){
//     return {
//         tambah : a + b,
//         kurang : a - b,
//         kali : a * b,
//         bagi : a / b
        
//     }
// }

// const {tambah,kali,bagi,kurang} = kalkulasi(2,2)
// console.log(tambah)

// desctructuring argument
const mhs1 = {
    nama : "terry",
    umur : 17,
    email : "umsaysomay@gmail.com",
    nilai : {
        tugas : 80,
        uts : 90,
        uas : 92,
    }
}

function cetakMhs({nama,umur,email , nilai : {tugas,uts,uas}}){
    return `halo nama saya ${nama}, umur ${umur} email ${email} dan nilai tugasnya ${tugas}, uts ${uts}, uas ${uas}`
}

console.log(cetakMhs(mhs1))

