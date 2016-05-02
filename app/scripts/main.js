console.log("hej");

document.getElementById("shuffleButton").addEventListener("click", shuffle);


function shuffle(){
    randSide = Math.ceil(Math.random() * 6);
    console.log(randSide);
    dice = document.getElementsByClassName("dice");
    for(var i = 1; i <= dice.length; i++){
        if(i != randSide){
            var currentSide = document.getElementById("side" + (i));
            if( ! currentSide.classList.contains("faded")){
                currentSide.classList.add("faded");
            }

        } else{
            if( ! dice[i].classList.contains("active")){
                dice[i].classList.add("active");

            }
        }

        console.log("ifew");
    }
}

