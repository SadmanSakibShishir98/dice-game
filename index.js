var randomNumber1=Math.floor(Math.random()*6)+1;
var randomNumber2=Math.floor(Math.random()*6)+1;

var randomDiceImage= "dice"+randomNumber1+".png";
var randomDiceImage2="dice"+randomNumber2+".png";

var randomImageSource="images/"+ randomDiceImage;
var randomImageSource2="images/"+randomDiceImage2;

var image1=document.querySelectorAll("img")[0];
var image2=document.querySelectorAll("img")[1];

image1.setAttribute("src", randomImageSource);
image2.setAttribute("src", randomImageSource2);

if(randomNumber1<randomNumber2){

    var setWinner= document.querySelector("h1").textContent="player 2 is the winner";

}
else if(randomNumber1>randomNumber2){
    var setWinner= document.querySelector("h1").textContent="player 1 is the winner";
}
else{
    var setWinner= document.querySelector("h1").textContent="drawn";
}