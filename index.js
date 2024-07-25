 var randomNumber1 =Math.floor(Math.random() * 6) + 1;

 var randomDiceImage1="dice" + randomNumber1 + ".png";

 var randomImageSource1 ="./images/" + randomDiceImage1;

 var image1= document.querySelectorAll("img")[0];
 image1.setAttribute("src", randomImageSource1);

 var randomNumber2 =Math.floor(Math.random() * 6) + 1;

 var randomDiceImage2="dice" + randomNumber2 + ".png";

 var randomImageSource2 ="./images/" + randomDiceImage2;

 var image2= document.querySelectorAll("img")[1];

 image2.setAttribute("src",randomImageSource2);

 //if player 1 wins
 if(randomNumber1 >randomNumber2 ){
    document.querySelector("h1").innerHTML="&#127986; Player 1 Wins !";
 }
//if player 2 wins 
 else if(randomNumber1 < randomNumber2 ){
        document.querySelector("h1").innerHTML="&#127986; Player 2 Wins !";

 }
 //draw
 else{
    document.querySelector("h1").innerHTML="Draw ! &#128161;";
 }