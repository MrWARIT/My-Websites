// สร้างตัวแปรสถานะ live (run code ตลอดเวลา) เป็น false
var live = false;
selectCodeSpace('html-input');
selectTopic('javascript');

// กดเลือกหัวข้อจากเมนูฝั่งซ้าย
for(i = 0; i < document.querySelectorAll(".p-sidebar").length; i++){
    document.querySelectorAll(".p-sidebar")[i].addEventListener("click", showAndHide);
    document.querySelectorAll(".p-sidebar")[i].addEventListener("click", function(){
        // เอา active effect อันเดิมออก (กรณีโหลด page ครั้งแรกจะไม่มี)
        try {
            document.querySelector(".current-active").classList.remove("current-active");
        } catch (error) {}
        // ให้ปุ่มที่กดตอนนี้เป็น active
        if(!this.classList.contains("clear-code-space")) this.classList.add("current-active");

        // เอา title มาระบุชื่อตัวแปร array/object ที่จะแยกเป็น HTML, CSS และ Javascript
        let selectedCode;
        if(this.classList.contains("clear-code-space")) {
            selectedCode = "Clear";
        }
        else {
            let selectedLesson = document.querySelector(".active-lesson").title;
            selectedCode = "THAI_" + selectedLesson + "_" + this.title;
        }

        document.getElementById("html-code").value = eval(selectedCode + '["html"]');
        update(eval(selectedCode + '["html"]'), 'html');
        document.getElementById("css-code").value = eval(selectedCode + '["css"]');
        update(eval(selectedCode + '["css"]'), 'css');
        document.getElementById("javascript-code").value = eval(selectedCode + '["javascript"]');
        update(eval(selectedCode + '["javascript"]'), 'javascript');
        compile();
    });
}

for(i = 0; i < document.querySelectorAll(".nav-link").length; i++){
    document.querySelectorAll(".nav-link")[i].addEventListener("click", showSidebar);
    document.querySelectorAll(".nav-link")[i].addEventListener("click", function(){
        document.querySelector(".active-lesson").classList.remove("active-lesson")
        this.classList.add("active-lesson");
        selectTopic(this.title);
    });
}

// function selectCode(selectedCode){
//     console.log(selectCode.textContent);
//     try {
//         document.querySelector(".current-active").classList.remove(".current-active");
//     } catch (error) {
//         console.log("Start");
//     }
// }

function compile(test){
    let html = document.getElementById("html-code").value;
    let css = document.getElementById("css-code").value;
    let javascript = document.getElementById("javascript-code").value;

    document.getElementById("code-output").remove();
    document.getElementById("iframe-container").innerHTML = `<iframe id="code-output"></iframe>`;
    let code_output = document.getElementById("code-output").contentWindow.document;
    if(test == "dev") {
        // let dev_html = html.replace(/\\/g, `\\\\`);
        // let dev_javascript = javascript.replace(/"/g, `\\"`)
        prompt("This is the array of the code", "{\"html\": \`" + html + "\`, \n\"css\": \`" + css + "\`, \n\"javascript\": \`" + javascript + "\`};");
    }
    code_output.open();
    code_output.writeln(html + "<style>" + css + "</style>" + "<script>" + javascript + "</script>");
    code_output.close();
}

function liveCompile(element){
    document.querySelector("#run-button").classList.toggle("disabled");
    if(!element.classList.contains("active")){
        compile();
        document.body.addEventListener("keyup", compile);
        live = true;
    }
    else{
        document.body.removeEventListener("keyup", compile)
        live = false;
    }
    element.classList.toggle("active");
}

function showAndHide(){
    // if(document.querySelector(".ul-sidebar").classList.contains("sidebarHide")){
    //     // document.querySelector(".CodeAndOutput").addEventListener("click", showAndHide);
        // document.querySelector(".ul-sidebar").classList.remove("sidebarHide");
        // document.querySelector(".CodeAndOutput").classList.add("fullwidth");
    // }
    // else {
        // try {
            // document.querySelector(".CodeAndOutput").removeEventListener("click", showAndHide);
        // } catch {}
    //     document.querySelector(".ul-sidebar").classList.add("sidebarHide");
    //     document.querySelector(".CodeAndOutput").classList.remove("fullwidth");
    // }
    document.querySelector(".ul-sidebar").classList.toggle("sidebarHide");
    document.querySelector(".CodeAndOutput").classList.toggle("fullwidth");
}

function showSidebar(){
    document.querySelector(".ul-sidebar").classList.remove("sidebarHide");
    document.querySelector(".CodeAndOutput").classList.add("fullwidth");
}

function selectCodeSpace(codeType) {
    document.getElementById("html-input-btn").classList.remove("active");
    document.getElementById("css-input-btn").classList.remove("active");
    document.getElementById("javascript-input-btn").classList.remove("active");
    document.getElementById("html-input").classList.add("code-hide");
    document.getElementById("css-input").classList.add("code-hide");
    document.getElementById("javascript-input").classList.add("code-hide");
    document.getElementById(codeType + "-btn").classList.add("active");
    document.getElementById(codeType).classList.remove("code-hide");
}

function selectTopic(topic) {
    try {
        document.querySelector(".active-topic").classList.remove("active-topic");
    } catch (error) {}
    document.querySelector(".topic_" + topic).classList.add("active-topic");
}

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
    else if (event.key === "Enter") {
        // event.preventDefault();
        // element.value += "\n\t";
        update(element.value, language);
    }
}