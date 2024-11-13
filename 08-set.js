let mySet =new Set();

mySet.add(10);
mySet.add(20);
mySet.add(30);
mySet.add(40);
mySet.add(50);
console.log(mySet);


mySet.add(40);//Adding Duplicate elements

console.log(`set Size is : ${mySet.size}`);
const is30Available = mySet.has(300);
console.log(`Is 30 element present : ${is30Available}`);



mySet.delete(20);


console.log("======================Traversing set collection============================");

for (const element of mySet) {
    console.log(element);
    
}