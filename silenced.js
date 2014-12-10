//include lowdb
var low = require('lowdb');
var db = low('db.json');
    //Fixing Date
var currentTime = new Date()
var month = currentTime.getMonth() + 1
var day = currentTime.getDate()
var year = currentTime.getFullYear()
var currentDate = (month + "/" + day + "/" + year)
    //manipulating Data
var currentEntry = db('traffic').where({
    date: currentDate
}).pluck('entry').value()[0]
var currentStreet = db('traffic').where({
    date: currentDate
}).pluck('street').value()[0]

function addEntry() {
    db('traffic').find({
        date: currentDate
    }).assign({
        entry: parseInt(currentEntry) + 1
    });
    db.save();
}

function addStreet() {
    db('traffic').find({
        date: currentDate
    }).assign({
        street: parseInt(currentStreet) + 1
    });
    db.save();
}

//declare johnny-five board
var five = require('johnny-five')
var board = new five.Board()
board.on("ready", function() {

// Create a new `sensor` hardware instance.
     
    sensor1 = new five.Sensor({  
        pin: "A0",
          freq: 1000 
    });
    sensor2 = new five.Sensor({
        pin: "A1",
        freq: 1000
    });

    //scale sensor A0 between 0-10
     
    sensor1.scale([0, 10]).on("data", function() {
        if (this.value > 0) {
            console.log('A0 detects motion');
            //add an entry
            addEntry();
            console.log(currentEntry);
        }; 
    });

    //scale sensor A1 between 0-10
    sensor2.scale([0, 10]).on("data", function() {
        if (this.value > 1) {
            console.log('A1 detects motion');
            //add a street pass
            addStreet();
            console.log(currentStreet);
        };
    });
});