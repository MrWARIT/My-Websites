var live = false;

for(i = 0; i < document.querySelectorAll(".p-sidebar").length; i++){
    document.querySelectorAll(".p-sidebar")[i].addEventListener("click", function(){
        try {
            document.querySelector(".current-active").classList.remove("current-active");
            console.log("Continue");
        } catch (error) {
            console.log("Start");
        }
        this.classList.add("current-active");
        let selectedCode = "Javascript_" + this.title;
        document.querySelector("#html-code").value = eval(selectedCode);
        runMyFunction();
    });
}

for(i = 0; i < document.querySelectorAll(".p-sidebar").length; i++){
    document.querySelectorAll(".p-sidebar")[i].addEventListener("click", hideSidebar);
}

// function selectCode(selectedCode){
//     console.log(selectCode.textContent);
//     try {
//         document.querySelector(".current-active").classList.remove(".current-active");
//     } catch (error) {
//         console.log("Start");
//     }
// }

// function runMyFunction(){
//     let formInput = document.getElementById("html-code");
//     // console.log(formInput.value);
//     outputZone(formInput.value);
// }

function compile(test){
    let html = document.getElementById("html-code").value;
    let css = document.getElementById("css-code").value;
    let javascript = document.getElementById("javascript-code").value;

    document.getElementById("code-output").remove();
    document.getElementById("iframe-container").innerHTML = `<iframe id="code-output"></iframe>`;
    let code_output = document.getElementById("code-output").contentWindow.document;
    code_output.open();
    code_output.writeln(html + "<style>" + css + "</style>" + "<script>" + javascript + "</script>");
    code_output.close();
}

            // // if(test == "dev") prompt("This is the array of the code", "[\`" + html + "\`, \`" + css + "\`, \`" + javascript + "\`];");

    // document.body.onkeyup = function(){
    //     code_output.open();
    //     code_output.writeln(html + "<style>" + css + "</style>" + "<script>" + javascript + "</script>");
    //     code_output.close();
    // }
// }

function liveCompile(element){
    document.querySelector("#run-button").classList.toggle("disabled");
    element.classList.toggle("active");
    if(live == false){
        document.body.addEventListener("keyup", compile);
        live = true;
    }
    else{
        document.body.removeEventListener("keyup", compile)
        live = false;
    }
}

function outputZone(inputStatement){
    console.clear();
    inputStatement = inputStatement.replace(/myconsole/g, "console.log");
    eval(inputStatement);
    inputStatement = inputStatement.replace(/console.log/g, "myconsole");
    eval(inputStatement);
}

function myconsole(inputString){
    // console.log(inputString);
    let text = document.getElementById("output").innerHTML;
    if(text != "") {text += "\n";}
    text += inputString;
    document.getElementById("output").innerHTML = text;
}

function showAndHide(){
    document.querySelector(".ul-sidebar").classList.toggle("sidebarHide");
}

function hideSidebar() {
    document.querySelector(".ul-sidebar").classList.add("sidebarHide");
}

function selectCode(codeType) {
    document.getElementById("html-input-btn").classList.remove("active");
    document.getElementById("css-input-btn").classList.remove("active");
    document.getElementById("javascript-input-btn").classList.remove("active");
    document.getElementById("html-input").classList.add("code-hide");
    document.getElementById("css-input").classList.add("code-hide");
    document.getElementById("javascript-input").classList.add("code-hide");
    document.getElementById(codeType + "-btn").classList.add("active");
    document.getElementById(codeType).classList.remove("code-hide");
}

selectCode('html-input');

// runMyFunction();

window.onresize = hideSidebar();




function update(text, language){
    let result_element = document.querySelector("#highlighting-content-" + language);
    // Handle final newlines
    if(text[text.length-1] == "\n"){
        text += " ";
    }
    //update code
    result_element.innerHTML = text.replace(new RegExp("&", "g"), "&amp;").replace(new RegExp("<", "g"), "&lt;");
    //Systax Highlight
    Prism.highlightElement(result_element);
}

function syn_scroll(element, language){
    let result_element = document.querySelector("#highlighting-" + language);
    // Get and set x and y.
    result_element.scrollTop = element.scrollTop;
    result_element.scrollLeft = element.scrollLeft;
}

function check_tab(element, language, event) {
    let code = element.value;
    if(event.key == "Tab") {
      /* Tab key pressed */
      event.preventDefault(); // stop normal
      let before_tab = code.slice(0, element.selectionStart); // text before tab
      let after_tab = code.slice(element.selectionEnd, element.value.length); // text after tab
      let cursor_pos = element.selectionStart + 1; // where cursor moves after tab - moving forward by 1 char to after tab
      element.value = before_tab + "\t" + after_tab; // add tab char
      // move cursor
      element.selectionStart = cursor_pos;
      element.selectionEnd = cursor_pos;
      update(element.value, language); // Update text to include indent
    }
  }




// data zone

let Javascript_document_query = [`<h1>Test</h1>`, `h1 {
	color: red;
}`, `console.log("Hi");`];