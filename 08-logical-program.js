let array =[10,20,45,30,77,60];
console.log(array);

console.log(`Find The Even Numbers from the array`);
let evenNumCount=0;
for (    const element of array) {
    if (element%2==0) {
        console.log(element);
        evenNumCount=evenNumCount+1;
    }
    
}
console.log(`Even number count is : ${evenNumCount} `);

console.log(`=====================Vowels including lower and upper case===================================`);

const myLove ="I Love Only Javascript";
console.log(myLove);

const vowels = "aeiou";
let counterVowels=0;
for (const char of myLove){
    if (vowels.includes(char.toLocaleLowerCase())) {
        counterVowels=counterVowels+1;
    } 
   
    
}

console.log(`From the above string vowel count is : ${counterVowels}`);

console.log(`=====================Count the a characters including lower and upper case===================================`);


const sentence ="JavaScript LANGUAGE";
console.log(sentence);

let counterChar = 0;
for (const char of sentence) {
    if (char=='a'||char=='A') {
        counterChar=counterChar+1;
    }
}
console.log(`TOtal a char in above string is : ${counterChar}`);



