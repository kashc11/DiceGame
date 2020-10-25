var randomNumber1=Math.floor(Math.random()*6);
var randomNumber2=Math.floor(Math.random()*6);

var pics = ["images/dice1.png" , "images/dice2.png" , "images/dice3.png" , "images/dice4.png" , "images/dice5.png" , "images/dice6.png"];

document.querySelector(".img1").setAttribute("src", pics[randomNumber1]);
document.querySelector(".img2").setAttribute("src", pics[randomNumber2]);

if(randomNumber1>randomNumber2)
document.querySelector("h1").innerHTML="<h1>🚩 Player 1 wins </h1>";

else if(randomNumber1==randomNumber2)
document.querySelector("h1").innerHTML="Draw!";

else
document.querySelector("h1").innerHTML="<h1> Player 2 wins 🚩 </h1>";
