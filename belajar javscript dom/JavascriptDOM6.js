const pBaru = document.createElement("p") 
const textBaru = document.createTextNode("Paragraf baru")
pBaru.appendChild(textBaru)
const sectionA = document.getElementById('a')
sectionA.appendChild(pBaru)

const liBaru = document.createElement("li")
const textBaruli = document.createTextNode("item 4 dan sebelum 2") 
liBaru.appendChild(textBaruli)

const ul = document.querySelector("#c")
ul.appendChild(liBaru)

const li2 = ul.querySelector("li:nth-child(2)")
ul.insertBefore(liBaru,li2)

const a = document.getElementsByTagName("a")[0]
sectionA.removeChild(a)


const sectionB = document.getElementById("b")
const h2Baru = document.createElement("h2")
const katah2Baru = document.createTextNode("JUDUL BARU!")

h2Baru.appendChild(katah2Baru)

const p = sectionB.querySelector("p")
sectionB.replaceChild(h2Baru,p)

pBaru.style.backgroundColor = "tomato"
h2Baru.style.backgroundColor = "lightBlue"
liBaru.style.backgroundColor = "red"

