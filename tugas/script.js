const body = document.querySelector("body")
const btn = document.querySelector("#btn")
btn.addEventListener("click", () => {
    // body.style.backgroundColor = "tomato"

    body.classList.toggle('toggle')
})

const div = document.querySelector('.container')
const btn2 = document.createElement("button")
const textBtn = document.createTextNode("Random Color")
btn2.appendChild(textBtn)
btn2.setAttribute("type","button")
div.appendChild(btn2)

btn2.addEventListener("click", () => {
    r = Math.floor(Math.random() * 255 + 1)
    g = Math.floor(Math.random() * 255 + 1)
    b = Math.floor(Math.random() * 255 + 1)

    
    body.style.backgroundColor = `rgb(${r},${g},${b})`
})

const sMerah = document.querySelector("input[name='RedSlider']")
const sHijau = document.querySelector("input[name='GreenSlider']")
const sBiru = document.querySelector("input[name='BlueSlider']")
sMerah.addEventListener("input",() => {
    let merah = sMerah.value
    let hijau = sHijau.value
    let biru = sBiru.value


    body.style.backgroundColor = `rgb(${merah},${hijau},${biru})`
})
sHijau.addEventListener("input",() => {
    let merah = sMerah.value
    let hijau = sHijau.value
    let biru = sBiru.value


    body.style.backgroundColor = `rgb(${merah},${hijau},${biru})`
})
sBiru.addEventListener("input",() => {
    let merah = sMerah.value
    let hijau = sHijau.value
    let biru = sBiru.value


    body.style.backgroundColor = `rgb(${merah},${hijau},${biru})`
})

body.addEventListener("mousemove", (event) => {
    const xPos = Math.round((event.clientX / window.innerWidth) * 255)
    const yPos = Math.round((event.clientY / window.innerHeight) * 255)

    body.style.backgroundColor = (`rgb(${xPos},${yPos},0)`)
})