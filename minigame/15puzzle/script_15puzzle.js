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

    // restart button click function
    $(".restart_button").click(function(){
        moveTime = 0;
        backTime = 0;
        frontTime = 0;
        gameStarted = false;
        clearInterval(myTimeCount);
        $(".timer").html("00:00");
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
        $(".timer").html(front_number + ":" + back_number);
        backTime += 1;
        if(backTime >= 60){
            backTime = 0;
            frontTime += 1;
        }
    }

    function reload(){
        var remaining = all_number.length;
        while(remaining){
            let random_number = Math.floor(Math.random() * remaining--);
            let last = all_number[remaining];
            let temp = last;
            all_number[remaining] = all_number[random_number];
            all_number[random_number] = temp;
        }

        let empty_position = $(".empty").attr("class").split(" ").find(checkStart);
        switchPosition($(".position_44"), $(".empty"), "position_44", empty_position);
    }
    
    function refresh(isFirstload){
        if(isFirstload == "Firstload"){
            reload();
        }
        for(i = 1; i <= 4; i++){
            for(j = 1; j <= 4; j++){
                if(isFirstload == "Firstload" && (i != 4 || j != 4)){
                    $(".position_" + i + j).html(all_number[(i-1) * 4 + j - 1]);
                }
                $(".position_" + i + j).css("left", "calc(50% - 330px + (" + j + " * 110px))");
                $(".position_" + i + j).css("top", "calc(50% - 330px + (" + i + " * 110px))");
                if($(window).width() < 450){
                    $(".number").css("height", $(".number").width());
                    $(".position_" + i + j).css("left", "calc(0.5% + 25% * " + (j-1) + ")");
                    $(".position_" + i + j).css("top", "calc(50% - " + (3*$(".position_" + i + j).width()) + "px + (" + i + " * " + $(".position_" + i + j).width() + "px) + 1% *" + i + ")");
                }
            }
        }
        $("#moveCount").html(moveTime + " move");
    }

    function switchPosition(element_1, element_2, position_1, position_2){
        element_1.removeClass(position_1);
        element_1.addClass(position_2);
        element_2.removeClass(position_2);
        element_2.addClass(position_1);
    }

    $(".number").click(function(){
        if(gameStarted){
            let this_position = $(this).attr("class").split(" ").find(checkStart);
            let empty_position = $(".empty").attr("class").split(" ").find(checkStart);
    
            if(Math.abs(this_position[9] - empty_position[9]) <= 1 && Math.abs(this_position[10] - empty_position[10]) <= 1 && Math.abs(this_position[9] - empty_position[9]) != Math.abs(this_position[10] - empty_position[10])){
                switchPosition($(this), $(".empty"), this_position, empty_position);
                moveTime++;
                refresh();
            }
        }
    });

    function checkStart(classname){
        return classname.startsWith("position_");
    }
});