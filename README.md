johnny-five-pir-counter
=======================

This is my first attempt at creating a johnny-five app to control an arduino.  A lot of what I create in this project will be persistent through future applications.  I really wanted to learn how to record data being sent from a sensor for analyzation.

Used for creating a 2 way 90 degree people counter. Utilizes a breadboard to split 5v from an Arduino Nano and then pins A0/A1 to count two different sensors.

The goal of this sensor is for measuring pedestrian traffic in front of a business versus how many actually enter said business. This allows for testing atmospheres for new signage and various other methods of streetside advertisement.

Includes: johnny-five and LowDB(lodashDB)

Equipment Needed
----
An Arduino loaded with standard firmata(any will do the trick really,the goal of this example is to chain to a raspberry pi via bluetooth)
2x 3pin PIR sensors
1x breadboard(to split 5v off the arduino)
Any computer running node & johnny five

Instructions
----
git clone this repot
npm install
node app.js

app.js
----
Main file responsible for firing sensors and recording.

Future Features
----
* BLE interfacing using a LightBlue bean.
* Recording times of entry for later inclusion into a graph.