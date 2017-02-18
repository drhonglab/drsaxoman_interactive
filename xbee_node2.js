/* var SerialPort = require("serialport");
var serialport = new SerialPort("/port c:usbmodem1421",{
  baudrate: 9600,


});
serialport.on('open', function(){
  console.log('Serial Port Opend');
  serialport.on('data', function(data){
      console.log(data[0]);
  });
});

*/


var SerialPort = require("serialport");
//var serialport = new SerialPort("/dev/cu.usbserial-DA01MHA4");
 var serialport = new SerialPort("/dev/cu.usbserial-DA01MHA4");





serialport.on('open', function(){
  console.log('Serial Port Opend');
  serialport.on('data', function(data){


     data=data.toString('utf8');
     data1 =data.substring(0,1);
     data2 =data.substring(2,5);
         data3 =data.substring(5,8);



                 console.log(data);


     
  });
});
