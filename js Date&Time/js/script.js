function updateTime() {
    let dateTime = new Date();
    var hr = dateTime.getHours();
    var min = dateTime.getMinutes();
    var sec = dateTime.getSeconds();
    document.getElementById("hour").innerHTML= hr;
    document.getElementById("minutes").innerHTML=min;
    document.getElementById("seconds").innerHTML=sec;
}
setInterval(updateTime(),1000);
