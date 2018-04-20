'use strict'

function startTimer(){ 
    originalTime = totalTime;
    timerSet = setInterval(timerFunc, 1000);
}

function stopTimer(){
 clearInterval(timerSet);
}

function timerFunc(){
    counter++;
    tickTime = totalTime - counter;
    $('#timerDial').val(tickTime).trigger('change');
    document.getElementById('timerValue').innerHTML = convertToTime(tickTime);
}

function convertToTime(number){
    let minutes = Math.floor(number/60);
    let seconds = number%60;
    let time = minTwoDigits(minutes) + ":" + minTwoDigits(seconds);

    return time;
}

function resetTimer(){
    totalTime = originalTime;
    counter = 0;
    $('#timerDial').val(totalTime).trigger('change');
    document.getElementById('timerValue').innerHTML = convertToTime(originalTime);
}
