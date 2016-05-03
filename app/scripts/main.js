var dice = document.getElementsByClassName("dice");
var songs = [
    '6ygVGWsgqv8xKlgb9coEXQ',
    '64OcVQq3FBoGm2twUd3044',
    '099TPpEaCSjEwysWZeTZv1',
    '50KjvVYMfD3dik1Rkegkjz',
    '3uDSPcjiNzcYaBhES4xrZS',
    '5grmNnhOTNSbcq3R1heVT1'
];

document.getElementById("shuffleButton").addEventListener("click", shuffle);

function createMusicObject(sourceURL){
    return '<audio controls><source src="' + sourceURL + '" type="audio/mp3"></audio>'
}

function getTrack(trackID) {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (xhttp.readyState == 4 && xhttp.status == 200) {
            var trackURL = JSON.parse(xhttp.responseText).preview_url;
            var audioObj = document.getElementById("audioControl");
            var audioSrc = document.getElementById("audioSource");
            audioSrc.src = trackURL;
            audioObj.load();
            audioObj.play();
            //createMusicObject(trackURL);
            console.log(trackURL);
        }
    };
    xhttp.open("GET", "https://api.spotify.com/v1/tracks/" + trackID, true);
    xhttp.send();
}

function shuffle(){
    resetDice();
    var randSide = Math.ceil(Math.random() * 6);
    var trackID = songs[randSide - 1];
    getTrack(trackID);
    for(var i = 1; i <= dice.length; i++){
        if(i != randSide){
            var currentSide = document.getElementById("side" + (i));
            currentSide.classList.add("faded");

        } else{
            dice[i - 1].classList.add("active");

        }
    }
}

function resetDice(){
    for(var i = 0; i < dice.length; i++){
        dice[i].className = "dice";
    }
}