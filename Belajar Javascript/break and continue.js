let i = 1
while (true){
    console.log(`kamu yang ke ${i}`)
    i++

    if (i > 10){
        break
    }
}

for (let i = 1; i <= 100;i++){
    if (i % 2 === 0){
        continue
    }
    console.log(`bilangan ganjil ${i}`)
}