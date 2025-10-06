const person = {
    firstName : "terry",
    age : 17,
    lastName : "somay"
}

for (orang in person){
    console.log(`${orang} : ${person[orang]}` )
}

const manusia = ["terry","175","50"]
for (index in manusia){
    console.log(` index ke ${index} : ${manusia[index]}`)
}