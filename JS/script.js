let angle = 0;
setInterval(function() {
    let construction = document.getElementById("construction");
    angle += 2;
    construction.style.transform = 'rotate(' + angle + 'deg)';
}, 10);
