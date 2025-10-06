const judul = document.getElementById("judul")
judul.style.color = "red"
judul.style.backgroundColor = "#ccc"
judul.innerHTML = "kamu gg banget"  

const p = document.getElementsByTagName("p")
for (i = 0; i < p.length; i++){
    p[i].style.backgroundColor = "blue"
}

const h1 = document.getElementsByTagName("h1")[0]
h1.innerHTML = "19 juta pekerjaan"

const p1 = document.getElementsByClassName("p1")[0]
p1.innerHTML = "PAK WOWO"

