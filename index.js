function randgen(){
  return (Math.floor(Math.random() * 6))+1;
}
dice1 = randgen();
dice2 = randgen();

var imgs = document.querySelectorAll("img");

var imgsrc1 = "images/dice"+ dice1 +".png";
imgs[0].setAttribute("src", imgsrc1);
var imgsrc2 = "images/dice"+ dice2 +".png";
imgs[1].setAttribute("src", imgsrc2);
if (dice1>dice2){
  document.querySelector("h1").textContent = "🚩Player 1 Wins!"
}
else if (dice2>dice1){
    document.querySelector("h1").textContent = "Player 2 Wins!🚩"
}
else{
      document.querySelector("h1").textContent = "Draw!"
}
