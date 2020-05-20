var bg = document.getElementsByClassName("circle-container")[0];

for (var i = 0; i < 18; i++) {
    var circleDiv = document.createElement("div");
    circleDiv.setAttribute("class", "circle");
    var x = Math.floor((Math.random() * (window.innerWidth)) + 1);
    var y = Math.floor((Math.random() * (window.innerHeight)) + 1);
    var delay = Math.floor(Math.random() * 3 + 1);
    console.log(`x: ${x}, y ${y}`)
    circleDiv.style.top = `${y}px`;
    circleDiv.style.left = `${x}px`;
    circleDiv.style.animation = `fade 4s ${delay}s infinite ease`;
    bg.appendChild(circleDiv);
}
let back = false;
let nextWord = false;
const text = ['web developer  ', 'app developer  ', 'UI/UX Designer  '];
let countWord = 0;
let index = 0;
let selectedText = '';
let letter = '';
let letternew = '';
var newIndex = 0;
(function typewriter() {
    if (countWord === text.length) {
        countWord = 0;
    }
    selectedText = text[countWord];
    letter = selectedText.slice(0, ++index);
    document.querySelector('.typing').textContent = letter;
    if (letter.length == selectedText.length) {
        // back = true;
        countWord++;
        index = 0;
    }
    // if (nextWord == true) {
    //     countWord++;
    //     index = 0;
    //     nextWord = false;
    // }
    // if (back == true) {
    //     // alert(index)
    //     newIndex = ++(newIndex);
    //     // newIndex = newIndex * (-1)
    //     letternew = selectedText.slice(0, (newIndex) * (-1));
    //     console.log(newIndex)
    //     document.querySelector('.typing').textContent = letternew;
    //     if (newIndex == (selectedText.length)) {
    //         nextWord = true;
    //         back = false;
    //         // alert("oop");
    //         // break;
    //     }
    // }
    setTimeout(typewriter, 200)
}());