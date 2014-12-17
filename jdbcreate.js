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
var db = new JsonDB("myDataBase", true, true);
var entire = db.getData("/");

try {
var data = db.getData('/'+currentDate);
} catch(error) {
//The error will tell you where the DataPath stopped. In this case test1
//Since /test1/test does't exist.
db.push('/' + currentDate, {
    Entries: 0,
    Passes: 0
});
}
