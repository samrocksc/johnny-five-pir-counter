//Fixing Date
var currentTime = new Date()
var month = currentTime.getMonth() + 1
var day = currentTime.getDate()
var year = currentTime.getFullYear()
var currentDate = (month + "-" + day + "-" + year)

//Initializing JsonDB
var JsonDB = require('node-json-db');
//The second argument is used to tell the DB to save after each push
//If you put false, you'll have to call the save() method.
//The third argument is to ask JsonDB to save the database in an human readable format. (default false)
var db = new JsonDB("myDataBase", true, false);
var entire = db.getData("/");

function insertEntry() {
    //Configure node-json-db
    var entries = db.getData("/" + currentDate + "/Entries");
    var passes = db.getData("/" + currentDate + "/Passes");
    var entriesAdd = entries + 1;
    var passesAdd = passes + 1;
    //updates the json with a new pass
    console.log('Pass detected, I am inputting ' + passesAdd + ' to the passes.');
    db.push('/' + currentDate, {
        Entries: entries,
        Passes: passesAdd
    });

};

insertEntry();
insertEntry();
insertEntry();