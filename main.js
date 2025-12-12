const input = require("prompt-sync")();

const nama = input("Masukkan nama anda: ");
const umur = Number(input("Berapa umurmu? "));

if (umur<21){
    const umurKurang = 21 - umur;
    console.log(`Maaf ${nama}, umur kamu kurang ${umurKurang} tahun lagi`);
}