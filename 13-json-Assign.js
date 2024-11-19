/*const employee = `{
    "name": "Alex Melon",
    "id":"E00245",
    "role":["Dev","DBA"],
    "age":23,
    "doj":"11-12-2019",
    "married":false,
    "address":{
    "street":"32,La st",
    "city":"Innsbruck",
    },
    "referred-by":"E0012"
}`;
*/












const empInfo =`
{

    "name": "Aleix Melon",

    "id": "E00245",

    "age": 23,

    "isMarried": false,

    "role": ["Dev", "DBA"],

    "doj":"11-12-2019",

    "address" : {

        "street": "30, Laham St.",

        "city": "Innsbruck",

        "country": "Austria"

    },

    "referred-by": "E0012"

}`;






console.log(`=====================Convert string to object=================`);

console.log(typeof empInfo);
const empInformation = JSON.parse(empInfo);
console.log(typeof empInformation);
console.log(`=======================================================================`);

console.log(empInformation.role[0]);

console.log(`============================Last Name==================================`);

const namee=empInformation.name.split(" ")[1];
console.log(namee);
console.log(`============================Joining Year===============================`);

const year = empInformation.doj.split("-")[2];
console.log(year);








