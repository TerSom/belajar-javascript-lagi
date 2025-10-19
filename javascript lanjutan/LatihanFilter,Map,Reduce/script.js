// ambil data semua li jadikan array dan filter dengan includes "JAVASCRIPT LANJUTAN"
const li = Array.from(document.querySelectorAll("li")).filter(item => item.textContent.includes("JAVASCRIPT LANJUTAN"))
const jumlahVideo = document.querySelector(".jumlah-video")
const totalDurasi = document.querySelector(".total-durasi")

// ambil data li dan map item.dataset.duration jadi ambil waktunya aja
let waktu = li.map(item => item.dataset.duration).map(
    waktu => {
        // 10:30 jadi [10,30] menggunakan split dan ubah durasi menjadi float
        const parts = waktu.split(":").map(part => parseFloat(part))
        return (parts[0] * 60) + parts[1]  
    })
    // jumlah semua detik
    .reduce((total,detik) => total + detik)

// ubah menajadi jam menit detik
const jam = Math.floor(waktu / 3600)
waktu = waktu - jam * 3600
const menit = Math.floor(waktu / 60)
const detik = waktu - menit * 60

// simpan di dom
const pdurasi = `${jam} jam, ${menit} menit, ${detik} detik`
jumlahVideo.textContent = li.length
totalDurasi.textContent = pdurasi

