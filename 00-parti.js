let mySet =new Set();

mySet.add(10);
mySet.add(20);
mySet.add(30);
mySet.add(60);
mySet.add(40);
mySet.add(50);
console.log(mySet);


//mySet.add(40);//Adding Duplicate elements

//console.log(`set Size is : ${mySet.size}`);






const myMap = new Map();

myMap.set(11, "Jenny");

myMap.set(22, "Elon");

myMap.set(33, "Stew");

myMap.set(44, "Bill");

myMap.set(22, "Sundar");

myMap.set(55, "Stew");

console.log(myMap);





//console.log(date.getDate());

var msg = `hello,very good morning-"Sachin"`
console.log(msg);



var name1 = "codemind"
var lastName = "Tech"
console.log(`Name :${name1} and last name is :${lastName}`);
 



/*function isPalindrome(str)
{
    const cleanStr=str.replace(/[^a-zA-Z0-9]/g,'').toLowerCase();
    const reverseStr = cleanStr.split('').reverse().join('');
    return cleanStr==reverseStr;
}

//console.log(isPalindrome("dad"));*/



console.log("================================================");

const isPalindrome = (str)=>{
    const cleanStr = str.replace(/[^a-zA-Z0-9]/g,"").toLowerCase();
    return cleanStr==cleanStr.split("").reverse().join("");
};
const testStr = "Madam";


console.log(`" ${isPalindrome(testStr) ?"a":"not"} palindrome.`);
