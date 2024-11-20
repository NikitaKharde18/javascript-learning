const arrayNumbers =[20,11,40,25,23,11,9,31,60,2,19]
const array = arrayNumbers.map((elements)=>{
    return elements+10;
})
console.log(`Given array is :${arrayNumbers}`);

console.log(`New array after adding 10 is :${array}`);



console.log(`==========Cube of each elements ================`);


const array1 = arrayNumbers.map((elements)=>{
    return elements*elements*elements;
})
console.log(`Cube of each elements is :${array1}`);


console.log(`================Add the index value into its corresponding each array elements=========================`);


const array2=arrayNumbers.map((elements,index)=>{
    return elements+index;
})
console.log(array2);

