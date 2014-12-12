//include lowdb
var low = require('lowdb')
var db = low('db.json')
//Fixing Date
var currentTime = new Date()
var month = currentTime.getMonth() + 1
var day = currentTime.getDate()
var year = currentTime.getFullYear()
var currentDate = (month + "/" + day + "/" + year)
var currentEntry = db('traffic').where({date: currentDate}).pluck('entry').value()[0]
var currentStreet = db('traffic').where({date: currentDate}).pluck('street').value()[0]

console.log('The current entries are ' + currentEntry + ' and the current street crossings are ' + currentStreet);
