const fs = require('fs');
const obj = require("readline-sync")

//create array for data to push to json
let emps = new Array();

module.exports.logRecord = (firstName, lastName, gender, email) => {
    var date = new Date();
    let emp = {"firstName": firstName, "lastName":lastName, "gender":gender, "email":email, "data":date};
    emps.push(emp);
    debugger
}

module.exports.writeToFile = () => {
    
    var fileName = `./info.json`;
    let empString = JSON.stringify(emps);
    fs.writeFile("info.json", empString, {flag :'a'}, function(err) {
        if(!err){
            console.log(  "Record stored successfully...");
        }
    }); 
    debugger
}

/*
var empJson = JSON.parse(empObj);
console.log("Id is "+empJson.id);
//convert json to string 
var empString = JSON.stringify(empJson);
fs.writeFile("emp.json",empString,{flag:"a"},(err)=> {
    if(!err){
        console.log("Record stored successfully...")
    }
})
*/