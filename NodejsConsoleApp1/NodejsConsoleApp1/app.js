'use strict';

// Global Variables
let state = true;
let counter = 0;
let totalTime = $("#timer-length").val()*60;
let tickTime = totalTime;
let timerSet;

$("#timer-length").knob({
    'min': 1,
    'max': 60,
    'thickness': 0.06,
    'height': 60,
    'width': 60,
    'fgColor': '#fff',
    'bgColor': 'rgba(0, 0, 0, 0.1)'
});

$("#break-length").knob({
    'min': 1,
    'max': 60,
    'thickness': 0.06,
    'height': 60,
    'width': 60,
    'fgColor': '#fff',
    'bgColor': 'rgba(0, 0, 0, 0.1)'
});

$("#timerDial").knob({
    'min': 1,
    'max': tickTime,
    'thickness': 0.03,
    'fgColor': '#fff',
    'bgColor': 'rgba(0, 0, 0, 0.1)'
});

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

document.getElementById('timer-title').innerHTML = "WORK TIME"

