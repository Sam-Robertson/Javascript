// JavaScript Document



var pumpkinpatch = "";
var numpumpkins = 0;
var gametitle = "Pumpkin Game";

document.getElementById("title").innerHTML = gametitle;
document.getElementById("numbertitle").innerHTML = numpumpkins;

function addPumpkin(event) {

	numpumpkins ++;
	var yAdjust = 8;
	var xAdjust = 360;
	var x = event.clientX - xAdjust;
    var y = event.clientY + yAdjust;
	var randomPumpkin = Math.floor((Math.random() * 4) + 1);
	pumpkinpatch += "<div class='pumpkin" + randomPumpkin + "' style='left: " + x + "px; top:" + y + "px;'></div>";
	document.getElementById("container").innerHTML = pumpkinpatch;


}







// ignore the code down here, it is Jquery.
$("#container").mousemove(function(e){
      $('.follow').css({'top': e.clientY + 20, 'left': e.clientX - 50});
});