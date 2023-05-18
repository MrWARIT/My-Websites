let Clear = {
    "html": ``, 
    "css": ``, 
    "javascript": ``
};



let THAI_css_position_relativeANDabsolute = 
{"html": `<div id="absolute"></div>
<div id="relative1">
	<div id="absolute_in_relative"></div>
</div>
<div id="relative2"></div>
`, 
"css": `body {
	margin: 0;
}

div {
	width: 150px;
	height: 150px;
}

#absolute {
	position: absolute;
	bottom: 0;
	right: 0;
	background-color: red;
}
#relative1 {
	position: relative;
	top: 300px;
	background-color: green;
}
#absolute_in_relative {
	position: absolute;
	bottom: 0;
	right: 0;
	width: 100px;
	height: 100px;
	background-color: blue;
}
#relative2 {
	position: relative;
	background-color: pink;
	left: 150px;
}
	`, 
"javascript": ``};



let THAI_css_selector_afterANDbefore = 
{"html": `<p>---this is p tag with color red---</p>
<div></div>`, 
"css": `p {
	color: red;
}
p::before {
	content: "before";
}
p::after {
	content: "after";
}

div {
	background-color: blue;
	height: 200px;
	width: 200px;
	color: white;
}
div::before {
	content: "before";
}
div::after {
	content: "after";
}`, 
"javascript": ``};



let THAI_javascript_HTMLDOM_writeANDwriteln = 
{
"html": `<p>document.write() และ document.writeln() ต่างกันที่ 
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
document.write("</pre>");`
};



let THAI_javascript_HTMLDOM_getElementANDquerySelector = 
{
"html": `<code>
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
		"Changed by <strong>getElementsByClassName()</strong>";
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
}`
};



let THAI_javascript_HTMLEvent_eventListener = 
{
"html": `<div id="random-area">
<p>Mouse over this area to generate random number</p>
</div>

<h3 id="result">--</h3>

<button id="enable-button" onclick="enableFunction()">
	Enable Random Function
</button>
<button id="disable-button" onclick="disableFunction()">
	Disable Random Function
</button>
`, 
"css": `body {
	margin: 0;
	text-align: center;
}
p {
	background-color: rgb(0, 100, 150, 0.5);
	padding: 5vh;
}
#result {
	margin: 15px;
}
#disable-button {
	background-color: rgb(256, 100, 100, 0.5);
}
#enable-button {
	background-color: rgb(100, 256, 100, 0.5);
}`, 
"javascript": `function showRandom() {
	let randomNumber = Math.ceil(Math.random() * 100);
	document.querySelector("#result").innerText = randomNumber;
}

function enableFunction(){
	document.querySelector("#random-area").addEventListener("mouseover", showRandom);
}

function disableFunction(){
	document.querySelector("#random-area").removeEventListener("mouseover", showRandom);
	document.querySelector("#result").innerText = "--";
}`
};



let THAI_javascript_Array_find = 
{"html": ``, 
"css": ``, 
"javascript": `const animals = ["dog", "cat", "otter", "camel"];
const numbers = [1, 2, 3];

document.write(animals.find(checkStart));

function checkStart(animal){
	return animal.startsWith("c");
}`};



let THAI_javascript_Array_slice = 
{"html": ``, 
"css": ``, 
"javascript": `var testText = "ABCDEFG";
document.write(testText.slice(0, 2));
document.write("<br>");
document.write(testText.slice(2));`};



let THAI_javascript_Array_splice = 
{"html": ``, 
"css": ``, 
"javascript": `const animals = ["Cat", "Dog", "Otter", "Lion", "Seal"];
document.write(animals);
document.write("<br>");
var random_index;
do {
	random_index = Math.floor(Math.random() * animals.length);
	document.write(random_index);
	document.write("<br>");
	document.write(animals.splice(random_index, 1));
	document.write("<br>");
	document.write("<br>");
	document.write(animals);
	document.write("<br>");
} while(animals.length)`};



let THAI_javascript_HTMLDOM_transition = 
{"html": `<div id="test_div"></div>
<br>
<button onclick="zoomIn()">Zoom In</button>
<button onclick="zoomOut()">Zoom Out</button>`, 
"css": `div {
	background-color: blue;
	width: 100px;
	height: 100px;
	color: white;
	font-size: 30px;
	text-align: center;
	padding: 20px;
	transition: 1s;
}`, 
"javascript": `function zoomIn(){
	document.querySelector("#test_div").style = "width: 300px";
}
function zoomOut(){
	document.querySelector("#test_div").style = "width: 100px";
}`};



let THAI_javascript_Date_get = 
{"html": ``, 
"css": ``, 
"javascript": `var day = new Date();
document.write(day);
document.write("<hr>");
document.write(day.getDay());
document.write("<hr>");
document.write(day.getDate());
document.write("<hr>");
document.write(day.getMonth());
document.write("<hr>");
document.write(day.getFullYear());
document.write("<hr>");
document.write(day.getHours());
document.write("<hr>");
document.write(day.getMinutes());
document.write("<hr>");
document.write(day.getSeconds());
document.write("<hr>");
document.write(day.getHours() + ":" + day.getMinutes() + ":" + day.getSeconds());
document.write("<hr>");`};



let THAI_javascript_ToDoList = 
{"html": `<h1>All</h1>
<h3>
    <ul>
			<li>Code Room Mobile</li>
    	<li>Fifteen Puzzle Game</li>
    	<li>Portfolio</li>
    	<li>Portfolio Mobile</li>
    	<li>Minigame</li>
    	<li>Minigame Mobile</li>
    	<li>Higher Lower game + swing</li>
    	<li>Web blog: Programming knowledge</li>
			<li>Word Web</li>
    </ul>
`, 
"css": ``, 
"javascript": ``};



let THAI_jquery_hideshowANDtoggle = 
{"html": `<head>
	<script src="https://code.jquery.com/jquery-3.6.4.slim.min.js" integrity="sha256-a2yjHM4jnF9f54xUQakjZGaqYs/V1CYvWpoqZzC2/Bw=" crossorigin="anonymous"></script>
</head>
<body style="text-align: center;">
	<button id="hide">Hide</button>
	<button id="show">Show</button>
	<button id="toggle">Toggle</button>
	<p class="test-p">TEXT</p>
</body>`, 
"css": ``, 
"javascript": `$(function() {
	$("#hide").click(function(){
		$("p").hide();
	});
	$("#show").click(function(){
		$("p").show();
	});
	$("#toggle").click(function(){
		$("p").toggle();
	});
});`};



let THAI_jquery_thiskeyword =
{"html": `<head>
<script src="https://code.jquery.com/jquery-3.6.4.slim.min.js" integrity="sha256-a2yjHM4jnF9f54xUQakjZGaqYs/V1CYvWpoqZzC2/Bw=" crossorigin="anonymous"></script>
</head>
<body>
<p>Click to change color to red</p>
<p>Double click to change color back to black</p>
</body>`, 
"css": `p {
user-select: none;
}
.color_red {
color: red;
}`, 
"javascript": `$(function() {
$("p").click(function(){
	$(this).addClass("color_red");
});
$("p").dblclick(function(){
	$(this).removeClass("color_red");
});
});`};



let THAI_apply_timeline = 
{"html": `<div class="timeline-area">
	<div class="timeline">
		<h2>2016-2018</h2>
		<p>Debsirin Romklao School. Science-Mathematic program. GPA 3.91</p>
	</div>
	<div class="timeline">
		<h2>2019-2023</h2>
		<p>King Mongkut's Institute of Technology Ladkrabang. Department of electrical engineering. GPA 3.64</p>
	</div>
</div>`, 
"css": `body {
	margin: 0;
	background-color: #acf;
}

.timeline-area {
	margin: 10% 20%;
	border-left: 4px solid white; /* เส้น timeline */
	padding: 10px 10px 0 30px;
}

.timeline {
	background-color: #fff;
	padding: 20px;
	margin-top: 30px;
	position: relative; /* เพื่อให้ before, after ใช้ absolute อ้างอิงตำแหน่งเทียบกับ div.timeline ได้ */
}

.timeline::before {
	content: '';
	border-radius: 100%;
	border: 10px solid red;
	position: absolute;
	left: calc(-30px - 10px - 2px);
	top: 20px;
}

.timeline::after {
	content: '';
	display: block; /* เพื่อให้สามารถกำหนดความสูงความกว้างได้ */
	height: 0;
	width: 0;
	border-color: transparent white transparent transparent;
	border-width: 10px;
	border-style: solid;
	position: absolute;
	left: calc(-20px);
	top: 20px;
}`, 
"javascript": ``};



let THAI_apply_popup = 
{"html": `<div class="popup">
	<div class="blur"></div>
	<div class="popup_window">
		<h1>This is a popup</h1>
		<button id="hide_popup">OK</button>
	</div>
</div>
<h3>You can click <button id="show_popup">THIS</button> 
button to show the popup</h3>`, 
"css": `body {
	margin: 0;
}
h3 {
	padding: 20px;
	line-height: 2;
}
.popup {
	display: none;
}
.blur {
	background-color: rgba(100,200,256,0.3);
	backdrop-filter: blur(5px);
	width: 100%;
	height: 100%;
	position: absolute;
	z-index: 1;
}
.popup_window {
	width: 300px;
	height: 120px;
	background-color: white;
	position: absolute;
	right: 0;
	left: 0;
	top: 0;
	bottom: 0;
	margin: auto;
	z-index: 2;
	padding: 20px;
	border-radius: 20px;
	text-align: center;
}`, 
"javascript": `document.querySelector("#show_popup").addEventListener("click", function(){
	document.querySelector(".popup").style.display = "block";
});
document.querySelector("#hide_popup").addEventListener("click", function(){
	document.querySelector(".popup").style.display = "none";
});`};



let THAI_apply_timer = 
{"html": `<button onclick="startLongTimer()"><h3>Timer (1 second)</h3></button>
<h2 id="long_timer">0</h2>
<button onclick="startShortTimer()"><h3>Timer (0.1 second)</h3></button>
<h2 id="short_timer">0</h2>
<h3>(For lower than 1 second interval function, after a short time of
inactivate, the speed will slow down to one second)</h3>
<button onclick="stopTimer()"><h3>Stop Timer</h3></button>`, 
"css": `body {
	text-align: center;
	padding: 20px;
}`, 
"javascript": `var myLongTime;
var myShortTime;
var longTimeCounting = false;
var shortTimeCounting = false;

function startLongTimer(){
	if(!longTimeCounting) {
		myLongTime = 0;
		myLongTimer = setInterval(longTimer, 1000);
	}
	longTimeCounting = true;
}

function longTimer() {
	document.querySelector("#long_timer").innerHTML = ++myLongTime;
}

function startShortTimer(){
	if(!shortTimeCounting) {
		myShortTime = 0;
		myShortTimer = setInterval(shortTimer, 100);
	}
	shortTimeCounting = true;
}

function shortTimer() {
	myShortTime += 0.1;
	document.querySelector("#short_timer").innerHTML = myShortTime.toFixed(2);
}

function stopTimer() {
	myLongTime = 0;
	document.querySelector("#long_timer").innerHTML = 0;
	clearInterval(myLongTimer);
	myShortTime = 0;
	document.querySelector("#short_timer").innerHTML = 0;
	clearInterval(myShortTimer);
	longTimeCounting = false;
	shortTimeCounting = false;
}`};



let THAI_apply_unfinished_codeplay =
{"html": `<textarea id="input" oninput="updateOutput()" spellcheck="false"></textarea>
<pre id="output"></pre>`, 
"css": `#input, #output{
	position: absolute;
	left: 0;
	top: 0;
	margin: 0;
	box-sizing: border-box;
	padding: 10px;
	font-family: monospace;
	font-size: 12pt;
	z-index: 2;
	
	caret-color: red;
	background-color: transparent;
	color: transparent;
	width: 400px;
	height: 300px;
	resize: none;
	outline: none;

	/* horizontal scollable */
	overflow: auto;
	white-space: nowrap;
}

#output {
	background-color: #abc;
	color: black;
	z-index: 1;
}`, 
"javascript": `function updateOutput(){
	document.querySelector("#output").innerHTML = document.querySelector("#input").value;
}`};