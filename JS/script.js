const constructionElement = document.getElementById("construction");

let id;
let pos = 2000;
const endPos = 1710;

function frame() {
    if (pos == endPos)
        clearInterval(id);
    else {
        constructionElement.style.backgroundPosition = "0px " + pos-- + "px";
    }
}

clearInterval(id);
id = setInterval(frame, 20);
