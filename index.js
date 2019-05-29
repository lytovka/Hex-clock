function changeTime() {

    let date = new Date();

    let seconds = date.getSeconds();
    let minutes = date.getMinutes();
    let hours = date.getHours() % 12;

    let secondsDegrees = (seconds / 60) * 360 - 90;
    let minutesDegrees = (minutes / 60) * 360 - 90;
    let hoursDegrees = (hours / 12) * 360 - 90;

    document.querySelector(".second-arrow").style.transform = `rotate(${secondsDegrees}deg)`;
    document.querySelector(".minute-arrow").style.transform = `rotate(${minutesDegrees}deg)`;
    document.querySelector(".hour-arrow").style.transform = `rotate(${hoursDegrees}deg)`;

    seconds = seconds.toString();
    minutes = minutes.toString();
    hours = hours.toString();

    if (seconds.length < 2) seconds = '0' + seconds;
    if (minutes.length < 2) minutes = '0' + minutes;
    if (hours.length < 2) hours = '0' + hours;

    let colorTime = '#' + hours + minutes + seconds;

    document.body.style.backgroundColor = colorTime;

    document.querySelector(".hours").innerHTML = '#' + hours;
    document.querySelector(".minutes").innerHTML = minutes;
    document.querySelector(".seconds").innerHTML = seconds;

}

changeTime();
setInterval(changeTime, 1000);