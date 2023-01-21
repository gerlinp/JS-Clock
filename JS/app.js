function currentTime() {
    let date = new Date(); // creating object of date class
    let hour = date.getHours();
    let min = date.getMinutes();
    let sec = date.getSeconds();
    hour = updateTime(hour);
    min  = updateTime(min);
    sec = updateTime(sec);
    document.getElementById("clock").innerHTML = hour + " : " + min + " : " + sec; // adding time to the div
    let t = setTimeout(function(){ currentTime() }, 1000); //setting timer
}  

function updateTime(k) {
    if (k < 10) {
        return "0" + k;
    } else {
        return k;
    }
}






currentTime();


