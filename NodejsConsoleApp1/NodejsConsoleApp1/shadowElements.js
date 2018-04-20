'use strict'

function shadowElements(bool){
    if(bool){
        // shadow elements
        $('#timer-length').trigger('configure',
        {
            'fgColor': '#a06767',
            'inputColor': '#a06767'
        });
        $('#break-length').trigger('configure',
        {
            'fgColor': '#a06767',
            'inputColor': '#a06767'
        });
        document.getElementById('dial-wrapper').style.color = '#a06767';
        document.getElementById('timePlus').style.color = '#a06767';
        document.getElementById('timeMinus').style.color = '#a06767';
        document.getElementById('breakPlus').style.color = '#a06767';
        document.getElementById('breakMinus').style.color = '#a06767';
        document.getElementById('resetButton').style.color = '#a06767';
        document.getElementById('resetButton').style.borderColor = '#a06767';
        document.getElementById('resetButton').disabled = true;
        document.getElementById('timePlus').disabled = true;   
        document.getElementById('timeMinus').disabled = true;
        document.getElementById('breakPlus').disabled = true;
        document.getElementById('breakMinus').disabled = true;     
    }else{
        // unshadow elements
        $('#timer-length').trigger('configure',
        {
            'fgColor': '#fff',
            'inputColor': '#fff'
        });
        $('#break-length').trigger('configure',
        {
            'fgColor': '#fff',
            'inputColor': '#fff'
        });
        document.getElementById('dial-wrapper').style.color = '#fff';
        document.getElementById('timePlus').style.color = '#fff';
        document.getElementById('timeMinus').style.color = '#fff';
        document.getElementById('breakPlus').style.color = '#fff';
        document.getElementById('breakMinus').style.color = '#fff';
        document.getElementById('resetButton').style.color = '#fff';
        document.getElementById('resetButton').style.borderColor = '#fff';
        document.getElementById('resetButton').disabled = false; 
        document.getElementById('timePlus').disabled = false;   
        document.getElementById('timeMinus').disabled = false;
        document.getElementById('breakPlus').disabled = false;
        document.getElementById('breakMinus').disabled = false; 
    }
}