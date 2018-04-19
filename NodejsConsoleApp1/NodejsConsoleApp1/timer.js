'use strict'


function buttonStateController(){
    if(state){
        state = false;
        document.getElementById('playButton').innerHTML = `<i class="fas fa-stop"></i> Stop`;
        startTimer();
    }else{
        state = true;
        document.getElementById('playButton').innerHTML = `<i class="fas fa-play"></i> Start`;
    }   
}

function startTimer(){ 
    timerSet = setInterval(timerFunc, 1000);
}

function stopTimer(){
    clearInterval(timerSet);
}

function timerFunc(){
    counter++;
    tickTime = totalTime - counter;
    let minutes = Math.floor(tickTime/60);
    let seconds = tickTime%60;
    let time = minTwoDigits(minutes) + ":" + minTwoDigits(seconds);
    $('#timerDial').val(tickTime).trigger('change');
    document.getElementById('timerValue').innerHTML = time;
}

function minTwoDigits(number){
    return (number < 10 ? "0" : "") + number;
}

