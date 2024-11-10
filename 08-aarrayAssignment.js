const fruits_seasonal =["Banana","Orange","Apple","Mango","WaterMelon"];
console.log(fruits_seasonal);

let array=fruits_seasonal[0];
console.log(`=============First element of array=================`);

console.log(array);
let array1=fruits_seasonal[fruits_seasonal.length-1]
console.log(`=============Last element of array=================`);

console.log(array1);
fruits_seasonal.unshift(`Papaya`);
console.log(`=============Add Papaya before Banana=================`);

console.log(fruits_seasonal);

fruits_seasonal.splice(4,1);
console.log(`=============Remove Mango =================`);

console.log(fruits_seasonal);

fruits_seasonal.push(`Pineapple`);
console.log(`=============Insert Pineaple at last position=================`);

console.log(fruits_seasonal);

fruits_seasonal.splice(4,0,`Dragon Fruit`)
console.log(`=============Insert Drangon Fruit before Water Melon=================`);

console.log(fruits_seasonal);

fruits_seasonal.splice(2,1,`Kiwi`)
console.log(`=============Replace Orange with Kiwi=================`);

console.log(fruits_seasonal);

let slice=fruits_seasonal.slice(1,4);
console.log(`=============Starting Index 1 to 4=================`);

console.log(slice);
let last = fruits_seasonal.slice(fruits_seasonal.length-3)
console.log(`==============Last Three elements==================`);

console.log(last);







