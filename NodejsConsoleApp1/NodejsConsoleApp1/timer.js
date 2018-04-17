'use strict'

function stateController(){
    if(state){
        state = false;
        document.getElementById('playButton').innerHTML = `<i class="fas fa-stop"></i> Stop`;
        startTimer('start', workTime);
    }else{
        state = true;
        document.getElementById('playButton').innerHTML = `<i class="fas fa-play"></i> Start`;
    }   
}

function startTimer(instruction, workTime){
    document.getElementById('timerValue').innerHTML = workTime/60;
    $("#timer").val(workTime).trigger('change');

    let sTimer = setInterval(function(){
        workTime --;
        $("#timer").val(workTime).trigger('change');
        document.getElementById('timerValue').innerHTML = (workTime/60).toFixed(2);
    }, 1000);
}

