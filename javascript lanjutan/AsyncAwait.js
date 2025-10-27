// const coba = new Promise(resolve => {
//     setTimeout(() => {
//         resolve("selesai")
//     }, 2000);
// })
// coba.then(() => console.log(coba))

function cobaPromise() {
    return new Promise((resolve,reject) => {
    waktu = 50000
    if(waktu < 5000){
        setTimeout(() => {
            resolve("selesai")
        }, waktu);
    }else{
        reject("kelamaan")
    }
})
}

// const coba = cobaPromise()
// console.log(coba)
// coba
//     .then((coba) => console.log(coba))
//     .catch((coba) => console.log(coba))


async function cobaAsyncAwait() {
    try{
        const coba = await cobaPromise()
        console.log(coba)
    }catch(err){
        console.error(err)
    }
}

cobaAsyncAwait()


