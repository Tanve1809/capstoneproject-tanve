



var item1 = document.getElementById("item1");
var item2 = document.getElementById("item1");
var item3 = document.getElementById("item1");
var item4 = document.getElementById("item1");

var block1 = {
    name: "Energy Effecient Light Bulb",
    quantity: 0,
    rupee: 100,
};
var block2 = {
    name: "Pen with seed",
    quantity: 0,
    rupee: 40,
};
var block3 = {
    name: "Pollution free crackers",
    quantity: 0,
    rupee: 80,
};
var block4 = {
    name: "Resusable Bag",
    quantity: 0,
    rupee: 40,
};

function add() {
 
}

// item1.onclick = () => {
//     block1.quantity++;
//     add();
// }

// item2.onclick = () => {
//     block2.quantity++;
//     add();
// }

// item3.onclick = () => {
//     block3.quantity++;
//     add();
// }

// item4.onclick = () => {
//     block4.quantity++;
//     add();
// }

window.addEventListener("DOMContentLoaded", event => {
    const audio = document.querySelector("audio");
    audio.volume = 0.2;
    audio.play();
  });
  var display = [Resusable-Bag,Pollution-free-crackers,Pen-withseed,light-bulb]
  document.getElementById("store").innerHTML = display[0];