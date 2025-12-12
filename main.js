const input = require("prompt-sync")();

const nama = input("Masukkan nama anda: ");
const umur = Number(input("Berapa umurmu? "));

if (umur<21){
    const umurKurang = 21 - umur;
    console.log(`Maaf ${nama}, umur kamu kurang ${umurKurang} tahun lagi`);
} else {
    let uang = Number(input("Berapa uang yang kamu bawa? "));
    if (uang<500000){
        uang = uang/1000;
        console.log(`Maaf ${nama}, uang kamu cuma ${uang} ribu. Datang lagi lain kali`);
    } else {
        console.log(`Selamat datang ${nama}`);
    }
}