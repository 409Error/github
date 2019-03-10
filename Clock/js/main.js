<<<<<<< HEAD
// selecting div element and body
=======
// selecting div element
>>>>>>> 62866f26fc0993acb7369e5296f8a883c80934ec
var clockElement = document.getElementById('clock');
let circleElements = document.getElementsByClassName("circle");
// Create a clock function
var time = function() {
    var time = new Date(),
        hh = time.getHours(),
        mm = time.getMinutes(),
        ss = time.getSeconds();
<<<<<<< HEAD
    hh = hh <= 9 ? "0" + hh : hh;
    mm = mm <= 9 ? "0" + mm : mm;
    ss = ss <= 9 ? "0" + ss : ss;
    var timeInsiede = hh + ":" + mm + ":" + ss;
=======
    hh = hh<=9 ? "0"+hh:hh;
    mm = mm<=9 ? "0"+mm:mm;
    ss = ss<=9 ? "0"+ss:ss;
    var timeInsiede = hh+":"+mm+":"+ss;
>>>>>>> 62866f26fc0993acb7369e5296f8a883c80934ec
    clockElement.firstElementChild.textContent = timeInsiede;
}
// a called function and adding interval in a one second 
time();
var timeID = setInterval(time, 1000);

circleElements[1].onclick = function() {
    clearInterval(timeID);
    circleElements[0].onclick = function() {
        timeID = setInterval(time, 1000);
        circleElements[0].onclick = null;
    }
}