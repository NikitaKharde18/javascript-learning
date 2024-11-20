let array = [1,-7,40,502,-77,91,0,108,89,-601];
console.log(`Given Array is ${array}`);

array.forEach((currentValue, index) => {
    console.log(`Element => ${currentValue} and its Index is=>${index}`);
    
});



console.log("=======Positive Numbers From Given Array Are=============");

const arrayNum = [1,-7,40,502,-77,91,0,108,89,-601];

arrayNum.forEach( (element) => {

    if (element>= 1) {

        console.log(element);   

    }

} );



console.log("=======Negative  Numbers From Given Array Are=============");

const arrayNum1 = [1,-7,40,502,-77,91,0,108,89,-601];

arrayNum1.forEach( (element) => {

    if (element<= 0) {

        console.log(`${element}`);   

    }

} );


console.log("======= Find Even Numbers,Using forEach() with arrow function ===========");

const array1 = [1,-7,40,502,-77,91,0,108,89,-601];

array1.forEach( (element) => {

    if (element%2 == 0) {

        console.log(element);   

    }

} );
console.log("==================Sum of All elements From Above Array Is ==================");

let sum = 0;
array.forEach(n => sum+=n);
    console.log(sum);
    




console.log(`=================Even Index and Its value===========================`);



array.forEach((currentValue, index) => {
    if (index%2==0) {
        console.log(`Even Index ${index} and its value ${currentValue}`);
        
    }
});

    

