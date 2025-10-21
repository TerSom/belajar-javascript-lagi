// html fragment
// const mhs = {
//     nama : "terry",
//     umur : 33,
//     nrp : "24242325",
//     email : "umaysomay@gmail.com"
// }

// let el = `<div class="mhs">
//     <h2>${mhs.nama}</h2>
//     <span class="nrp">${mhs.nrp}</span>
// </div>`

// looping
// const mhs = [
//     {
//         nama : "terry",
//         jurusan : "PPLG"
//     },
//     {
//         nama : "Umay",
//         jurusan : "PPLG"
//     },
//     {
//         nama : "Somay",
//         jurusan : "PPLG"
//     }
// ];

// let el = `<div class="mhs">
//     ${mhs.map(mhs => `<ul>
//         <li>${mhs.nama}</li>
//         <li>${mhs.jurusan}</li>
//         </ul>`).join('')}
// </div>`

// conditonal
// const lagu = {
//     penyanyi : "umay",
//     judul : "balon ku",
//     // lirik : "balon soamy"
// }

// let el = `<div class="mhs">
//     <h2>${lagu.penyanyi}</h2>
//     <span>${lagu.judul} ${(lagu.lirik) ? `(lirik ${lagu.lirik})` :  "" }</span>
// </div>`

// html fragment bersarang
const mhs = {
    nama : "terry",
    semseter : 2,
    mataKuliah : [
        `Coding Web`,
        `Mtk`,
        `B inggris`
    ]
}

loopingMataKuliah = (mataKuliah) => {
    return mataKuliah.map(mk => `<li>${mk}</li>`).join("")
}


let el = `<div class="mhs">
    <span> nama ${mhs.nama}</span>
    <span> semester ${mhs.semseter}</span>
    <p>MataKuliah</p>
    <ol>
    ${loopingMataKuliah(mhs.mataKuliah)}
    </ol>
</div>`


document.body.innerHTML = el