//include lowdb
var low = require('lowdb')
var db = low('db.json')
//Fixing Date
var currentTime = new Date()
var month = currentTime.getMonth() + 1
var day = currentTime.getDate()
var year = currentTime.getFullYear()
var thedate = (month + "/" + day + "/" + year)

//update the lowdb
db('traffic').find({ date: thedate }).assign({ street: '1'})
db.save()