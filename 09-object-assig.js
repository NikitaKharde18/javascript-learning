
console.log(`============================Added 5 Properties============================`);

let professor = {
    fullName :"Pooja Pawar",
    Email:"poojapawar.gmail.com",
    Address:"Pune",
    DoB:"11-11-96",
    isMarried: 'True',
    certificates : ["Hackers Rank","IFC cource"],

    degree: {
        Engineering:"CSS",
        PHD:"Adv Programming",
    }


}
console.log(professor);


console.log(`============================Nested Object============================`);

console.log(professor.degree.PHD);


console.log(`============================Add one new certificate oracle at 2nd index of array and traverse of array============================`);

professor.certificates.splice(2,0,"Oracle");

professor.certificates.push("Programing");

const arraycertificates = professor.certificates;



for (const element of arraycertificates) {

    console.log(element);

}



console.log(`============================Added New Property============================`);

professor.totalE = "14 yrs";
console.log(professor.totalE);
console.log(`============================Modify Existing property============================`);

professor.Address = "Mumbai";

console.log(professor);

professor.isMarried = "False";

console.log(professor);
console.log(`============================Last Element of the array============================`);

console.log(professor.certificates[professor.certificates.length-1]);
