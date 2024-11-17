const employee=
`{
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

console.log(`=====================convert to object=================`);

console.log(typeof employee);
const employeeDataInObjectFormat1 = JSON.parse(employee)
//console.log(typeof employeeDataInObjectFormat1);




