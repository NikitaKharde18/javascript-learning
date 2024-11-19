console.log(`=======================No Args And No Return Value================================ `);


let msg = ( ) => {
console.log(`Good Morning,Today is Tuesday `);

}
msg();


console.log(`=======================With Args And No Return Value ================================ `);



let multiply = (n1,n2,n3=1) => {
    console.log(`Multiplication of given number is: ${n1* n2*n3}`); 

    
}
multiply(5,5,2);
multiply(10,4);

console.log(`=======================With 5 Args And Return Value ================================ `);


let sum = (n1 ,n2, n3, n4, n5 )=>{

    let result = n1 + n2 + n3 +n4 +n5;

    return result;

}

let summation = sum(100,100,200,349,756 );

console.log(`Result of Addition is :${summation}`);


let summationString = sum("I am "," learning "," ES6 "," features "," in depth " );

console.log(summationString);


/*let div = (num1,num2) =>{
   console.log(`Divison of numbers is : ${num1%num2}`);
   
    
}
let division=(20,10);
console.log(division);
*/