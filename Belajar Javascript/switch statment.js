let nilai = "b".toUpperCase()

switch(nilai){
    case "A":
        console.log("Kamu lulus dengan baik")
        break
    case "B":
    case "C":
        console.log("Kamu lulus")
        break
    case "D":
        console.log("Kamu lulus bersyarat")
        break
    default:
        console.log("kamu gagal")
}

if (nilai === "A"){
    console.log("Kamu lulus dengan baik")
}else if(nilai === "B" || nilai === "C"){
    console.log("Kamu lulus")
}else if(nilai === "D"){
    console.log("Kamu lulus bersyarat")
}else(
    console.log("anda gagal")
)