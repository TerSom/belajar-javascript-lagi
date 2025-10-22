// tagged Template
const nama = "terry"
const umur = 17
const email = "Umaysomay@gamil.com"

function hightlight(strings,...value) {
    // result = ''
    // strings.forEach((str,i) => { 
    //     result += `${str}${value[i] || ""}` 
    // });
    // return result
    return strings.reduce((result,str,i) => `${result}${str}<span class="hl">${value[i] || ""}</span>`, '')
}

const str = hightlight`halo, nama saya ${nama}, saya ${umur} Tahun dan email saya ${email}`
console.log(str)
document.body.innerHTML = str

