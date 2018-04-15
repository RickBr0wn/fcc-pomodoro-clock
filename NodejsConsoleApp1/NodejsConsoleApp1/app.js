'use strict';

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

$("#timer").knob({
    'min': 1,
    'max': 60,
    'thickness': 0.06,
    'fgColor': '#fff',
    'bgColor': 'rgba(0, 0, 0, 0.1)'
});

function timeMinusClick(){
    let tMinus = $("#timer-length").val();
    tMinus--;
    $('#timer-length').val(tMinus).trigger('change');
}

function timePlusClick(){
    let tPlus = $("#timer-length").val();
    tPlus++;
    $('#timer-length').val(tPlus).trigger('change');
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
