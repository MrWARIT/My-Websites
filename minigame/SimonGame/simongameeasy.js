var answers = [];
var count = 0;
var canClick = false;
var level;
activateClickInput();

document.addEventListener("keydown", checkKeyboard);

function checkKeyboard(event){
    if(event.key === "a" || event.key === "A" || event.key === "ฟ" || event.key === "ฤ" || answers.length != 0){
        startGame();
    }
}

function startGame(){
    document.querySelector(".simon-button").innerHTML = "Restart";
    document.querySelectorAll(".simon-button")[0].style.visibility = "hidden";
    document.querySelectorAll(".simon-button")[1].style.visibility = "hidden";
    // document.querySelector(".detail").style.visibility = "hidden";
    document.removeEventListener("keydown", startGame);
    answers = [];
    level = 1;
    count = 0;
    addAnswer();
}

function activateClickInput(){
    for(var i = 0; i < document.querySelectorAll(".simon-game-button").length; i++){
        document.querySelectorAll(".simon-game-button")[i].addEventListener("click", function(){
            if(canClick){
                buttonEffect(parseInt(this.textContent));
                if(this.textContent == answers[count]){
                    count++;
                }
                else{
                    gameOver();
                }
                if(count >= answers.length){
                    canClick = false;
                    count = 0;
                    addAnswer();
                }
            }
        });
    }
}

function addAnswer(){
    var randomNew = Math.floor(Math.random() * 6) + 1;
    answers.push(randomNew);
    document.querySelector(".simon-game-title").innerHTML = "Level " + level++;

    setTimeout(() => {
        buttonEffect(answers[answers.length-1]);
        canClick = true;
    }, 1000);
}

function buttonEffect(whichButton){
    document.querySelector("." + String.fromCharCode(96 + whichButton)).classList.add("pressed");

    setTimeout(() => {
        document.querySelector("." + String.fromCharCode(96 + whichButton)).classList.remove("pressed");
    }, 100);
}

function gameOver(){
    document.querySelector(".simon-game-title").innerHTML = "Gameover at level " + --level;
    // document.querySelector(".detail").style.visibility = "visible";
    canClick = false;
    document.addEventListener("keydown", startGame);
    document.querySelectorAll(".simon-button")[0].style.visibility = "visible";
    document.querySelectorAll(".simon-button")[1].style.visibility = "visible";
}

var toggle = document.querySelector(".simon-switch");
toggle.onclick = function(){
    document.querySelector("body").classList.toggle("dark-mode");
    document.querySelector(".simon-game-title").classList.toggle("dark-mode");
    // document.querySelector(".detail").classList.toggle("dark-mode");
    document.querySelectorAll(".simon-button")[0].classList.toggle("btn-outline-dark");
    document.querySelectorAll(".simon-button")[1].classList.toggle("btn-outline-dark");
}

var start_button = document.querySelectorAll(".simon-button")[0];
start_button.onclick = function(){
    startGame();
}