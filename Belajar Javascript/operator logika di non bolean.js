console.log("Helo" || "")
console.log("" || [])
console.log("0" || "NOL")
console.log(undefined || "NOL")
console.log(null || "undefined")
console.log(0 || false)

let orang = {
    firstName : "terry",
    lastName : "Somay"
}

console.log(orang.firstName || orang.lastName)


console.log("Helo" && "")
console.log("" && [])
console.log("0" && "NOL")
console.log(undefined && "NOL")
console.log(null && "undefined")
console.log(0 && false)