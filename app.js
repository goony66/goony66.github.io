var hamburger = document.getElementById('hamburger');
var canvas = document.getElementById('canvas');
var header = document.getElementById('header');

hamburger.addEventListener('click' , function(){
    canvas.classList.toggle('open');
    header.classList.toggle('headeropen');
    hamburger.classList.toggle('active')
});

