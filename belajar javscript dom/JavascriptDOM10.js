const container = document.querySelector(".container")

container.addEventListener("click",(event) => {
    if (event.target.className = "close"){
        event.target.parentElement.style.display = "none"
        preventDefault() 
    }
})

// const close = document.querySelectorAll(".close");

// close.forEach((el) => {
//   el.addEventListener("click", (e) => {
//     e.target.parentElement.style.display = "none";
//     e.preventDefault();
//     e.stopPropagation();
//   });
// });

// const cards = document.querySelectorAll(".card");

// cards.forEach((el) => {
//   el.addEventListener("click", () => {
//     alert("kocak");
//   });
// });

// close.addEventListener("click",() => {
//     card.style.display = "none"
// })

// for(let i = 0 ; i < close.length; i++){
//     close[i].addEventListener("click", (e) => {
//         e.target.parentElement.style.display = "none"
//     })
// }

// close.forEach(function (el) {
//     el.addEventListener("click",(e) => {
//         e.target.parentElement.style.display = "none"
//     })
// })

// const names = document.querySelectorAll(".nama")

// names.forEach((en) => {
//     en.addEventListener("click",(e) => {
//         e.target.parentElement.parentElement.style.display = "none"
//     })
// })
