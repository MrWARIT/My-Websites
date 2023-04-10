var answers = [];
var count = 0;
var canClick = false;
var level;
activateClickInput();

document.addEventListener("keydown", startGame);

function startGame(event){
    if(event.key === "a" || event.key === "A" || event.key === "ฟ" || event.key === "ฤ" || answers.length != 0){
        document.querySelector(".detail").style.visibility = "hidden";
        document.removeEventListener("keydown", startGame);
        answers = [];
        level = 1;
        count = 0;
        addAnswer();
    }
}

function activateClickInput(){
    for(var i = 0; i < document.querySelectorAll(".simon-game-button").length; i++){
        document.querySelectorAll(".simon-game-button")[i].addEventListener("click", function(){
            if(canClick){
                buttonEffect(parseInt(this.textContent));
                if(this.textContent == answers[count]){
                    console.log(true);
                    count++;
                }
                else{
                    console.log(false);
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
        console.log(answers);
        buttonEffect(answers[answers.length-1]);
        setTimeout(() => {
            canClick = true;
        }, 1000);
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
    document.querySelector(".detail").style.visibility = "visible";
    canClick = false;
    document.addEventListener("keydown", startGame);
}

function test(){
    console.log("Test");
}

var toggle = document.querySelector(".simon-switch");
toggle.onclick = function(){
    document.querySelector("body").classList.toggle("dark-mode");
    document.querySelector(".simon-game-title").classList.toggle("dark-mode");
}