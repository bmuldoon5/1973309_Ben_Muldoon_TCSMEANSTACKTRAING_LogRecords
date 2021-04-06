const obj = require("readline-sync")
const log = require("./log")

//making readline variable
/*
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });
  */

var numEmployees = obj.question("How many employees do you want? ")


for(var i = 0; i < parseInt(numEmployees); i++){
    var firstName = obj.question("First Name : ")
    var lastName = obj.question("Last Name: ")
    var gender = obj.question("Gender: ")
    var email = obj.question("Email: ")
    log.logRecord(firstName, lastName, gender, email);
    debugger;
}

log.writeToFile();
debugger;