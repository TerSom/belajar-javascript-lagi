function* createName(){
    yield "terry"
    yield "somay"
    yield "gaming"
}

const names = createName()
for(const name of names){
    console.log(name)
}

function* buatGanjil(value) {
    for(i = 1; i <= value; i++){
        if (i % 2 === 1){
            yield i
        }
    }
}

const angkGanjils = buatGanjil(100)
for (const angkGanjil of angkGanjils){
    console.log(angkGanjil)
}