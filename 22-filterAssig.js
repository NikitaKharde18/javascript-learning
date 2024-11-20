

const arrayNum = [20,11,40,25,37,49,9,90,60,2,19];
console.log(arrayNum);

console.log(`========  Find out the value greater than 50 from above array ==============`);

const array = arrayNum.filter( (element) => {

    return element > 50;

} );

console.log(array);




console.log(`======== To get even numbers from above array=========================`);


const arrayEven = arrayNum.filter( (element) => {

    return element %2 == 0;

} );

console.log(arrayEven);



console.log(`======== To get odd numbers from above array=========================`);


const arrayOdd = arrayNum.filter( (element) => {

    return element %2 == 1;

} );

console.log(arrayOdd);




console.log(`======== Find out multiple of 5=========================`);


const arrayFive = arrayNum.filter( (element) => {

    return element%5==0;

} );

console.log(arrayFive);

console.log(`======== Numbers Between 20 and 50=========================`);


const array2 = arrayNum.filter( (element) => {

    return element <=50,element>=20;

} );

console.log(array2);
