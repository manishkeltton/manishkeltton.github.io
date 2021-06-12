var widths = ['10%', '20%', '30%', '40%', '50%', '60%', '70%', '80%'];
var index = 0;
function loadEvent(){
    const progress = document.querySelector('body .bar')
    index++;
    progress.style.width = widths[index];
    progress.style.backgroundColor = "red";
}

var clearInter = setInterval(loadEvent, 2000);
window.onload = function (e){
    loadEvent();
}