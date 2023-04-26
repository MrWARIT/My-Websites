// สร้างตัวแปรสถานะ live (run code ตลอดเวลา) เป็น false
var live = false;
selectCode('html-input');
window.onresize = hideSidebar();

// กดเลือกหัวข้อจากเมนูฝั่งซ้าย
for(i = 0; i < document.querySelectorAll(".p-sidebar").length; i++){
    document.querySelectorAll(".p-sidebar")[i].addEventListener("click", function(){
        // เอา active effect อันเดิมออก (กรณีโหลด page ครั้งแรกจะไม่มี)
        try {
            document.querySelector(".current-active").classList.remove("current-active");
            console.log("Continue");
        } catch (error) {
            console.log("Start");
        }
        // ให้ปุ่มที่กดตอนนี้เป็น active
        this.classList.add("current-active");

        // เอา title มาระบุชื่อตัวแปร array/object ที่จะแยกเป็น HTML, CSS และ Javascript
        let selectedCode = "THAI_Javascript_" + this.title;

        document.getElementById("html-code").value = eval(selectedCode + '["html"]');
        update(eval(selectedCode + '["html"]'), 'html');
        document.getElementById("css-code").value = eval(selectedCode + '["css"]');
        update(eval(selectedCode + '["css"]'), 'css');
        document.getElementById("javascript-code").value = eval(selectedCode + '["javascript"]');
        update(eval(selectedCode + '["javascript"]'), 'javascript');
        compile();
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
    element.classList.toggle("active");
    if(live == false){
        compile();
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

let THAI_Javascript_HTMLDOM_writeANDwriteln = 
{"html": `<p>document.write() และ document.writeln() ต่างกันที่ 
writeln() จะเติม '\\n' ต่อท้ายข้อความเรา แต่ใน HTML นั้น
whitespace ต่างๆจะถูกย่อให้เหลือเพียง single space (เหมือนกับที่
ข้อความนี้ถูกขึ้นบรรทัดใหม่ แต่ใน HTML จะเห็นเป็นบรรทัดเดิมที่เว้นช่อง
ว่างไว้หนึ่งช่อง)</p>
<pre>วิธีหนึ่งที่จะทำให้เห็นความแตกต่างคือการใช้ &lt;pre&gt; tag
ซึ่งจะไม่ยุบ whitespace ต่างๆเป็น single space</pre>
<p>ด้านล่างนี้คือตัวอย่างการใช้ write(), writeln()</p>`, 
"css": ``, 
"javascript": `document.write("write()1---");
document.write("---write()2");

document.write("<br><br>");

document.writeln("writeLine()1---");
document.writeln("---writeLine()2");

document.writeln("<br><br>");

document.writeln("---     ---  \\n  ---  \\t  ---");

document.write("<br><br>");

document.write("<pre>");
document.write("write()1");
document.write("write()2");
document.write("<br>");
document.writeln("writeln()1");
document.writeln("writeln()2");
document.write("</pre>");`};

let THAI_Javascript_HTMLDOM_getElementANDquerySelector =
{"html": `<code>
<h3>This is 1st &lt;h3&gt; tag</h3>
<h3>This is 2nd &lt;h3&gt; tag</h3>
<h3>This is 3rd &lt;h3&gt; tag</h3>
<p id="result1">This is &lt;p&gt; tag with id ="result1"</p>
<p class="result2">This is &lt;p&gt; tag with class = "result2"</p>
<p class="result2">This is &lt;p&gt; tag with class = "result2"</p>
</code>

<button onclick="changeTextById()">
	Change text by <strong>getElementById()</strong>
</button>
<br><br>
<button onclick="changeTextByClassName()">
	Change text by <strong>getElementsByClassName()</strong>
</button>
<br><br>
<button onclick="changeTextByQuerySelector()">
	Change text by <strong>getElementByQuerySelector()</strong>
</button>
</button>
<br><br>
<button onclick="changeTextByQuerySelectorAll()">
	Change text by <strong>getElementByQuerySelectorAll()</strong>
</button>`, 
"css": ``, 
"javascript": `function changeTextById(){
	document.getElementById("result1").innerHTML =
		"Changed by <strong>getElementById()</strong>";
}

function changeTextByClassName(){
	document.getElementsByClassName("result2")[0].innerHTML =
		"Changed by <strong>getElementByClassName()</strong>";
}

function changeTextByQuerySelector(){
	document.querySelector("h3").innerHTML = 
		"h3 changed by <strong>querySelector()</strong>";
	document.querySelector("#result1").innerHTML =
		"result1 changed by <strong>querySelector()</strong>";
	document.querySelector(".result2").innerHTML = 
		"result2 changed by <strong>querySelector()</strong>";
}

function changeTextByQuerySelectorAll(){
	for(i = 0; i < document.querySelectorAll("h3").length; i++){
		document.querySelectorAll("h3")[i].innerHTML =
			"h3 changed by <strong>querySelectorAll()</strong>";
	}
}`};