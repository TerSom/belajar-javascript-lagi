const close = document.querySelector(".close")
const card = document.querySelector(".card")

close.addEventListener("click",() => {
    card.style.display = "none"
})

for(let i = 0 ; i < close.length; i++){
    close[i].addEventListener("click", (e) => {
        e.target.parentElement.style.display = "none"
    })
}

// close.forEach((el) => {
//     el.addEventListener("click",(e) => {
//         e.target.parentElement.style.display = "none"
//     })
// })

const names = document.querySelectorAll(".nama")

names.forEach((en) => {
    en.addEventListener("click",(e) => {
        e.target.parentElement.parentElement.style.display = "none"
    })
})