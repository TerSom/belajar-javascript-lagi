// synchronus callback
// function nama(nama) {
//     alert(`halo ${nama}`)
// }

// function tampilanPesan(callback){
//     const nama = prompt("masukan nama kamu")
//     callback(nama)
// }

// tampilanPesan(nama => alert(`nama kamu ${nama}`))

// const mhs = [
//   {
//     nama: "Sandhika Galih",
//     nrp: "043040023",
//     email: "sandhikagalih@unpas.ac.id",
//     jurusan: "Teknik Informatika",
//     idDosenWali: 1
//   },
//   {
//     nama: "Terry Wahyudi",
//     nrp: "043040024",
//     email: "terrywahyudi@unpas.ac.id",
//     jurusan: "Rekayasa Perangkat Lunak",
//     idDosenWali: 2
//   },
//   {
//     nama: "Fadli Akbar",
//     nrp: "043040025",
//     email: "fadli.akbar@unpas.ac.id",
//     jurusan: "Sistem Informasi",
//     idDosenWali: 1
//   },
//   {
//     nama: "Rina Putri",
//     nrp: "043040026",
//     email: "rina.putri@unpas.ac.id",
//     jurusan: "Teknik Komputer",
//     idDosenWali: 3
//   },
//   {
//     nama: "Bagus Setiawan",
//     nrp: "043040027",
//     email: "bagus.setiawan@unpas.ac.id",
//     jurusan: "Teknologi Informasi",
//     idDosenWali: 2
//   }
// ];

// console.log("mulai")
// mhs.forEach(m => {
//     for(let i = 0; i < 1000000; i++){
//         const date = new Date()
//     }
//     console.log(m.nama)})
// console.log("selsai")

// asyncronous Callback
function getDataMahasiswa(url, succes, error) {
  let xhr = new XMLHttpRequest();

  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
      if (xhr.status === 200) {
        succes(xhr.response);
      } else if (xhr.status === 404) {
        error();
      }
    }
  };

  xhr.open("get", url);
  xhr.send();
}

console.log("mulai")
getDataMahasiswa(
    "data/mahasiswa.json",
    (result) => {
        const mhs = JSON.parse(result)
        mhs.forEach(m => console.log(m.nama))
    },
    () => {}
);
console.log("selesai")
