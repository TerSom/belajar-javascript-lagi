const niliaUjian = 80
const nilaiAbsensi = 75

const luluUjian = niliaUjian > 75;
const luluAbsensi = nilaiAbsensi > 75;

let lulus = niliaUjian && luluAbsensi
document.writeln("<p> " + lulus + " </p>")

let lulusBersyarat = luluUjian || luluAbsensi
document.writeln("<p> " + lulusBersyarat + " </p>")