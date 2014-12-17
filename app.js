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
var db = new JsonDB("myDataBase", true, true);
var entire = db.getData("/");
//Verify current data or create a new day
try {
var data = db.getData('/'+currentDate);
} catch(error) {
//catches the error and creates a new database entry for the day.
db.push('/' + currentDate, {
    Entries: 0,
    Passes: 0
});
}

//declare johnny-five board
var five = require('johnny-five')
var board = new five.Board()
board.on("ready", function() {

    // Create a new `sensor` hardware instance.
    sensor1 = new five.Sensor({  
        pin: "A0",
          freq: 2000
    });
    sensor2 = new five.Sensor({
        pin: "A1",
        freq: 2000
    });

    //scale sensor A0 between 0-10     
    sensor1.scale([0, 10]).on("data", function() {
        if (this.value > 0) {
            //passing variables 
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
    });

    //scale sensor A1 between 0-10
    sensor2.scale([0, 10]).on("data", function() {
        if (this.value > 1) {
            //Configure node-json-db
            var entries = db.getData("/" + currentDate + "/Entries");
            var passes = db.getData("/" + currentDate + "/Passes");
            var entriesAdd = entries + 1;
            var passesAdd = passes + 1;
            //updates the json with a new entry
            console.log('Entry Detected, I am inputting ' + entriesAdd + ' to the entries.');
            db.push('/' + currentDate, {
                Entries: entriesAdd,
                Passes: passes
            });
        };
    });
});