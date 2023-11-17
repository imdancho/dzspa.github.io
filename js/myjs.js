let check = 1;

window.onscroll = function () { myFunction() };

function myFunction() {
    var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    var scrolled = (winScroll / height) * 100;
    document.getElementById("myBar").style.width = scrolled + "%";
}


document.getElementById("personal_inf").addEventListener("mouseover", function () {
    document.getElementById("personal_inf").style.color = "red";
});
document.getElementById("personal_inf").addEventListener("mouseout", function () {
    document.getElementById("personal_inf").style.color = "black";
});


document.getElementById("gridCheck").addEventListener("click", function () {
    document.getElementById("gridCheck_text").style.color = "green";
});


document.getElementById("id_search").addEventListener("keypress", mynewFunction);
function mynewFunction() {
    document.getElementById("id_search").style.backgroundColor = "green";
}


document.getElementById("submitt").addEventListener("click", function () {
    var tom1 = new Audio('sounds/crowd-cheering-143103.mp3');
    tom1.play();

});


