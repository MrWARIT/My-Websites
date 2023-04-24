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
        document.querySelector("#state").value = eval(selectedCode);
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

function runMyFunction(){
    document.getElementById("output").innerHTML = "";
    let formInput = document.getElementById("state");
    // console.log(formInput.value);
    outputZone(formInput.value);
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

runMyFunction();

window.onresize = hideSidebar();

// data zone

let Javascript_Array_AccessElements = `const animals = ["cat", "dog", "otter", "lion", "seal"];
myconsole("animals = " + animals);
animals[1] = "cow";
myconsole("animals = " + animals);
animals[7] = "mouse";
myconsole("animals = " + animals);`

let Javascript_Array_PushAndPop = `const animals = ["cat", "dog", "otter"];
myconsole("animals = " + animals);
animals.push("bat");
myconsole("animals = " + animals.join(", "));
animals.pop();
myconsole("animals = " + animals.join(" * "))`

let Javascript_Array_SliceAndSplice = `const animals = ["cat", "dog", "otter", "lion", "seal"];
const animals2 = animals.slice(1, 4);
myconsole(animals);
myconsole(animals2);`

let Javascript_Array_ForEach = `const animals = ["cat", "dog", "otter", "lion", "seal"];
animals.forEach(printElements);

function printElements(value, index, array) {
    myconsole(value + " -- " + index + " -- " + array);
}`

let Javascript_Array_Map = `const numbers1 = [1, 5, 3, 8, 4];
const numbers2 = numbers1.map(power2);
const numbers3 = numbers1.map((value, index, array) =>
value * array[index]);

function power2(value, index, array) {
    return value * array[index];
}
console.log("numbers1 = " + numbers1);
console.log("numbers2 = " + numbers2);
console.log("numbers3 = " + numbers3);`

let Javascript_Array_Filter = `const numbers1 = [1, 5, 3, 8, 4];
const numbers2 = numbers1.map(power2);
const numbers3 = numbers1.filter(filterFunction);

function power2(value, index, array) {
    return (value > 3) && (index > 1);
}

function filterFunction(value, index, array){
    return (value > 3) && (index > 1);
}

console.log("numbers1 = " + numbers1);
console.log("numbers2 = " + numbers2);
console.log("numbers3 = " + numbers3);`

let Javascript_Array_ReduceAndReduceRight = `const numbers1 = [1, 2, 3, 4, 5];
let sum = numbers1.reduce(findSum);
let sumplus100 = numbers1.reduce(findSum, 100);
let sumUntilOver10 = numbers1.reduce(findSum2);
let sumRightUntilOver10 = numbers1.reduceRight(findSum2);

function findSum(total, value, index, array) {
    return total + value;
}

function findSum2(total, value) {
    if (total < 10) { total += value; }
    return total;
}

console.log(sum);
console.log(sumplus100);
console.log(sumUntilOver10);
console.log(sumRightUntilOver10);`

let Javascript_Array_EveryAndSome = `const numbers1 = [1, 2, 3, 4, 5];
let allElementOver3 = numbers1.every(over3);
let someElementOver3 = numbers1.some(over3);

function over3(value) {
    return value > 3;
}

console.log(allElementOver3);
console.log(someElementOver3);`

let Javascript_Arraa_IndexOfAndLastIndexOf = `const animals = ["cat", "cow", "rat", "cat", "cat"];

console.log(animals.indexOf("cat"));

console.log(animals.lastIndexOf("cat"));

console.log(animals.indexOf("cat", 1));

console.log(animals.indexOf("cat", -1));`