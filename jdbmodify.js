//Fixing Date
var currentTime = new Date()
var month = currentTime.getMonth() + 1
var day = currentTime.getDate()
var year = currentTime.getFullYear()
var currentDate = (month + "-" + day + "-" + year)

var JsonDB = require('node-json-db');
//The second argument is used to tell the DB to save after each push
//If you put false, you'll have to call the save() method.
//The third argument is to ask JsonDB to save the database in an human readable format. (default false)
var db = new JsonDB("myDataBase", true, false);

var entire = db.getData("/");
console.log(entire);

var entries = db.getData("/"+currentDate+"/Entries");
console.log('the number of entries is ' +parseInt(entries));

var passes = db.getData("/"+currentDate+"/Passes");
console.log('the number of passes is ' +parseInt(passes));

