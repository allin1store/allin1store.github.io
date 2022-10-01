function getTimer(){
    
    let releaseDate = new Date("Oct 29, 2022 00:00:00").getTime();
    let now = new Date();
    let timeLeft = releaseDate - now;

    let day = Math.floor(timeLeft / (1000*60*60*24));
    let hour = Math.floor((timeLeft % (1000*60*60*24))/ (1000*60*60));
    let min = Math.floor((timeLeft % (1000*60*60))/ (1000*60));
    let sec = Math.floor((timeLeft % (1000*60))/ 1000);

    document.getElementById("timer_container_time").innerHTML = day+ "Days &nbsp;" + hour +" : "+min+" : "+sec;
    
}

onload = setInterval(getTimer, 1000);
