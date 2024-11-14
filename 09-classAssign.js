class Vehicle {
    carName;
    average;
    speed;
    fuelType;
    cost;

    constructor(carName,average,engineNumber,fuelType,cost) 
    {
        this.carName = carName;
        this.average = average;
        this.engineNumber = engineNumber;
        this.fuelType = fuelType;
        this.cost = cost;

    }
    details(){

        console.log(`=====================Vehicle ${this.carName} Details============================ `);

        console.log(`Average: ${this.average}, EngineNumber: ${this.engineNumber}, Fueltype: ${this.fuelType}, Cost: ${this.cost}`);  

    }

}


const vehicleZest = new Vehicle("Zest", 20, "Z24894", "Petrol", "9lac");
vehicleZest.details();


const vehicleSwift = new Vehicle("Swift", 27, "Swift-24894", "Diesel", "7lac");
vehicleSwift.details();


const vehicleSkoda = new Vehicle("Skoda", 17, "Skoda_24894", "Petrol", "6lac");
vehicleSkoda.details();


const vehicleThar = new Vehicle("Thar", 12, "Thar-24894", "Petrol", "14lac");
vehicleThar.details();


const vehicleSuv = new Vehicle("SUV", 22, "SUV24894", "Diesel", "9.9lac");
vehicleSuv.details();








class College {
    

    constructor(collegeName,university,collegeAddress,departments) 
    {
        this.collegeName = collegeName;
        this.university = university;
        this.collegeAddress = collegeAddress;
        this.departments = departments;
        

    }
    diplay(){
        console.log(`=======================================College ${this.collegeName} Information =========================================`);

        console.log(`University: ${this.university}, College Address  : ${this.collegeAddress},  Total Departments : ${this.departments}`);  

    }

}

console.log("=================================College List And Its Information=================================================");


const collegeEms = new College("Dr.D.Y.Patil","Savitribai Phule Pune","Pune","5");
collegeEms.diplay();


const collegeRss = new College("EMS","YCMOU","Satara","6");
collegeRss.diplay();

const collegeMit = new College("MIT","MIT-WPU","Wakad","4");
collegeMit.diplay();

const collegeCoep = new College("COEP","COEP Tech-University","Mumbai","7");
collegeCoep.diplay();








