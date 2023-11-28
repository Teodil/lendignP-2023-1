console.log('Hello');

let nav = document.getElementById("navigation");
let closeNavBTN = document.getElementById("close-icon-nav");
let burger = document.getElementById("burger");

function toogleNav(){
    nav.classList.toggle('open');
}
function closeNav(){
    nav.classList.remove('open');
}

burger.addEventListener('click',toogleNav);
closeNavBTN.addEventListener('click',closeNav);