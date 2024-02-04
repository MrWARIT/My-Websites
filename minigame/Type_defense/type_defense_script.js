var fix_bug_time = 0;
var score = 0;
var speed = 4;

function updateText(){
    var text = $("#player_input").val();
    document.querySelector("#output").innerText = text;
    // $("#output").html(text);

    checkInput(text);
}

function checkInput(userInput){
    var word_list = document.querySelectorAll(".each_word");
    for(i = 0; i < word_list.length; i++){
        // current_problem = $("#problem_" + i).html();
        current_problem = word_list[i].innerText;
        var index = 0;
        var new_text = "";
        while(index < current_problem.length && index < userInput.length && userInput[index].toLowerCase() == current_problem[index].toLowerCase()){
            index++;
        }
        new_text += "<strong style='color: rgb(60, 205, 142);'>" + current_problem.slice(0, index) + "</strong>";
        new_text += current_problem.slice(index);
        word_list[i].innerHTML = new_text;
        // $("#problem_" + i).html(new_text);
        // if(index == current_problem.length){
        //     document.querySelectorAll(".each_problem")[i].remove();
            // document.querySelector("#player_input").value = "";
        //     document.querySelector("#output").innerText = $("#player_input").val();
            // updateText();
        // }
    }
}

function check_enter(userInput, event){
    if(event.key == "Tab" || event.key == "Enter"){
        event.preventDefault();
        checkAnswer(userInput.value);
    }
}

function checkAnswer(userInput) {
    var word_list = document.querySelectorAll(".each_word");
    var problem_list = document.querySelectorAll(".each_problem");
    var mean_list = document.querySelectorAll(".each_mean");
    var time_list = document.querySelectorAll(".each_time");
    for(i = 0; i < word_list.length; i++){
        if(userInput.toLowerCase() == word_list[i].innerText.toLowerCase()){
            message.text = word_list[i].innerText;
            speechSynthesis.speak(message);
            // message2.text = "test";
            // speechSynthesis.speak(message2);
            var pushback_word = [word_list[i].innerText, mean_list[i].innerText, time_list[i].innerText - (-1)];
            vocabulary_list.push(pushback_word);
            problem_list[i].remove();
            $("#score").html("Score: " + ++score);
            $("#final_score").html("Score: " + score);
            // console.log(vocabulary_list);
        }
    }
    document.querySelector("#player_input").value = "";
    updateText();
}

// setInterval(function(){
    var problem_list = document.querySelectorAll(".each_problem");
//     // problem_list = document.querySelectorAll(".each_problem")
//     // console.log(problem_list.length);
// }, 3300);

var my_interval_function = setInterval(function(){
    var word_list = document.querySelectorAll(".each_word");
    var mean_list = document.querySelectorAll(".each_mean");
    var time_list = document.querySelectorAll(".each_time");


    var problem_list = document.querySelectorAll(".each_problem");
    fix_bug_time += 1;
    // fix_bug_time = fix_bug_time.toFixed(2);
    // console.log(fix_bug_time);
    // console.log($(".each_problem").css("top"));
    // $(".each_problem").css("top", "calc(" + $(".each_problem").css("top") + " + 1%)")
    if(fix_bug_time % 3 == 0){
        var problem_list = document.querySelectorAll(".each_problem");
        for(i = 0; i < problem_list.length; i++){
            // Move the word by calculate % of the top (new_top)
            problem_list[i].style.top = "calc(" + problem_list[i].style.top + " + 5%)";
            var new_top = problem_list[i].style.top.toString().split("%")[0].split("(")[1] - (-4);
            problem_list[i].style.top = "calc(-90px + " + new_top + "%)";
            // console.log(problem_list[i].style.top);
            if(new_top > 60){
                // turn red if % of the top > 60
                problem_list[i].style.backgroundColor = "rgb(255, 53, 53)";
                if(new_top > 77){
                    // take damage if % of the top > 77
                    var pushback_word = [word_list[i].innerText, mean_list[i].innerText, time_list[i].innerText];
                    vocabulary_list.push(pushback_word);
                    problem_list[i].remove()
                    var all_heart = document.querySelectorAll(".full_heart");
                    if(all_heart.length > 0){
                        all_heart[0].setAttribute("src", "word_images/empty_heart.png");
                        all_heart[0].classList.remove("full_heart");
                        if(all_heart.length == 1){
                            document.querySelector("#gameover_window").style.display = "block";
                            clearInterval(my_interval_function);
                        }
                    }
                }
            }
        }
    }
    else if ((fix_bug_time-2) % 6 == 0){
        // Create new word
        var random_index = Math.floor(Math.random() * vocabulary_list.length);
        var new_word = vocabulary_list.splice(random_index, 1)
        var random_left = Math.floor(Math.random() * 80) + "%";
        if (problem_list.length < 10){
            if (new_word[0][2] <= 2){
                document.querySelector("#problem_list").innerHTML += '<li class="each_problem" style="top: calc(-120px + 0%); left: ' + random_left + '"><span class="each_word">' + new_word[0][0] + '</span> <br><span class="each_mean">' + new_word[0][1] + '</span> <span class="each_time">' + new_word[0][2] + '</span> <br><img style="width: 50px;" src="word_images/' + new_word[0][0].toLowerCase() + '.png"></li>';
            }
            else if (new_word[0][2] <= 3){
                document.querySelector("#problem_list").innerHTML += '<li class="each_problem" style="top: calc(-120px + 0%); left: ' + random_left + '"><span class="each_word blur_text">' + new_word[0][0] + '</span> <br><span class="each_mean">' + new_word[0][1] + '</span> <span class="each_time">' + new_word[0][2] + '</span> <br><img style="width: 50px;" src="word_images/' + new_word[0][0].toLowerCase() + '.png"></li>';
            }
            else if (new_word[0][2] <= 4){
                document.querySelector("#problem_list").innerHTML += '<li class="each_problem" style="top: calc(-120px + 0%); left: ' + random_left + '"><span class="each_word blur_text">' + new_word[0][0] + '</span> <br><span class="each_mean" style="display: none;">' + new_word[0][1] + '</span> <span class="each_time">' + new_word[0][2] + '</span> <img style="width: 50px;" src="word_images/' + new_word[0][0].toLowerCase() + '.png"></li>';
            }
            else {
                document.querySelector("#problem_list").innerHTML += '<li class="each_problem" style="top: calc(-120px + 0%); left: ' + random_left + '"><span class="each_word blur_text" style="display: none;">' + new_word[0][0] + '</span> <span class="each_mean blur_text" style="display:none;">' + new_word[0][1] + '</span> <span class="each_time">' + new_word[0][2] + '</span> <img style="width: 50px;" src="word_images/' + new_word[0][0].toLowerCase() + '.png"></li>';
            }
        }
    }
}, 500);

const message = new SpeechSynthesisUtterance();
const message2 = new SpeechSynthesisUtterance();
speechSynthesis.addEventListener("voiceschanged", onVoiceChanged);

function onVoiceChanged(){
    const voices = speechSynthesis.getVoices();
    voices.find(voice => voice.lang === 'en-US')
    const myVoice = voices.find(voice => voice.name === 'Microsoft Guy Online (Natural) - English (United States)');
    message.voice = myVoice;
    message.rate = 1.5;
    message2.voice = myVoice;
}

var vocabulary_list = [
    ["Dog", "หมา", 1],
    ["Cat", "แมว", 1],
    ["Pen", "ปากกา", 1],
    ["Bowl", "ชาม", 1],
    ["Soap", "สบู่", 1],
    ["Lion", "สิงโต", 1],
    ["Vase", "แจกัน", 1],
    ["Music", "เพลง", 1],
    ["Water", "น้ำ", 1],
    ["Tower", "ตึก", 1],
    ["Stairs", "บันได", 1],
    ["Comedy", "ตลก", 1],
    ["Hungry", "หิว", 1],
    ["Ruler", "ไม้บรรทัด", 1],
    ["Pencil", "ดินสอ", 1],
    ["Bottle", "ขวด", 1],
    ["Curtain", "ผ้าม่าน", 1],
    ["Carpet", "พรม", 1],
    ["Wrist", "ข้อมือ", 1],
    ["Closet", "ตู้เสื้อผ้า", 1],
    ["Broom", "ไม้กวาด", 1],
]