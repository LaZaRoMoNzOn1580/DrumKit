
let numberofdurmbottoms = document.querySelectorAll(".drum").length;

const audio1 = new Audio('sounds/crash.mp3')
const audio3 = new Audio('sounds/kick-bass.mp3')
const audio2 = new Audio('sounds/snare.mp3')
const audio4 = new Audio('sounds/tom-1.mp3')
const audio5 = new Audio('sounds/tom-2.mp3')
const audio6 = new Audio('sounds/tom-3.mp3')
const audio7 = new Audio('sounds/tom-4.mp3')

let ListaDeAudios = [audio1,audio2,audio3,audio4,audio5,audio6,audio7]

for( let i = 0; i < numberofdurmbottoms ; i++)

document.querySelectorAll(".drum")[i].addEventListener("click", function() {ListaDeAudios[i].play()});
document,querySelectorAll(".drum")[i].addEventListener("keydown",function(){ListaDeAudios[i].play()});
