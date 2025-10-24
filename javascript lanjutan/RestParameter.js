// rest parameter

function myfunct(...arg) {
    return arg
}

console.log(myfunct(1,2,3,4,5))

function jumlahkan(...angka) {
    hasil = 0
    // for(let a of angka){
    //     hasil += a
    // }
    // return hasil

    return angka.reduce((a,i) => a + i)
    
}

console.log(jumlahkan(1,2,3,4,5))

// array distructuring
const kelompok1 = ["umay","somay","gg","terry"]
const [ketua,wakil,...anggota] = kelompok1
console.log(anggota)

// object distructuring
const team = {
    pm : "terry",
    fronEnd : "umay",
    fronEnd2 : "darman",
    backEnd : "gg",
    backEnd2 : "gg somay"
}

const {pm, ...myteam} = team
console.log(myteam)

// filtering parameter
function filterBy(type,...values){
    return values.filter(f => typeof f === type)
}

console.log(filterBy("boolean","terry",1,2,true,false,"somay","ggg",1231))
