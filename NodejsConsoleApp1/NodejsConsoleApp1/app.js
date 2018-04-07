'use strict';

let time = 59;

setInterval(function () {
    document.getElementById('timer').innerHTML = time;
    time--;
}, 1000);



