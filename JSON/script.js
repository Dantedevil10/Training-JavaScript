//JSON = (javascript Object notation) data-interchange format
// used for exchanging data between a server and a web application
// JSON = {key:value} or [value1,value2,value3] 
//
//       Json.stringfy() = converte um objeto js para uma string json
//       json.parse() = converte uma string json para um objeto js

// JSON Só aceita ("") aspas Duplas




const names = ['Spongebob' ,'Squidward', 'Patrick'];    

const jsonnames = JSON.stringify(names);
console.log(jsonnames);

const names2 = `["Spongebob" ,"Squidward", "Patrick"]`;    

const jsonnames2 = JSON.parse(names2);
console.log(jsonnames2);

//neste exemplo ainda Não usei o arquivo .json 👆


fetch("Names.json")
.then(response => response.json())
.then(values => values.forEach(value => console.log(value)))