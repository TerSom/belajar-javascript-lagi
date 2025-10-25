// fetch("https://ghibliapi.vercel.app/films")
//     .then(Response => Response.json())
//     .then(Response => console.log(Response))

// promise
// contoh 1 

let ditepati = true
const jaji1 = new Promise((reslove,reject) => {
    if (ditepati) {
        reslove("janji di tepati")
    }else {
        reject("ingkar janji")
    }
})

jaji1
    .then(res => console.log("Ok :" + res))
    .catch(res => console.log("Not OK :" + res))

// contoh ke 2

const janji2 = new Promise((reslove,reject) => {
    if(ditepati) {
        setTimeout(() => {
            reslove("janji di tepati")
        }, 2000);
    }else{
        setTimeout(() => {
            reject("janji di ingkari")
        }, 2000);
    }
})

console.log("mulai")
// console.log(janji2.then(res => console.log(res)))
janji2
    .finally(() => console.log("selesai di fetch"))
    .then(res => console.log("Ok :" + res))
    .catch(res => console.log("Not OK :" + res))
console.log("selesai")

// Promise.all()

const film = new Promise(resolve => {
    setTimeout(() => {
        resolve([
        {
            judul : "somay",
            sutradara : "umay",
            pemeran : "terry",
        },
        {
            judul : "gg",
            sutradara : "umaygg",
            pemeran : "terrygg",
        },
    ])
    }, 1000);
})

const cuaca = new Promise(resolve => {
    setTimeout(() => {
        resolve([{
            kota : "depok",
            temp : 27,
            kondisi : "cerah"
        }])
    }, 500);
})

// film.then(res => console.log(res))
// cuaca.then(res => console.log(res))

Promise.all([film,cuaca])
    .then( response => {
        const [film,cuaca] = response
        console.log(cuaca)
        console.log(film)
    })


