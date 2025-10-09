const p2 = document.querySelector(".p2")
const p3 = document.querySelector(".p3")

ubahWarnaP2 = () => {
    p2.style.backgroundColor = "lightblue"
}

ubahWarnaP3 = () => {
    p3.style.backgroundColor = "lightblue"
}

p3.onclick = ubahWarnaP3

const p = document.querySelector("#b p")
createLi4 = () => {
    const ul = document.querySelector("ul")
    const liBaru = document.createElement("li")
    for (i = 1; i <= 4; i++){
        const textBaru = document.createTextNode(`Item ${i} `)
        liBaru.appendChild(textBaru)
        ul.appendChild(liBaru)
    }

}
p.onclick = createLi4

const judul = document.querySelector("#judul")

judul.addEventListener("click", () => {
    const sectionA = document.getElementById("a")
    const pBaru = document.createElement("p")
    const textBaruP = document.createTextNode("paragraf baru")

    pBaru.appendChild(textBaruP)
    sectionA.appendChild(pBaru)
})

const p1 = document.querySelector(".p1")
// p1.onclick = () => {
//     p1.style.backgroundColor = "red"
// }

// p1.onclick = () => {
//     p1.style.color = "red"
// }

p1.addEventListener('mouseover', () => {
    p1.style.backgroundColor = "red"
})

p1.addEventListener('mouseout', () => {
    p1.style.backgroundColor = "white"
})

p1.addEventListener('keyup', () => {
    p1.style.backgroundColor = "white"
})

p1.addEventListener('click', () => {
    p1.style.color = "red"
})


