const judul = document.getElementById("judul")
judul.innerHTML = "GG GAMING"

const sectionA = document.querySelector("section#a")
console.table(sectionA)
sectionA.innerHTML = "hello world"

const judul = document.querySelector("#judul")
judul.style.color = "lightblue"
judul.style.backgroundColor = "tomato"

const judul = document.querySelector("#judul")
judul.setAttribute("href" ,"http://instagram.com/sandhikagalih")
console.log(judul.getAttribute("href"))
judul.removeAttribute("href")

const p1 = document.querySelector(".p1")
p1.classList.add("kocak")
p1.classList.remove("kocak")
p1.classList.add("satu","dua" ,"tiga")

const p2 = document.querySelector(".p2")
p1.classList.toggle("biru-muda")

const body = document.querySelector("body")
body.classList.toggle("biru-muda")
body.classList.toggle("biru-muda")

console.log(p1.classList.item(4))
console.log(p1.classList.contains("dua"))
let kocak = p1.classList.contains("dua")

// if (kocak == true){
//     alert("woiiiiiiiiiiiiii")
// }

p1.classList.replace("satu","kocak")