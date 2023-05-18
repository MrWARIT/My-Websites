$(document).ready(function(){

    // Number array for shuffle and give values to divs
    var all_number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

    // my time
    var backTime = 1, frontTime = 0;
    var timeRunning = false;
    var myTimeCount;
    // move count
    var moveTime = 0;

    // game state
    var gameStarted = false;
    // refresh the page, refresh the position
    refresh("Firstload");

    $(window).resize(function(){
        refresh();
    });

    // reload button click function
    $(".reload_button").click(function(){
        $(".start_button").removeClass("disabled");
        moveTime = 0;
        backTime = 0;
        frontTime = 0;
        gameStarted = false;
        clearInterval(myTimeCount);
        $("#timer").html("00:00");
        refresh("Firstload");
    });

    // start button function - timer function
    $(".start_button").click(function(){
        if(!gameStarted){
            myTimeCount = setInterval(myTimer, 1000);
            gameStarted = true;
        }
    });

    function myTimer(){
        let back_number = (backTime < 10)? '0' + backTime : backTime;
        let front_number = (frontTime < 10)? '0' + frontTime : frontTime;
        $("#timer").html(front_number + ":" + back_number);
        backTime += 1;
        if(backTime >= 60){
            backTime = 0;
            frontTime += 1;
        }
    }

    // reload the number
    function reload(){
        var remaining;
        var total_inversion = 1;
        while(total_inversion % 2 != 0) {
            total_inversion = 0;
            remaining = all_number.length;

            // random number by Fisher Yates Shuffle
            while(remaining){
                let random_number = Math.floor(Math.random() * remaining--);
                let last = all_number[remaining];
                let temp = last;
                all_number[remaining] = all_number[random_number];
                all_number[random_number] = temp;
            }
            // count total inversion to check if this puzzle can be solved or not
            for(i = 0; i < all_number.length; i++){
                for(j = i+1; j < all_number.length; j++){
                    if(all_number[j] < all_number[i]){
                        total_inversion++;
                    }
                }
            }
        }

        switchPosition(".position_44", ".empty", "position_44", getPosition(".empty"));
    }
    
    // refresh the position of divs
    function refresh(isFirstload){
        if(isFirstload == "Firstload"){
            reload();
        }
        
        var correct = 0;

        for(i = 1; i <= 4; i++){
            for(j = 1; j <= 4; j++){
                var current_div = $(".position_" + i + j);

                // give each div a random number if it's a first load or restart
                if(isFirstload == "Firstload" && (i != 4 || j != 4)){
                    current_div.html(all_number[(i-1) * 4 + j - 1]);
                }

                // count the correct position and check is the player win yet
                if(current_div.html() == ((i-1)*4 + j)){
                    correct++;
                    current_div.css("background-color", "rgb(101, 246, 101)");
                }
                else if(!current_div.hasClass("empty")) {
                    current_div.css("background-color", "white");
                }

                // reposition all div, depends on window width
                if($(window).width() > 450){
                    current_div.css("left", "calc(50% - 330px + (" + j + " * 110px))");
                    $(".number").css("height", "100px");
                    current_div.css("top", "calc(50% - 330px + (" + i + " * 110px))");
                }
                else{
                    current_div.css("left", "calc(4.5% + (23% * (" + j + " - 1)))");
                    $(".number").css("height", $(".number").css("width"));
                    var now_height = $(".number").css("width");
                    current_div.css("top", "calc(50% - (3 * (" + now_height + " + 5px)) + (" + i + " * (" + (now_height) + " + 5px)))");
                }
            }
        }

        $("#moveCount").html(moveTime + " move");

        if(correct >= 15){
            gameStarted = false;
            clearInterval(myTimeCount);
            setTimeout(showGameWin, 300);
            $(".start_button").addClass("disabled");
        }

    }

    // switch position
    function switchPosition(element_name_1, element_name_2, position_1, position_2){
        let element_1 = $(element_name_1);
        let element_2 = $(element_name_2);
        element_1.removeClass(position_1);
        element_1.addClass(position_2);
        element_2.removeClass(position_2);
        element_2.addClass(position_1);
    }

    // when click each divs, check if it's adjacent to the empty div, if yes, switch the position
    $(".number").click(function(){
        if(gameStarted){
            if(Math.abs(getPosition(this)[9] - getPosition(".empty")[9]) <= 1 && Math.abs(getPosition(this)[10] - getPosition(".empty")[10]) <= 1 && Math.abs(getPosition(this)[9] - getPosition(".empty")[9]) != Math.abs(getPosition(this)[10] - getPosition(".empty")[10])){
                switchPosition(this, ".empty", getPosition(this), getPosition(".empty"));
                moveTime++;
                refresh();
            }
        }
    });

    // check attributes member which starts with "position_"
    function checkStart(classname){
        return classname.startsWith("position_");
    }

    // get the position
    function getPosition(element_name){
        return $(element_name).attr("class").split(" ").find(checkStart);
    }

    function showGameWin() {
        $("#final_moveCount").html($("#moveCount").html());
        $("#final_timer").html($("#timer").html());
        $(".game_win").css("display", "block");
        setTimeout(function() {$("#win_window").css("width", "300px")}, 10);
        setTimeout(function() {$("#win_content").css("display", "block")}, 200);
    }

    $(".ok_button").click(function(){
        $(".game_win").css("display", "none");
        $("#win_window").css("width", "10px");
        $("#win_content").css("display", "none");
    });
});