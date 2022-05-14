let humburger = document.querySelector('.nav_cont');
let Mymenu = document.querySelector('.menu');


Mymenu.style.display = 'none';
humburger.onclick = () =>  Mymenu.style.display == 'none' ? Mymenu.style.display = 'block' : Mymenu.style.display = 'none';



$('.logo_cont').fadeOut().fadeIn(2000);

let menumap = document.querySelector('.thoGiss');
let menuLoc = document.querySelector('.locMap');


menumap.style.display = 'none';
menuLoc.onclick = () =>  menumap.style.display == 'none' ? menumap.style.display = 'block' : menumap.style.display = 'none';

let emailJs = document.querySelector("#getMail");


