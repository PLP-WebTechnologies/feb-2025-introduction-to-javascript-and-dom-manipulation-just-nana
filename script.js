const messages = [
    "Welcome to my site",
    "This is was made with html css and javascript",
    "Enjoy your time here!"
];

const textElement = document.getElementById("dynamic-text");

let currentIndex = 0;

function updateText(){
    textElement.textContent = messages[currentIndex];
    currentIndex = (currentIndex + 1) % messages.length;
}
updateText();

setInterval(updateText, 3000);

function changeStyle(){
    const box = document.getElementById("box");

    box.style.backgroundColor = "blue";
    box.style.border = "15px solid black";
    box.style.transform = "rotate(70deg) scale(1.5)";
    box.style.boxShadow = "10px 10px 15px rgba(194, 22, 194, 0.5)"
}
