var aboutme = document.getElementById("about_me");
var info = document.getElementById("info");
var contact = document.getElementById("contact");
var photo = document.getElementById("my_photo");
var sa = document.getElementById("stay_alive");
var bf = document.getElementById("be_fast");

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
photo.addEventListener('mouseover',function(){
    photo.style.backgroundColor = '#eb196a';
});
photo.addEventListener('mouseleave', function(){
    photo.style.backgroundColor = '#8a007e';
});
sa.addEventListener('mouseover',function(){
    sa.style.backgroundColor = '#eb196a';
});
sa.addEventListener('mouseleave', function(){
    sa.style.backgroundColor = '#8a007e';
});
bf.addEventListener('mouseover',function(){
    bf.style.backgroundColor = '#eb196a';
});
bf.addEventListener('mouseleave', function(){
    bf.style.backgroundColor = '#8a007e';
});
