'use strict';

// Global Variables
let state = true;
let counter = 0;
let totalTime = $("#timer-length").val()*60;
let tickTime = totalTime;
let timerSet;
let originalTime;

$("#timer-length").knob({
    'min': 1,
    'max': 60,
    'thickness': 0.06,
    'height': 60,
    'width': 60,
    'readOnly': true,
    'fgColor': '#fff',
    'bgColor': 'rgba(0, 0, 0, 0.1)'
});

$("#break-length").knob({
    'min': 1,
    'max': 60,
    'thickness': 0.06,
    'height': 60,
    'width': 60,
    'readOnly': true,
    'fgColor': '#fff',
    'bgColor': 'rgba(0, 0, 0, 0.1)'
});

$("#timerDial").knob({
    'min': 1,
    'max': tickTime,
    'thickness': 0.03,
    'readOnly': true,
    'fgColor': '#fff',
    'bgColor': 'rgba(0, 0, 0, 0.1)'
});

document.getElementById('timer-title').innerHTML = "WORK TIME"

