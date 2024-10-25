function stringHandsOn(){
var str ="       Hey,you are doing good ,keep it up    ";
console.log(`1. ${str}`);
console.log("====================================================");

var result=str.length;
console.log(`2. Length of the string is, ${result}`);
console.log("====================================================");

var result =str.trim();
console.log(`3. After trim string is : ${result} and its lenght is ${result.length}`);
console.log("====================================================");

console.log(`4. First character is ${result.charAt(0)} and last character is ${result.charAt(result.length-1)}`);
console.log("====================================================");

var resultValue= result.split(" ");
console.log(`5. Total numbers of word: ${resultValue.length}`);
console.log("====================================================");


var check=result.indexOf("good");
console.log(`6. Index of word good is ${check}`);
console.log("====================================================");

var sub=result.substring(22);
console.log(`7. The substring starting from index 22 is ${sub}`);
result.substring(22);
console.log("====================================================");

var ends=result.endsWith("up");
console.log(`8. Does string ends with word up ? ${ends}`);
console.log("====================================================");



var starts=result.startsWith("Hey");
console.log(`9. Does string starts with word Hey ? ${ends}`);



}

stringHandsOn()
