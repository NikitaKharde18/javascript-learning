function squareOfWorldLength(string){
var length =string.length;
//console.log(`total ${length}`);

var returnValue=length*length
return returnValue;
}

var returnValue = squareOfWorldLength("Javascript");
console.log(`Given string is javascript ant its lenght square is ${returnValue}`);
console.log(`--------------------------------------------------`);


var returnValue = squareOfWorldLength(" Google Chrome");
console.log(`Given string is Google Chrome  ant its lenght square is ${returnValue}`);
console.log(`--------------------------------------------------`);

var returnValue = squareOfWorldLength("web developer smart");
console.log(`Given string is Web Developer smart ant its lenght square is ${returnValue}`);
console.log(`--------------------------------------------------`);



function stringOpertion(givenString){
      var strlength=  givenString.length;
       var words=givenString.split(" ");
       console.log(`Total length of string is ${strlength}`);
       console.log(`--------------------------------------------------`);
       var totalWords=words.length;
       var resultLength=totalWords;
       console.log(`Total number of words in string is ${resultLength}`);
       console.log(`--------------------------------------------------`);
       var strDiv =strlength/resultLength;
       console.log(`Total length of string is divide by total number words is ${strDiv}  `);
       console.log(`--------------------------------------------------`);
       var strmultiply =strlength*totalWords;
       console.log(`Total length of string multiple by total number words is ${strmultiply}  `);
       
}
stringOpertion("I am Angular Developer");







