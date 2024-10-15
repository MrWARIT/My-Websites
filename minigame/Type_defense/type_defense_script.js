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
    // var mean_list = document.querySelectorAll(".each_mean");
    // var time_list = document.querySelectorAll(".each_time");
    for(i = 0; i < word_list.length; i++){
        if(userInput.toLowerCase() == word_list[i].innerText.toLowerCase()){
            message.text = word_list[i].innerText;

            //Speaking
            speechSynthesis.speak(message);

            // message2.text = "test";
            // speechSynthesis.speak(message2);
            // var pushback_word = [word_list[i].innerText, mean_list[i].innerText, time_list[i].innerText - (-1)];
            // vocabulary_list.push(pushback_word);

            // // remove the id of this correct answer from existedId
            let index = existedId.indexOf(Number(problem_list[i].id));
            if (index > -1) {
                existedId.splice(index, 1);
            }
            vocabulary_list.find(word => word.id === Number(problem_list[i].id)).Amount++;
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
    // // use for push back word but not neccessary now
    // var word_list = document.querySelectorAll(".each_word");
    // var mean_list = document.querySelectorAll(".each_mean");
    // var time_list = document.querySelectorAll(".each_time");

    var problem_list = document.querySelectorAll(".each_problem");
    fix_bug_time += 1;
    // fix_bug_time = fix_bug_time.toFixed(2);
    // $(".each_problem").css("top", "calc(" + $(".each_problem").css("top") + " + 1%)")
    if(fix_bug_time % 3 == 0){
        var problem_list = document.querySelectorAll(".each_problem");
        for(i = 0; i < problem_list.length; i++){
            // // Move the word by calculate % of the top (new_top)
            problem_list[i].style.top = "calc(" + problem_list[i].style.top + " + 5%)";
            var new_top = problem_list[i].style.top.toString().split("%")[0].split("(")[1] - (-4);
            problem_list[i].style.top = "calc(-90px + " + new_top + "%)";
            if(new_top > 60){
                // // turn red if % of the top > 60
                problem_list[i].style.backgroundColor = "rgb(255, 53, 53)";
                if(new_top > 77){
                    // // take damage if % of the top > 77

                    // push word คืนกรณีเอาออกมา แต่เปลี่ยนแล้ว
                    // var pushback_word = [word_list[i].innerText, mean_list[i].innerText, time_list[i].innerText];
                    // vocabulary_list.push(pushback_word);

                    // // remove the id of this failed word from existedId
                    let index = existedId.indexOf(Number(problem_list[i].id));
                    if (index > -1) {
                        existedId.splice(index, 1);
                    }

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
    else if ((fix_bug_time - 2) % 6 === 0) {
        // // Create new word
        do {
            var random_index = Math.floor(Math.random() * vocabulary_list.length);
            var new_word = vocabulary_list[random_index];
        } while (existedId.includes(new_word.id));
        existedId.push(new_word.id);
        var random_left = Math.floor(Math.random() * 80) + "%";

    
        // Determine the CSS classes and styles based on the word time
        var word_class = '';
        var mean_display = '';
        var word_display = '';
    
        if (new_word.Amount <= 2) {
            word_class = '';
            mean_display = 'block';
            word_display = 'block';
        } else if (new_word.Amount <= 3) {
            word_class = 'blur_text';
            mean_display = 'block';
            word_display = 'block';
        } else if (new_word.Amount <= 4) {
            word_class = 'blur_text';
            mean_display = 'none';
            word_display = 'block';
        } else {
            word_class = 'blur_text';
            mean_display = 'none';
            word_display = 'none';
        }
    
        // Determine the image or text to display
        var image_or_text = new_word.IsImage ? `<img style="width: 50px;" src="word_images/${new_word.English.toLowerCase()}.png">` : `<span>${new_word.Explanation}</span>`;

        if (problem_list.length < 10) {
            document.querySelector("#problem_list").innerHTML += `
                <li class="each_problem" style="top: calc(-120px + 0%); left: ${random_left}" id="${new_word.id}">
                    <span class="each_word ${word_class}" style="display: ${word_display};">${new_word.English}</span> 
                    <span>[${new_word.Type}]</span> 
                    <span class="each_mean" style="display: ${mean_display};">${new_word.Thai}</span>
                    <span class="each_time">${new_word.Amount}</span> 
                    ${image_or_text}
                </li>`;
        }
        console.log(new_word.English);
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

existedId = [];
var vocabulary_list = [
    // {
    //     English: "Dog", Thai: "หมา", Type: "Type", IsImage: true, 
    //     Explanation: "Explain", IsExplanation: false, 
    //     Sentence: "Sentence", IsSentence: false, 
    //     Amount: 1, id: 1, Credit: 'Credit'
    // },
    // {
    //     English: "Cat", Thai: "แมว", Type: "Type", IsImage: true, 
    //     Explanation: "Explain", IsExplanation: false, 
    //     Sentence: "Sentence", IsSentence: false, 
    //     Amount: 1, id: 2, Credit: 'Credit'
    // },
    // {
    //     English: "Pen", Thai: "ปากกา", Type: "Type", IsImage: true, 
    //     Explanation: "Explain", IsExplanation: false, 
    //     Sentence: "Sentence", IsSentence: false, 
    //     Amount: 1, id: 3, Credit: 'Credit'
    // },
    // {
    //     English: "Bowl", Thai: "ชาม", Type: "Type", IsImage: true, 
    //     Explanation: "Explain", IsExplanation: false, 
    //     Sentence: "Sentence", IsSentence: false, 
    //     Amount: 1, id: 4, Credit: 'Credit'
    // },
    // {
    //     English: "Soap", Thai: "สบู่", Type: "Type", IsImage: true, 
    //     Explanation: "Explain", IsExplanation: false, 
    //     Sentence: "Sentence", IsSentence: false, 
    //     Amount: 1, id: 5, Credit: 'Credit'
    // },
    // {
    //     English: "Lion", Thai: "สิงโต", Type: "Type", IsImage: true, 
    //     Explanation: "Explain", IsExplanation: false, 
    //     Sentence: "Sentence", IsSentence: false, 
    //     Amount: 1, id: 6, Credit: 'Credit'
    // },
    // {
    //     English: "Vase", Thai: "แจกัน", Type: "Type", IsImage: true, 
    //     Explanation: "Explain", IsExplanation: false, 
    //     Sentence: "Sentence", IsSentence: false, 
    //     Amount: 1, id: 7, Credit: 'Credit'
    // },
    // {
    //     English: "Music", Thai: "เพลง", Type: "Type", IsImage: true, 
    //     Explanation: "Explain", IsExplanation: false, 
    //     Sentence: "Sentence", IsSentence: false, 
    //     Amount: 1, id: 8, Credit: 'Credit'
    // },
    // {
    //     English: "Water", Thai: "น้ำ", Type: "Type", IsImage: true, 
    //     Explanation: "Explain", IsExplanation: false, 
    //     Sentence: "Sentence", IsSentence: false, 
    //     Amount: 1, id: 9, Credit: 'Credit'
    // },
    // {
    //     English: "Tower", Thai: "ตึก", Type: "Type", IsImage: true, 
    //     Explanation: "Explain", IsExplanation: false, 
    //     Sentence: "Sentence", IsSentence: false, 
    //     Amount: 1, id: 10, Credit: 'Credit'
    // },
    // {
    //     English: "Comedy", Thai: "ตลก", Type: "Type", IsImage: true, 
    //     Explanation: "Explain", IsExplanation: false, 
    //     Sentence: "Sentence", IsSentence: false, 
    //     Amount: 1, id: 11, Credit: 'Credit'
    // },
    // {
    //     English: "Hungry", Thai: "หิว", Type: "Type", IsImage: true, 
    //     Explanation: "Explain", IsExplanation: false, 
    //     Sentence: "Sentence", IsSentence: false, 
    //     Amount: 1, id: 12, Credit: 'Credit'
    // },
    // {
    //     English: "Ruler", Thai: "ไม้บรรทัด", Type: "Type", IsImage: true, 
    //     Explanation: "Explain", IsExplanation: false, 
    //     Sentence: "Sentence", IsSentence: false, 
    //     Amount: 1, id: 13, Credit: 'Credit'
    // },
    // {
    //     English: "Pencil", Thai: "ดินสอ", Type: "Type", IsImage: true, 
    //     Explanation: "Explain", IsExplanation: false, 
    //     Sentence: "Sentence", IsSentence: false, 
    //     Amount: 1, id: 14, Credit: 'Credit'
    // },
    // {
    //     English: "Bottle", Thai: "ขวด", Type: "Type", IsImage: true, 
    //     Explanation: "Explain", IsExplanation: false, 
    //     Sentence: "Sentence", IsSentence: false, 
    //     Amount: 1, id: 15, Credit: 'Credit'
    // },
    // {
    //     English: "Carpet", Thai: "พรม", Type: "Type", IsImage: true, 
    //     Explanation: "Explain", IsExplanation: false, 
    //     Sentence: "Sentence", IsSentence: false, 
    //     Amount: 1, id: 16, Credit: 'Credit'
    // },
    // {
    //     English: "Wrist", Thai: "ข้อมือ", Type: "Type", IsImage: true, 
    //     Explanation: "Explain", IsExplanation: false, 
    //     Sentence: "Sentence", IsSentence: false, 
    //     Amount: 1, id: 17, Credit: 'Credit'
    // },
    // {
    //     English: "Closet", Thai: "ตู้เสื้อผ้า", Type: "Type", IsImage: true, 
    //     Explanation: "Explain", IsExplanation: false, 
    //     Sentence: "Sentence", IsSentence: false, 
    //     Amount: 1, id: 18, Credit: 'Credit'
    // },
    // {
    //     English: "Broom", Thai: "ไม้กวาด", Type: "Type", IsImage: true, 
    //     Explanation: "Explain", IsExplanation: false, 
    //     Sentence: "Sentence", IsSentence: false, 
    //     Amount: 1, id: 19, Credit: 'Credit'
    // },
    // {
    //     English: "Earbuds", Thai: "หูฟัง", Type: "Type", IsImage: true, 
    //     Explanation: "Explain", IsExplanation: false, 
    //     Sentence: "Sentence", IsSentence: false, 
    //     Amount: 1, id: 20, Credit: 'Credit'
    // },
    // {
    //     English: "In-ear", Thai: "หูฟังอินเอียร์", Type: "Type", IsImage: true, 
    //     Explanation: "Explain", IsExplanation: false, 
    //     Sentence: "Sentence", IsSentence: false, 
    //     Amount: 1, id: 21, Credit: 'Credit'
    // },
    // {
    //     English: "Naive", Thai: "ไร้เดียงสา", Type: "Type", IsImage: true, 
    //     Explanation: "Explain", IsExplanation: false, 
    //     Sentence: "Sentence", IsSentence: false, 
    //     Amount: 1, id: 22, Credit: 'Credit'
    // },
    // {
    //     English: "Headphone", Thai: "หูฟังแบบครอบ", Type: "Type", IsImage: true, 
    //     Explanation: "Explain", IsExplanation: false, 
    //     Sentence: "Sentence", IsSentence: false, 
    //     Amount: 1, id: 23, Credit: "CCO"
    // },
    // {
    //     English: "Headset", Thai: "หูฟังแบบครอบ (มีก้านไมโครโฟน)", Type: "Type", IsImage: true, 
    //     Explanation: "Explain", IsExplanation: false, 
    //     Sentence: "Sentence", IsSentence: false, 
    //     Amount: 1, id: 24, Credit: '<a href="https://www.flaticon.com/free-icons/headset" title="headset icons">Headset icons created by Freepik - Flaticon</a>'
    // },
    {
        English: "Curtain", Thai: "ผ้าม่าน", Type: "noun", IsImage: true, 
        Explanation: "Explain", IsExplanation: false, 
        Sentence: "Sentence", IsSentence: false, 
        Amount: 1, id: 25, Credit: 'Credit'
    },
    // {
    //     English: "Stairs", Thai: "บันได", Type: "noun", IsImage: true, 
    //     Explanation: "Explain", IsExplanation: false, 
    //     Sentence: "Sentence", IsSentence: false, 
    //     Amount: 1, id: 26, Credit: 'Credit'
    // },
    // {
    //     English: "Stall", Thai: "แผงลอย", Type: "noun", IsImage: true, 
    //     Explanation: "Explain", IsExplanation: false, 
    //     Sentence: "Sentence", IsSentence: false, 
    //     Amount: 1, id: 27, Credit: '<a href="https://www.flaticon.com/free-stickers/stall" title="stall stickers">Stall stickers created by Prosymbols Premium - Flaticon</a>'
    // },
    // {
    //     English: "Shelf", Thai: "ชั้นวาง", Type: "Type", IsImage: true, 
    //     Explanation: "Explain", IsExplanation: false, 
    //     Sentence: "Sentence", IsSentence: false, 
    //     Amount: 1, id: 28, Credit: 'CCO'
    // },
    // {
    //     English: "Garbage", Thai: "ขยะ", Type: "Type", IsImage: true, 
    //     Explanation: "Explain", IsExplanation: false, 
    //     Sentence: "Sentence", IsSentence: false, 
    //     Amount: 1, id: 29, Credit: '<a href="https://www.flaticon.com/free-icons/waste" title="waste icons">Waste icons created by photo3idea_studio - Flaticon</a>'
    // },
    // {
    //     English: "Raincoat", Thai: "ชุดกันฝน", Type: "Type", IsImage: true, 
    //     Explanation: "Explain", IsExplanation: false, 
    //     Sentence: "Sentence", IsSentence: false, 
    //     Amount: 1, id: 30, Credit: '<a href="https://www.flaticon.com/free-icons/raincoat" title="raincoat icons">Raincoat icons created by Freepik - Flaticon</a>'
    // },
    // {
    //     English: "Sarcastic", Thai: "ประชด", Type: "Type", IsImage: true, 
    //     Explanation: "Explain", IsExplanation: false, 
    //     Sentence: "Sentence", IsSentence: false, 
    //     Amount: 1, id: 31, Credit: '<a href="https://www.flaticon.com/free-icons/sarcastic" title="sarcastic icons">Sarcastic icons created by justicon - Flaticon</a>'
    // },
    {
        English: "Relief", Thai: "การบรรเทา", Type: "Type", IsImage: true, 
        Explanation: "Explain", IsExplanation: false, 
        Sentence: "Sentence", IsSentence: false, 
        Amount: 1, id: 32, Credit: '<a href="https://www.flaticon.com/free-icons/stress" title="stress icons">Stress icons created by Flat Icons - Flaticon</a>'
    },
    // {
    //     English: "Stress", Thai: "ความเครียด", Type: "Type", IsImage: true, 
    //     Explanation: "Explain", IsExplanation: false, 
    //     Sentence: "Sentence", IsSentence: false, 
    //     Amount: 1, id: 33, Credit: '<a href="https://www.flaticon.com/free-icons/problem" title="problem icons">Problem icons created by Freepik - Flaticon</a>'
    // },
    {
        English: "Anxiety", Thai: "วิตกกังวล", Type: "Type", IsImage: true, 
        Explanation: "Explain", IsExplanation: false, 
        Sentence: "Sentence", IsSentence: false, 
        Amount: 1, id: 34, Credit: '<a href="https://www.flaticon.com/free-icons/anxiety" title="anxiety icons">Anxiety icons created by Freepik - Flaticon</a>'
    },
    {
        English: "Strain", Thai: "เคล็ด", Type: "Type", IsImage: true, 
        Explanation: "Explain", IsExplanation: false, 
        Sentence: "Sentence", IsSentence: false, 
        Amount: 1, id: 35, Credit: '<a href="https://www.flaticon.com/free-icons/strain" title="strain icons">Strain icons created by Leremy - Flaticon</a>'
    },
    // {
    //     English: "Towel", Thai: "ผ้าเช็ดตัว", Type: "Type", IsImage: true, 
    //     Explanation: "Explain", IsExplanation: false, 
    //     Sentence: "Sentence", IsSentence: false, 
    //     Amount: 1, id: 36, Credit: '<a href="https://www.flaticon.com/free-icons/towel" title="towel icons">Towel icons created by Freepik - Flaticon</a>'
    // },
    {
        English: "Otherwise", Thai: "ไม่อย่างนั้น", Type: "Conj.", IsImage: false,
        Explanation: "used after an order or suggestion to show what the result will be if you do not follow that order or suggestion", IsExplanation: true, 
        Sentence: "Sentence", IsSentence: false, 
        Amount: 1, id: 37, Credit: 'Credit'
    },
    {
        English: "Infatuated", Thai: "หลงใหล", Type: "Type", IsImage: false, 
        Explanation: "Explain", IsExplanation: false, 
        Sentence: "Sentence", IsSentence: false, 
        Amount: 1, id: 38, Credit: 'Credit'
    },
    {
        English: "Certain", Thai: "บาง.. (เช่น บางสิ่ง บางคน)", Type: "pronoun", IsImage: false, 
        Explanation: "some but not all", IsExplanation: true, 
        Sentence: "We have c_____ reasons for our decision", IsSentence: true, 
        Amount: 1, id: 39, Credit: 'Credit'
    },
    {
        English: "Certain", Thai: "แน่นอน", Type: "adjective", IsImage: false, 
        Explanation: "sure, exact", IsExplanation: true, 
        Sentence: "I'm not c_____ how much it will cost", IsSentence: true, 
        Amount: 1, id: 40, Credit: 'Credit'
    },
    // {
    //     English: "Vocal", Thai: "เสียงร้อง(ในเพลง)", Type: "noun", IsImage: false, 
    //     Explanation: "the singing in a piece of popular music", IsExplanation: true, 
    //     Sentence: "The v_____ are shared by two members of the band", IsSentence: true, 
    //     Amount: 1, id: 41, Credit: ''
    // },
    {
        English: "Insult", Thai: "ดูถูก", Type: "verb", IsImage: false, 
        Explanation: "to say or do something that is rude or offensive", IsExplanation: true, 
        Sentence: "Don't i____ me just because I can't dance", IsSentence: true, 
        Amount: 1, id: 42, Credit: 'Credit'
    },
    {
        English: "Offended", Thai: "รู้สึกไม่พอใจ", Type: "adjective", IsImage: false, 
        Explanation: "upset and angry, often because someone has been rude", IsExplanation: true, 
        Sentence: "He was o______ by what she said.", IsSentence: true, 
        Amount: 1, id: 43, Credit: 'Credit'
    },
    {
        English: "Offensive", Thai: "ที่ไม่น่าพอใจ", Type: "adjective", IsImage: false, 
        Explanation: "causing someone to feel deeply hurt, upset, or angry", IsExplanation: true, 
        Sentence: "He is an o_______ driver", IsSentence: true, 
        Amount: 1, id: 44, Credit: 'Credit'
    },
    {
        English: "Expertise", Thai: "ความเชี่ยวชาญ", Type: "noun", IsImage: false, 
        Explanation: "", IsExplanation: true, 
        Sentence: "", IsSentence: true, 
        Amount: 1, id: 45, Credit: 'Credit'
    },
    {
        English: "Occasionally", Thai: "เป็นครั้งคราว", Type: "adverb", IsImage: false, 
        Explanation: "sometimes but not often", IsExplanation: true, 
        Sentence: "I see him o________ in town", IsSentence: true, 
        Amount: 1, id: 46, Credit: 'Credit'
    },
    {
        English: "Envy", Thai: "อิจฉา", Type: "verb/noun", IsImage: false, 
        Explanation: "to wish that you had something that another person has", IsExplanation: true, 
        Sentence: "I see him o________ in town", IsSentence: true, 
        Amount: 1, id: 47, Credit: 'Credit'
    },
    {
        English: "Burden", Thai: "เป็นภาระ", Type: "verb/noun", IsImage: false, 
        Explanation: "to trouble someone with something difficult or unpleasant", IsExplanation: true, 
        Sentence: "I don't want to b_____ you with my problems", IsSentence: true, 
        Amount: 1, id: 48, Credit: 'Credit'
    },
    {
        English: "Regularly", Thai: "เป็นประจำ", Type: "adverb", IsImage: false, 
        Explanation: "often, or at the same time each day, week, month", IsExplanation: true, 
        Sentence: "We meet r_______ to discuss progress on the project", IsSentence: true, 
        Amount: 1, id: 49, Credit: 'Credit'
    },
    {
        English: "Convey", Thai: "ถ่ายทอด (ความคิด ความรู้สึก ไอเดีย)", Type: "verb", IsImage: false, 
        Explanation: "to express a thought, feeling, or idea.", IsExplanation: true, 
        Sentence: "His poetry ______(s) a great sense of religious devotion.", IsSentence: true, 
        Amount: 1, id: 50, Credit: 'Credit'
    },
    {
        English: "Poetry", Thai: "บทกวี", Type: "noun", IsImage: false, 
        Explanation: "to express a thought, feeling, or idea.", IsExplanation: true, 
        Sentence: "She started writing ______ at a young age.", IsSentence: true, 
        Amount: 1, id: 51, Credit: '<a href="https://www.flaticon.com/free-icons/literature" title="literature icons">Literature icons created by Icongeek26 - Flaticon</a>'
    },
    // {
    //     English: "", Thai: "", Type: "", IsImage: false, 
    //     Explanation: "", IsExplanation: true, 
    //     Sentence: "", IsSentence: true, 
    //     Amount: 1, id: 0, Credit: 'Credit'
    // },
]