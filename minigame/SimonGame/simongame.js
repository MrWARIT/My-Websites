document.addEventListener("keydown", startGame);

function startGame(event){
    if(event.key === "a" ||event.key === "A" ||event.key === "ฟ" ||event.key === "ฤ"){
        document.removeEventListener("keydown", startGame);
        var answers = [];
        answers.push(Math.floor(Math.random() * 4) + 1);
        answers.push(Math.floor(Math.random() * 4) + 1);
        answers.push(Math.floor(Math.random() * 4) + 1);
        answers.push(Math.floor(Math.random() * 4) + 1);
        console.log(answers);
        activateClickInput(answers);
    }
}

function activateClickInput(answers){
    var count = 0;
    for(var i = 0; i < document.querySelectorAll(".simon-game-button").length; i++){
        document.querySelectorAll(".simon-game-button")[i].addEventListener("click", function(){
            if(this.textContent == answers[count]){
                console.log(count);
                count++;
                if(count >= answers.length){
                    console.log("Win");
                }
            }
        });
    }
}

// function deactivateClickInput(){
//     for(var i = 0; i < document.querySelectorAll(".simon-game-button").length; i++){
//         document.querySelectorAll(".simon-game-button")[i].removeEventListener("click", function(){
//             if(this.textContent == answers[count]){
//                 console.log(count);
//                 count++;
//             }
//         });
//     }
// }