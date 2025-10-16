const container = document.querySelector(".container");
const imgJumbo = document.querySelector(".jumbo");
const thumbs = document.querySelectorAll(".thumb");

container.addEventListener("click", (e) => {
  if (e.target.className === "thumb") {
    imgJumbo.src = e.target.src;
    imgJumbo.classList.add("fade");
    setTimeout(() => {
      imgJumbo.classList.remove("fade");
    }, 500);
    thumbs.forEach((thumb) => {
      thumb.classList = "thumb";
    });

    e.target.classList.add("active");
  }
});
