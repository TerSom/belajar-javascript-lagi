// const Mahasiswa = function (name, umur) {
//   this.name = name;
//   this.umur = umur;
//   this.SayHello = () => {
//     console.log(`hallo ${this.name},umur kamu ${this.umur}`);
//   };

//   setInterval( () => {
//     console.log(this.umur++)
//   }, 10000000);
// };

// const terry = new Mahasiswa("terry", 17);

const box = document.querySelector(".box")
box.addEventListener('click', function () {
    this.classList.toggle("size")
    setTimeout(() => {
        this.classList.toggle('caption')
    },500)
})

