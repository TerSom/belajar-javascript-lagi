alert("selamat di kalkulaotr saya")
while(true){
    angka1 = parseInt(prompt("masikan angka pertama"))
    operator = prompt("masukan operator matematika (+,-,*)")
    angka2 = parseInt(prompt("masukan angka kedua"))
    hasil = ""
    
    if (operator == "+"){
        hasil = angka1 + angka2
        alert(hasil)
    }else if(operator == "-"){
        hasil = angka1 - angka2
        alert(hasil)
    }else if(operator == "*"){
        hasil = angka1 * angka2
        alert(hasil)
    }else{
        alert("masukan operator yang benar")
    }

    let isdone = prompt("apakah mau lanjut (y/n)").toUpperCase()
    if (isdone == "N"){
        break
    }else{
        continue    
    }
}
alert("terima kasih sudah bermain")