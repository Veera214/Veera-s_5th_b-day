var canvas = new fabric.Canvas('myCanvas');
 var x= document.getElementById("myAudio");
var headcount=0;
var hc=0;
yes_image= "yes.png";
no_image="https://image.shutterstock.com/image-vector/miss-you-vector-sign-on-600w-618418850.jpg";


function playSound()
{x.play();
}


function stopsound()
{
x.pause();
x.currentTime = 0;;
	}
	
document.onkeydown = function(e)
{
	e = e || window.event;
		var key = e.which || e.keyCode;
		if(key==="&#128147")
		{
			playsound();
		}
	};
	
	document.onkeyup = function(e){
		e = e || window.event;
		var key = e.which || e.keyCode;
		if(key==="&#128147")
		{
			stopsound();
		}
	
	};