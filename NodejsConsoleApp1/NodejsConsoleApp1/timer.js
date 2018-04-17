'use strict'

function stateController(){
    if(state){
        state = false;
        document.getElementById('playButton').innerHTML = `<i class="fas fa-stop"></i> Stop`;
        timer('start', workTime);
    }else{
        state = true;
        document.getElementById('playButton').innerHTML = `<i class="fas fa-play"></i> Start`;
    }   
}

function timer(instruction, workTime){
    document.getElementById('timerValue').innerHTML = workTime;
    $("#timer").val(workTime).trigger('change');

    setInterval(function(){
        workTime --;
        $("#timer").val(workTime).trigger('change');
        document.getElementById('timerValue').innerHTML = workTime;
    }, 1000);
}

