const isPalindrome = (str)=>{
    const cleanStr = str.replace(/[^a-zA-Z0-9]/g,"").toLowerCase();
    return cleanStr==cleanStr.split("").reverse().join("");
};
const testStr = "Madam";
const testStr1 = "Dad";
const testStr2 = "Hello";
const testStr3 = "Hey";

console.log(`===================To Check whether given string is palindrome or not ======================== `);


console.log(`"${testStr}" is ${isPalindrome(testStr)?"a":"not"} palindrome.`);
console.log(`"${testStr1}" is ${isPalindrome(testStr1)?"a":"not"} palindrome.`);
console.log(`"${testStr2}" is ${isPalindrome(testStr2)?"a":"not"} palindrome.`);
console.log(`"${testStr3}" is ${isPalindrome(testStr3)?"a":"not"} palindrome.`);



console.log(`===================To Check whether given string is Anagram or not ======================== `);

const areAnagram = (str1,str2)=>{
    const formatStr = (str)=>
        str.toLowerCase().replace(/[^a-zA-Z0-9]/g,'').split('').sort().join('');
    return formatStr(str1)===formatStr(str2);
};

const str1 = "silent";
const str2 = "listen";
console.log(`Given words are Silent and Listen ,whether it is anagram or not`);
console.log(areAnagram(str1,str2));


const str3 = "hello";
const str4 = "world";
console.log(`Given words are Hello and World, whether it is anagram or not`);
console.log(areAnagram(str3,str4));


const str5 = "such";
const str6 = "much";
console.log(`Given words are Such and Much ,whether it is anagram or not`);
console.log(areAnagram(str3,str4));


