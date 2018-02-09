var cson = prompt("CSON Code");
var a = JSON.parse(cson);
var counter = 0;
var interval = setInterval(function() {
//run code
counter++;
if(counter===a.length) {
clearInterval(interval);
}
},10);
