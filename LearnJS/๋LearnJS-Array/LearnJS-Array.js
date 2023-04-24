const animals = [
    "cat",
    "dog",
    "otter"
]

console.log(animals);
console.log("animals[0] = " + animals[0]);
console.log("animals.length = " + animals.length);
animals.forEach(sayHey);
sayHey("riw");
animals.push("bat");
console.log("//animals.push(\"bat\");");
animals[animals.length] = "lion";
console.log("//animals[animals.length] = \"lion\";");
console.log("animals = " + animals);
animals[10] = "cow";
console.log("//animals[10] = \"cow\";");
console.log(animals);
for(i = 0; i < 6; i++){
    animals.pop();
}

console.log("-------------------------");
console.log("animals.pop() 5 times")
console.log("animals (after string) = " + animals);
console.log("animals.toString() = " + animals.toString());
console.log("-------------------------");
console.log("animals.join(\" * \") = " + animals.join(" * "));
console.log("-------------------------");
console.log("animals.pop() = " + animals.pop());
console.log("animals (after show animals.pop()) = " + animals);
console.log("-------------------------");
console.log("animals.push(\"seal\") = " + animals.push("seal"));
console.log("animals (after show animals.push(\"seal\") = " + animals);
console.log("-------------------------");
console.log("animals.shift() = " + animals.shift());
console.log("animals (after show animals.shift()) = " + animals);
console.log("-------------------------");
console.log("animals.unshift(\"mantis\") = " + animals.unshift("mantis"));
console.log("animals (after show animals.unshift(\"mantis\")) = " + animals);
console.log("-------------------------");
console.log("delete animals[3]; will delete \"bat\" but leaves undefine/empty");
delete animals[3];
console.log("animals (after delete animals[3] = " + animals);
console.log(animals);
console.log("-------------------------");
const arr1 = ["A", "B"];
const arr2 = ["X", "Y"];
console.log("arr1 = " + arr1);
console.log("arr2 = " + arr2);
console.log("arr1.concat(arr2) = " + arr1.concat(arr2));
console.log("arr1.concat(\"test\", arr2) (after show arr1.concat) = " + arr1.concat("test", arr2));
console.log("concat does not change the existing arrays, just returns a new array");
console.log("-------------------------");
const arr3 = [[1, 2, 3], ["one", "two"], [false, true]];
console.log(arr3);
console.log(arr3.flat());

console.log("-------------------------");
// Associative array (ก็คือ array ธรรมดาที่กำหนดค่าด้วย numbered indexs)
const x = [];
x[0] = 99;
x[1] = "otter";
console.log("create empty array x and assign value by numbered indexs");
console.log("x.length = " + x.length);
console.log("x[0] = " + x[0]);

// named indexs ทำให้กลายเป็น object แล้วทำให้ array methods ใช้งานไม่ได้
const y = [];
y["number"] = 1;
y["animal"] = "otter";
console.log("create empty array y but assign value by named indexs");
console.log("y.length = " + y.length);
console.log("y[0] = " + y[0]);

console.log("-------------------------");
animals[3] = "cat";
console.log("animals = " + animals);
console.log("animals.splice(1, 2, \"ant\", \"fly\", \"bird\") = " + animals.splice(1, 2, "ant", "fly", "bird"));
console.log("animals (after show animals.splice(1, 2, \"ant\", \"fly\", \"bird\"))= " + animals);
console.log("-------------------------");
console.log("animals.slice(2) = " + animals.slice(2));
console.log("animals (after show animals.slice(2)) = " + animals);
console.log("animals.slice(2,4) = " + animals.slice(2, 4));
console.log("animals (after show animals.slice(2, 4)) = " + animals);

console.log("------------Sort------------");
console.log("animals.reverse() = " + animals.reverse());
console.log("animals.sort() = " + animals.sort());
console.log("animals.reverse() = " + animals.reverse());
const arr4 = ["2", "199", "30"];
console.log("arr4 = " + arr4);
console.log("arr4.sort() = " + arr4.sort() + "// Alphabetically sort");
console.log("arr4.sort(function(a, b){return a-b}) = " + arr4.sort(function(a, b){return a-b}));
console.log("arr4.sort(function(a, b){return b-a}) = " + arr4.sort(function(a, b){return b-a}));
console.log("function above is compare function, use to Numerically sort String number");
const arr5 = [9, 4, 6, 2, 7];
console.log("arr5 = " + arr5);
console.log("arr5.reverse() = " + arr5.reverse());
console.log("arr5.sort() = " + arr5.sort());
console.log("arr5.reverse() = " + arr5.reverse());
console.log("arr5 (after show arr5.sort()) = " + arr5);
console.log("\"sort\" and \"reverse\" changed the array");
console.log("now arr5 = " + arr5);
console.log("arr5.sort(function(){return 0.5 - Math.random()}) = " + arr5.sort(function(){return 0.5 - Math.random()}));
console.log("arr5.sort(function(){return 1}) = " + arr5.sort(function(){return 1}));
console.log("arr5.sort(function(){return 1}) = " + arr5.sort(function(){return 1}));
console.log("arr5.sort(function(){return -1}) = " + arr5.sort(function(){return -1}));
console.log("arr5.sort(function(){return -1}) = " + arr5.sort(function(){return -1}));
console.log("arr5.sort() = " + arr5.sort());
console.log("arr5.sort(function(a,b){return a-b}) = " + arr5.sort(function(a,b){return a-b}));
console.log("arr5.sort(function(a,b){return b-a}) = " + arr5.sort(function(a,b){return b-a}));
console.log("ตรงนี้น่างงหน่อยๆ สรุปคือถ้าเลลเรียงจากน้อยไปมากแล้ว (a-b < 0) ใช้ compare function จะได้ผลลัพธ์เป็นลำดับเหมือนเดิม")
console.log("แต่ถ้าไม่เทียบ a-b แต่ใช้ -1 ซึ่งควรจะเหมือนกัน กลายเป็นว่าลำดับสลับ")

console.log("------------Random sort------------");
console.log("use \"someArray\".sort(function(){return 0.5 - Math.random()} to numerically random sort array");
console.log("also use Fisher Yates Method (for me, it just switch between each member with random position) which more accurate than above (not sure why)   ");

console.log("-------------------------");
console.log("Math.max(1, 5, 6) = " + Math.max(1, 5, 6));
console.log("Math.max.apply(null, [1, 5, 6]) = " + Math.max.apply(null, [1, 5, 6]));

console.log("------------Sort Object Array (number property)------------");
const employee = [
    {name: "Riw", age: 22},
    {name: "Ant", age: 23},
    {name: "Yo", age: 21}
];
console.log("create new array \"employee\" without sort")
console.log(employee);
console.log("asign new array equal to employee.sort(function...)")
const newArr = employee.sort(function(a,b){return a.age - b.age});
// console.log(employee.sort(function(a,b){return a.age - b.age}));
console.log(employee);
// console.log(employee);
// console.log(employee.sort(function(a,b){return 1}));
// employee[0].name = "Ram";
console.log("//the object is printed the same??? (final result)")

console.log("------------Sort Object Array (alphabet property)------------");
const animalsObject = [
    {name: "cat", amount: 4},
    {name: "dog", amount: 3},
    {name: "otter", amount: 10},
];
console.log("create animalsObject array");
console.log(animalsObject);
console.log("c" < "d");
console.log("d" < "o");
console.log(animalsObject.sort(function(a,b){
    let x = a.name.toLowerCase();
    let y = b.name.toLowerCase();
    if(x > y) {return 1;}
    if(x < y) {return -1;}
    return 0;
}));
console.log("สรุปว่าจะว่า a,b a-b คือน้อยไปมาก ทั้งตัวเลขและตัวอักษร ส่วนเลข 1 เหมือนเดิม -1 = reverse");


console.log("-------------------------------------------------------");
console.log("-------------------------------------------------------");
console.log("-------------------------------------------------------");




function sayHey(animal){
    console.log(`I'm a ${animal}.`);
}



//arrays are a special type of objects. The typeof will return "object" however, arrays use numbers to access its "elements".
//Objects use names to access its "members"

// การสร้าง object สามารถสร้างได้ด้วยคำสั่งต่อไปนี้
/*
const z = new Array(1, "B", true);
const z = new Array();
แต่จะไม่สามารถสร้าง array object ที่มีสมาชิกเป็นตัวเลข 1 ตัวได้ 
const z = new Array(10); //จะกลายเป็นการสร้าง empty ขึ้นมา 10 ตัวแทน
 */

/*
How to check that variable is array or object
้ถ้าใช้คำสั่ง typeof("some array"); จะได้ผลลัพธ์เป็น object
วิธีเช็คทำได้ 2 แบบคือ
Array.isArray("some array"); //ถ้าใช่จะได้ true
"some array" instanceof Array; //ถ้าใช่จะได้ true
*/