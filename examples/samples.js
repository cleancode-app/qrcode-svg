var QRCode = require('../lib/qrcode.js');

//Sample 1
var qrcode = new QRCode("Hello World!");

//Sample 2
var qrcode = new QRCode({
  content: "http://github.com/",
  padding: 4,
  width: 256,
  height: 256,
  color: "#000000",
  background: "#ffffff",
  ecl: "M"
});


//Sample 3
var qrcode = new QRCode({
  content: "http://github.com/",
  width: 128,
  height: 128,
  color: "blue",
  background: "beige",
  ecl: "H"
});

var svg = qrcode.svg();
console.log(svg);

