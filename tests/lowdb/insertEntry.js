//include lowdb
var low = require('lowdb')
var db = low('db.json')
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
var addEntry = parseInt(currentEntry) + 1;
var addStreet = parseInt(currentStreet) + 1;

//adding an entry
function insertEntry() {
    db('traffic').find({
        date: currentDate
    }).assign({
        entry: addEntry
    })
    db.save()
    console.log(currentEntry);
};
insertEntry();