let bankSbi = {
    BankName:"SBI",
    IFCSCode:"sbi12345",
    Branch:"Pune",
    Workers:12,

}


let bankLocation={
    Street:"Clg Road",
    City:"Pune",
    Pin:2346,
}



console.log("========================Cloned bankSbi object==================================");

const bankSbiClone = Object.assign({},bankSbi)
console.log(bankSbiClone);


console.log("========================Cloned bankLocation object==================================");


const newCloneAdd = Object.assign({},bankLocation)
console.log(newCloneAdd);


console.log("===================Create the object using literals ,rateOfInterest==========================");


let rateOfInterest={
    homeLoanInterest:"5%",
    personalLoanInterest:"19%",
    dueInterest:"11%",

}
console.log(rateOfInterest);

console.log("===================Megre the step 1,2 and 4 into new object sbiDetails========================");


const sbiDetails = Object.assign( {},bankSbi, bankLocation,rateOfInterest)
console.log(sbiDetails);


//const sbiDetails = {...bankSbi, ...bankLocation, ...rateOfInterest};
//console.log(sbiDetails);
console.log("==========================Traverse Merged Object Using for in loop===========================");

for (const key in sbiDetails) {
 {
        
        console.log(`${key}: ${sbiDetails[key]}`);
        
    }
}

