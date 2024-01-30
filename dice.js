var n1 = Math.floor(Math.random()* 6) +1 ;
var n2 = Math.floor(Math.random()* 6) +1 ;
document.querySelector(".img1").setAttribute("src", "./images/dice" + n1 + ".png");
document.querySelector(".img2").setAttribute("src", "./images/dice" + n2 + ".png");
if (n1 < n2 ) {
    document.querySelector("h1").textContent = "player 2 win"
}
else if (n1 > n2) {
    document.querySelector("h1").textContent = "player 1 win"
}
else if (n1 === n2) {
    document.querySelector("h1").textContent = "Draw"
}
else{
    
}