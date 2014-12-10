//include lowdb
var low = require('lowdb')
var db = low('db.json')
//Fixing Date
var currentTime = new Date()
var month = currentTime.getMonth() + 1
var day = currentTime.getDate()
var year = currentTime.getFullYear()
var thedate = (month + "/" + day + "/" + year)

db('traffic').push({ date: thedate, street: 'street', entry: 'entry'	})