// const orang = ["umay","terry","farel"]
// console.log(...orang)

// menggunakan 3 array

// const mhs = ["udin","sandika","terry"]
// const dosen = ["umay","farel","somay"]
// const orang = [...mhs,"somaygg" ,...dosen]
// // const orang = mhs.concat(dosen)
// console.log(orang)

// mengcopy array
// const mhs = ["somay","terry","umay"]
// const copyMhs = [...mhs]
// copyMhs[1] = "terrygg"
// console.log(copyMhs)

// const li = document.querySelectorAll("li")
// const mhs = [...li].map(m => m.textContent)
// console.log(mhs)

const nama = document.querySelector(".nama")
const angkaNama = [...nama.textContent].map(n => `<span>${n}</span>`).join('')
nama.innerHTML = angkaNama

