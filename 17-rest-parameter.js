function multiply(n1, ...n2){
    console.log(n1,n2);
    
}
multiply(4,5,6);
multiply(9,10);
multiply(90);
multiply(2,4,1,10);



console.log("=============================divide============================");


function divide(x,y=1){
    console.log(x/y);
    
}
divide(20,10);
divide(5);
divide(0,0);



console.log("===============================Destructuring===========================");

const person1={
    first_name:`Aksahy`,
    age:25,
    grad:"BE"
}
let first_name=person.first_name;
let age1 = person1.age;
console.log(first_name,age);


const person={
    fullname:"Akshay Yadav",
    age:45,
    isMarried:true

}
let {fullname, age} = person;
console.log(fullname,age);

