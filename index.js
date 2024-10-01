var aboutme = document.getElementById("about_me");
var info = document.getElementById("info");
var contact = document.getElementById("contact");

window.addEventListener('resize',function(){
    var w = window.innerWidth;
    var h = window.innerHeight;    
    
    if (w<h){           //Potrait
        aboutme.style.flexDirection = 'column';
        info.style.fontSize = 'large';
        contact.style.fontSize = 'large';
    }
    else{
        aboutme.style.flexDirection = 'row';
        info.style.fontSize = 'medium';
        contact.style.fontSize = 'medium';
    }
});