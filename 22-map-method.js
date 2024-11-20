const array = [3, 6, 2, 1, 9, 4];

//            [9, 36, 4, 4, 81, 16]

const arraySquare = array.map( (element) => {

    return element * element;

});

console.log(array);

console.log(arraySquare);

console.log(`======== filter() method to get even numbers ==============`);

const arrayNum = [3, 6, 2, 1, 9, 4];

const arrayEven = arrayNum.filter( (element) => {

    return element %2 == 0;

} );

console.log(arrayEven);




console.log(`========== reduce() method ================= `);

const arrayNumber = [3, 6, 2, 1, 9, 4]; 

const sum = arrayNumber.reduce( (runningTotal, element) => {

    return runningTotal + element;

}, 0);

console.log(sum);