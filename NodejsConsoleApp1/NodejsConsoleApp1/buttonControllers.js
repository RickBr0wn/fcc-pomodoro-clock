'use strict'

function timeMinusClick(){
    let tMinus = $("#timer-length").val();
    tMinus--;
    $('#timer-length').val(tMinus).trigger('change');
    document.getElementById('timerValue').innerHTML = tMinus  + ":00";
    totalTime = tMinus*60;
}

function timePlusClick(){
    let tPlus = $("#timer-length").val();
    tPlus++;
    $('#timer-length').val(tPlus).trigger('change');
    document.getElementById('timerValue').innerHTML = tPlus  + ":00";
    totalTime = tPlus*60;
}

function breakMinusClick(){
    let bMinus = $("#break-length").val();
    bMinus--;
    $('#break-length').val(bMinus).trigger('change');
}

function breakPlusClick(){
    let bPlus = $("#break-length").val();
    bPlus++;
    $('#break-length').val(bPlus).trigger('change');
}

function buttonStateController(){
    if(state){
        state = false;
        document.getElementById('playButton').innerHTML = `<i class="fas fa-stop"></i> Stop`;
        shadowElements(true);
        startTimer();
    }else{
        state = true;
        document.getElementById('playButton').innerHTML = `<i class="fas fa-play"></i> Start`;
        shadowElements(false);
        stopTimer();
    }   
}