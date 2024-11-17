function Bank(bankName,location,ifscCode,branchCode){
        this.bankName=bankName;
        this.location=location;
        this.ifscCode=ifscCode;
        this.branchCode=branchCode;
}

const yesBank = new Bank("Yes Bank","Nagar","yes67889","nagar5678");
console.log(yesBank);

console.log(`----------------------------------------------------------------------------------------------`);

const sbiBank = new Bank("State Bank Of India","Satara","sbi678890","satra5678");
console.log(sbiBank);
console.log(`----------------------------------------------------------------------------------------------`);


const mahBank = new Bank("Maharashtra Bank","Pune","mah67889","mah1235678");
console.log(yesBank);
console.log(`----------------------------------------------------------------------------------------------`);

const axisBank = new Bank("Axis Bank","Mumbai","AxisBank67889","mumbai788678");
console.log(axisBank);

console.log(`=============================Prototype==================================================`);

Bank.prototype.openTime = "9AM IST";
console.log(Bank.prototype.openTime);
console.log(`----------------------------------------------------------------------------------------------`);

Bank.prototype.closeTime = "6PM IST";
console.log(Bank.prototype.closeTime);

console.log(`================================Bank Name Its Open And Close Time =========================================================`);


console.log(`Opening Time Of SBI Bank is : ${sbiBank.openTime} And Closing Time is : ${sbiBank.closeTime} `);
console.log(`----------------------------------------------------------------------------------------------`);

console.log(`Bank Name of Object axisBank is : ${axisBank.bankName} And Its Closing Time is:${axisBank.closeTime}`);
console.log(`----------------------------------------------------------------------------------------------`);

console.log(`Bank Name is : ${yesBank.bankName} And Its Branch  Code is : ${yesBank.branchCode} ,Open Time is:${yesBank.openTime}`);



