var answer = [];
var userInput;
var activated;

document.addEventListener("keydown", gameStart);

function gameStart(event){
    if(event.key === "A" || event.key === "a" || event.key === "ฟ" || event.key === "ฤ"){
        
        //deactivate start button
        document.removeEventListener("keydown", gameStart);

        //clear old answer
        while(answer.length > 0 ){
            answer.pop();
        }

        // setTimeout(() => {
        //     var newRandom = Math.floor(Math.random() * 4) + 65;
        //     addAnswer(newRandom);
        // }, 1000);

        while(true){
            addAnswer();
            showAnswer();
            while(activated){
                
            }
        }

        /*
        while(continue-game){
            //clearPlayer();
            addAnswer();
            showAnswer(); // every 1 seconds
                after showAnswer -> Activate event listener to buttons
            while(activating){
                var count = 0;
                var userInput;
                userInput();
                button-animation();
                button-sound();
                if(wrong(userInput, answer[count])){
                    background-alert();
                    gameover();
                        deactivate();
                        add.eventListener-to-StartAgain();
                        break(); //???
                }
                count++;
                if(count > length){
                    background-NextLevel();
                    deactivate();
                }
            }
        }
        */
    }
}

function addAnswer(){
    var randomNew = Math.floor(Math.random() * 4) + 1;
    answer.push(randomNew);
    console.log(answer);
}

function showAnswer(){
    for(var i = 0; i < answer.length; i++){
        setTimeout(() => {
            console.log(answer);
        }, 1000);
    }

    for(var i = 0; i < document.querySelectorAll(".simon-game-button").length; i++){
        document.querySelectorAll(".simon-game-button")[i].addEventListener("keydown", function(event){
            alert(event.key);
            activated = true;
        });
    }
}

for(var i = 0; i < document.querySelectorAll(".simon-game-button").length; i++){
    document.querySelectorAll(".simon-game-button")[i].addEventListener("click", function(){
        this.style.backgroundColor = "red";
        var wtf = this.textContent;

        setTimeout(function(){
            buttonAnimation(wtf);
        }, 100);
    })
}

function buttonAnimation(whichButton){
    console.log(whichButton);
    switch(whichButton){
        case "A":
            document.querySelector(".a").style.backgroundColor = "white";
            break;
        case "B":
            document.querySelector(".b").style.backgroundColor = "white";
            break;
            
        case "C":
            document.querySelector(".c").style.backgroundColor = "white";
            break;
            
        case "D":
            document.querySelector(".d").style.backgroundColor = "white";
            break;
        default:
            console.log("Error");
            break;
    }
}

/*

กด A เพื่อเริ่ม
    หน่วงเวลา 1 วินาที แล้วเริ่มแสดงปุ่ม
    สุ่มเลข 1-4 ให้แสดงปุ่มนั้น จัดเก็บเข้า list หน่วงเวลา แสดงปุ่มถัดไป หน่วงเวลา จนหมด
    เพิ่ม listener การกดปุ่ม ในแต่ละครั้งเช็คว่าตรงกับ list ไหม ถ้าตรงกดต่อได้ ถ้าไม่ตรง -> หยุด + เกมโอเวอร์

*/