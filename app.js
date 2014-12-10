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

  //scale sensor A0 between 1-2
  sensor1.scale([0, 10]).on("data", function() {
    if(this.value < 1){
	console.log('A0 Inactive');	
    } else{
       	  console.log('A0 has motion');
       };
  });

  //scale sensor A1 between 1-2
  sensor2.scale([0, 10]).on("data", function() {
    if(this.value < 1){
	console.log('A1 Inactive'); 
    } else{
          console.log('A1 has motion');
	};
  });

});

