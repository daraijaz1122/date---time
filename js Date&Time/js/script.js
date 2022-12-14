function updateTime() {
    let dateTime = new Date();
    var hr = dateTime.getHours();
    var min = dateTime.getMinutes();
    var sec = dateTime.getSeconds();
    document.getElementsById("hour").innerHTML= hr;
    document.getElementsById("minutes").innerHTML=min;
    document.getElementById("seconds").innerHTML=sec;
}
setInterval(updateTime(),1000);