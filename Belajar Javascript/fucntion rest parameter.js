function sum(name,...data){
    total = 0
    for(const item of data){
        total += item
    }
    console.log(`item ${name} is ${total}`)
}

sum("apple",100,100,100,100)

function sum(name,...data){
    total = 0
    for(const item of data){
        total += item
    }
    console.log(`item ${name} is ${total}`)
}

let harga = [100,200,300,100,2424,223]
sum("apple",...harga)
