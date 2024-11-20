const array_numbers=[20,11,40,25,37,49,9,90,60,2,19]
console.log(`Given array is :${array_numbers}`);
console.log(`======================The sum of all numbers using reduce() method===================`);

const sum = array_numbers.reduce((runningTotal,element)=>{
    return runningTotal + element;

},0);
console.log(sum);



console.log("=======================The numbers multiple of 5 and its sum====================");

const arrayFive = array_numbers.filter( (element) => {

    return element%5==0;

} );

console.log(arrayFive);




const sum1 = arrayFive.reduce((runningTotal,element)=>{
    return runningTotal + element;

},0);
console.log(`The Sum of multiple of 5 is :${sum1}`);
