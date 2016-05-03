console.log("hej");

var dice = document.getElementsByClassName("dice");
document.getElementById("shuffleButton").addEventListener("click", shuffle);


function shuffle(){
    resetDice();
    var randSide = Math.ceil(Math.random() * 6);
    console.log(randSide);
    for(var i = 1; i <= dice.length; i++){
        if(i != randSide){
            var currentSide = document.getElementById("side" + (i));
            currentSide.classList.add("faded");

        } else{
            dice[i - 1].classList.add("active");
        }

        console.log("ifew");
    }
}

function resetDice(){
    for(var i = 0; i < dice.length; i++){
        console.log(i);
        dice[i].className = "dice";
    }
}