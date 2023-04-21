function changeParagraph1(){
    document.getElementById("test1").innerHTML = "<em>Changed content</em>";
}

function writeFunction() {
    document.write(1+1);
}

let a = 5 + 5 + "5" + 5 + 5;
console.log('The value of 5 + 5 + "5" + 5 + 5 = ' + a);

b = 10;
console.log(b);

// creat object by const, riwObject(object) = {name(property): "Riw"(value), sayHiTo(method): function(){}}
const riwObject = {
    name: "Riw",
    age: 20,
    sayHiTo: function(name) {alert("Hi, my name is " + this.name + ", are you " + name + "?")}
};
function showFunctionFromObject(){
    riwObject.sayHiTo("Warit");
    console.log(riwObject.sayHiTo);
}

let x = "test";
let y = new String("test");
console.log("x == y is " + (x == y));
console.log("x === y is " + (x === y));
console.log("* comparing two javascript object always returns false")

let testString = "0123456789";
console.log("testString = " + testString);
console.log("length = " + testString.length);
console.log("slice(1,3) of testString = " + testString.slice(1, 3));
console.log("slice(-1,3) of testString = " + testString.slice(-1, 3));
console.log("slice(3) of testString = " + testString.slice(3));
console.log("slice(-3) of testString = " + testString.slice(-3));
console.log("substring(1,3) of testString = " + testString.substring(1, 3));
console.log("substring(-1,3) of testString = " + testString.substring(-1, 3));
console.log("substring(3) of testString = " + testString.substring(3));
console.log("substring(-3) of testString = " + testString.substring(-3));

console.log("---------");
let testString2 = "UP, up, up";
console.log(testString2);
console.log("replace(\"up\", \"replace\") of testString2 = " + testString2.replace("up", "replace"));
console.log("replace(/up/i, \"replace\") of testString2 = " + testString2.replace(/up/i, "replace")); //insensitive
console.log("replace(/up/g, \"replace\") of testString2 = " + testString2.replace(/up/g, "replace")); //global match
console.log("replaceAll(\"up\", \"replace\") of testString2 = " + testString2.replaceAll("up", "replace"));
console.log("testString2.concat(\"A\", \"B\") = " + testString2.concat("A", "B"));

console.log("---------");
let testString3 = "ABC";
console.log("testString3.padStart(10, \"test\") = " + testString3.padStart(10, "test"));
console.log("testString3.charAt(0) = " + testString3.charAt(0));
console.log("testString3.charCodeAt(0) = " + testString3.charCodeAt(0));
//testString3[0] = "Z"; >>> this code won't work, but won't cause error too.

//split
console.log("---------");
let testString4 = "One,two three";
console.log("testString4.split() = " + testString4.split());
console.log("testString4.split(\"\") = " + testString4.split(""));
console.log("testString4.split(\",\") = " + testString4.split(","));
console.log("As you can see from above, split makes string turns to array, but when we \"+\" string with array it will change to multi string from array member separated by \",\" for each member");

//search
console.log("---------");
let testString5 = "Please locate where 'locate' OCCURS?";
console.log(testString5);
console.log("testString4.indexOf(\"locate\") is " + testString5.indexOf("locate"));
console.log("testString4.indexOf(\"locate\", 8) is " + testString5.indexOf("locate", 8));
console.log("testString4.lastIndexOf(\"locate\") is " + testString5.lastIndexOf("locate"));
console.log("testString4.indexOf(\"Locate\") is " + testString5.indexOf("Locate"));
console.log("testString4.search(\"locate\") is " + testString5.search("locate")); //difference from indexOf because, search cannot give start position (2nd parameter) and indexOf cannot use regular expression
console.log("testString5.match(\"oc\") = " + testString5.match("oc"));
console.log("testString5.match(/oc/) = " + testString5.match(/oc/));
console.log("testString5.match(/oc/g) = " + testString5.match(/oc/g));
console.log("testString5.match(/oc/gi) = " + testString5.match(/oc/gi));
console.log("match function return array");
console.log("testString5.matchAll(\"oc\") = " + testString5.matchAll("oc"));
console.log("testString5.matchAll(/oc/gi) = " + testString5.matchAll(/oc/gi));
console.log("Array.from(testString5.matchAll(\"oc\") = " + Array.from(testString5.matchAll("oc")));
console.log("testString5.includes(\"where\") = " + testString5.includes("where"));
console.log("testString5.includes(\"where\", 1) = " + testString5.includes("where", 10)); //ควรได้ผลลัพธ์เป็น false นะ แต่ดันได้ true ยังคิดไม่ออกว่าทำไม
console.log("testString5.startsWith(\"locate\") = " + testString5.startsWith("locate"));
console.log("testString5.startsWith(\"locate\", 7) = " + testString5.startsWith("locate", 7));
console.log("testString5.endsWith(\"locate\", 13) = " + testString5.endsWith("locate", 13));

//template literals
let testString6 = `test ${testString3}
template can type multiline and is a format text`;
console.log(testString6);

function showVehicle() {
    let output = "<h3>Vehicles</h3><ul>";
    for(let i = 1; i < 4; i++){
        if(document.querySelector("#vehicle" + i).checked == true){
            output += `<li>${document.querySelector("#vehicle" + i + "-label").innerHTML}</li>`
        }
    }
    output += "</ul>";
    document.querySelector("#showVehicle-id").innerHTML = output;
}
console.log("0.1 + 0.2 = " + (0.1 + 0.2));
console.log("(1 + 2) / 10 = " + ((1+2) / 10));
console.log("Every sign except + (-, *, /) can use with string as a number, but for + sign, it can be \"concat\" or \"plus\" depends on order of number and string");
console.log("Infinity is not exact infinity, just any value outside the largest possible number");
console.log("toString(--) can be used to change base");
let testNumber1 = 7;
console.log(testNumber1);
console.log("testNumber1.toString() = " + testNumber1.toString());
console.log("testNumber1.toString(2) = " + testNumber1.toString(2));
console.log("(7).toString() = " + (7).toString());
console.log("testNumber1.toExponential() = " + testNumber1.toExponential());
console.log(typeof(testNumber1.toString(2)));
console.log(typeof(testNumber1.toExponential(2)));
let testNumber2 = 1.234;
console.log("testNumber2.toFixed() = " + testNumber2.toFixed());
console.log("testNumber2.toFixed(2) = " + testNumber2.toFixed(2));
console.log("testNumber2.toFixed(3) = " + testNumber2.toFixed(3));
console.log("testNumber2.toFixed(4) = " + testNumber2.toFixed(4));
console.log(typeof(testNumber2.toFixed(2)));
let testNumber3 = 12.345;
console.log("testNumber3 = " + testNumber3);
console.log("testNumber3.toPrecision() = " + testNumber3.toPrecision());
console.log("testNumber3.toPrecision(2) = " + testNumber3.toPrecision(2));
console.log("testNumber3.toPrecision(3) = " + testNumber3.toPrecision(3));
console.log("testNumber3.toPrecision(4) = " + testNumber3.toPrecision(4));
console.log(typeof(testNumber3.toPrecision(2)));
console.log("Note that toString, toExponential, toFixed, and toPrecision all return String data type");
console.log("\"somestring\".valueOf() is used to convert Number Object to primitive value (type = number)");
console.log("parseInt(\"-10.01\") = " + parseInt("-10.01"));
console.log("parseInt(\"10 test\") = " + parseInt("10 test"));
console.log("parseInt(\"test 10\") = " + parseInt("test 10"));
console.log("parseFloat(\"-10.01\") = " + parseFloat("-10.01"));

// let have block scope
/*
function test(){
    let a1 = 10;
    var a2 = 10;
}
a1 can't be used here
a2 can be used here


var can be redecleared
let can't be redecleared


let x = 10;
function test2(){
    let x = 20;
}
console.log(x); -> output = 10


name = "warit";
var name; // can do
fname = "warit";
let fname = "warit"; // can't do


const have block scope
const ทำให้ไม่สามารถเปลี่ยนตัวแปร เปลี่ยนarray หรือเปลี่ยนobject ได้ แต่เราสามารถเปลี่ยนค่าใน array, object ได้
const animals = ["dog", "cat", "otter"];
animals[0] = "bat";
animals.push("dog");
animals = ["new", "animal", "array"]; //can't do this

const employee = {name:"warit", age:20, salary:50000.00};
employee.age = 22; // can do
employee = {name:"new", age:0}; // can't do

{
    const x = 1;
}
{  
    const x = 2; // allowed
}
*/

// JavaScript numbers are always 64-bit floating point โดยเป็น Value 52 bit, 11 bit for exponent, 1 bif for sign.
// safe integers are all intergers from -(2^53-1) to +(2^53-1)

//parseInt("string"); สามารถแปลงข้อความเป็นตัวเลขได้
//NaN = Not a Number