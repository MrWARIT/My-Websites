var fix_bug_time = 0;

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
    for(i = 0; i < word_list.length; i++){
        if(userInput.toLowerCase() == word_list[i].innerText.toLowerCase()){
            var pushback_word = [word_list[i].innerText, mean_list[i].innerText];
            vocabulary_list.push(pushback_word);
            problem_list[i].remove();
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


    var problem_list = document.querySelectorAll(".each_problem");
    fix_bug_time += 1;
    // fix_bug_time = fix_bug_time.toFixed(2);
    // console.log(fix_bug_time);
    // console.log($(".each_problem").css("top"));
    // $(".each_problem").css("top", "calc(" + $(".each_problem").css("top") + " + 1%)")
    if(fix_bug_time % 3 == 0){
        // console.log("move");
        // var problem_list = document.querySelectorAll(".each_problem");
        for(i = 0; i < problem_list.length; i++){
            // problem_list[i].style.top = "calc(" + problem_list[i].style.top + " + 5%)";
            // console.log(problem_list[i].style.top.toString().split(" ")[2].split("%")[0]);
            var new_top = problem_list[i].style.top.toString().split(" ")[2].split("%")[0] - (-5);
            problem_list[i].style.top = "calc(-90px + " + new_top + "%)";
            // console.log(problem_list[i].style);
            if(new_top > 60){
                problem_list[i].style.backgroundColor = "rgb(255, 53, 53)";
                if(new_top > 77){
                    var pushback_word = [word_list[i].innerText, mean_list[i].innerText];
                    vocabulary_list.push(pushback_word);
                    problem_list[i].remove()
                    console.log("BAMM");
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
        // console.log("create");
        var random_index = Math.floor(Math.random() * vocabulary_list.length);
        var new_word = vocabulary_list.splice(random_index, 1)
        var random_left = Math.floor(Math.random() * 80) + "%";
        // console.log(random_left);
        if (problem_list.length < 10){
            document.querySelector("#problem_list").innerHTML += '<li class="each_problem" style="top: calc(-90px + 0%); left: ' + random_left + '"><span class="each_word">' + new_word[0][0] + '</span> <span class="each_mean">' + new_word[0][1] + '</span> <img style="width: 50px;" src="word_images/' + new_word[0][0].toLowerCase() + '.png"></li>';
        }
    }
}, 500);

var vocabulary_list = [
    ["Dog", "หมา"],
    ["Cat", "แมว"],
    ["Bowl", "ชาม"],
    ["Lion", "สิงโต"],
    ["Music", "เพลง"],
    ["Water", "น้ำ"],
    ["Tower", "ตึก"],
    ["Comedy", "ตลก"],
    ["Hungry", "หิว"],
    ["Soap", "สบู่"],
    ["Ruler", "ไม้บรรทัด"],
    ["Pen", "ปากกา"],
    ["Pencil", "ดินสอ"],
    // ["Wing", "ปีก"],
    // ["Ring", "แหวน"],
    // ["Tree", "ต้นไม้"],
    // ["Swim", "ว่ายน้ำ"],
    // ["Belt", "เข็มขัด"],
    // ["Camel", "อูฐ"],
    // ["Dance", "เต้น"],
    // ["Sound", "เสียง"],
    // ["Zebra", "ม้าลาย"],
    // ["Dragon", "มังกร"],
    // ["Listen", "ฟัง"],
]