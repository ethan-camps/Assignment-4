
//Your Shape
var shape1;

var shape1x;

var shape1y;

//Other Shape

var shape2;

var shape2x;

var shape2y;




var mySize = 100;

var newSize = 200;

var someSize = 100;




var items = [1,2,3];

var shape = items[Math.floor(Math.random() * items.length)];

var otherShape = items[Math.floor(Math.random() * items.length)];





function setup() {

	createCanvas(windowWidth,windowHeight);
	background('#ffffff');

	// for drawing things, usually keep the background in the setup
 
myFillR = floor(random(0,255));
myFillG = floor(random(0,255));
myFillB = floor(random(0,255));





}

//============DRAW FUNCTION===============//

function draw() {

fill('magenta');
textSize(50);
text("The Trailing Shapes", windowWidth/4,100);


if(shape == 1){

fill(myFillR,myFillG,myFillB);
ellipse(mouseX,mouseY,mySize,mySize);


}

else if(shape == 2){

	fill(myFillR,myFillG,myFillB);
	rect(mouseX,mouseY,mySize,mySize);
}

else if(shape == 3){

	fill(myFillR,myFillG,myFillB);
	triangle(mouseX,mouseY,mouseX+mySize,mouseY,mouseX+mySize/2,mouseY+mySize);
}





				//send our drawing everytime the draw loops through
				//value that we pass in is a JSON object
				sendDrawing({

					'x':mouseX,
					'y':mouseY,
					'r':myFillR,
					'g':myFillG,
					'b':myFillB,
				
					
				
				

				

				});



}//END of DRAW


function mousePressed(){



	if(mousePressed){


		mySize = mySize + 100;


	}
	
	else{

	}

}






function keyPressed (){

	if(keyCode == UP_ARROW){

		mouseY = mouseY-10;


	}

	else if(keyCode == DOWN_ARROW){

		mouseY = mouseY+10;


	}

	else if(keyCode == RIGHT_ARROW){


		mouseX = mouseX+10;

	}

	else if(keyCode == LEFT_ARROW){


		mouseX = mouseX-10;


	}
}



		








function sendDrawing(message){

	socket.emit('drawing',message);
	//console.log(message);


}

function sendSize(message){

	socket.emit('size',message);
	console.log(message);
}



function drawOther(someX, someY, someR, someG, someB, someSize){

	var someSize = 100;

	fill(someR,someG,someB);

if(shape == 1){

fill(someR,someG,someB);
ellipse(someX,someY,someSize,someSize);


}

else if(shape == 2){

	fill(someR,someG,someB);
	rect(someX,someY,someSize,someSize);
}

else if(shape == 3){

	fill(someR,someG,someB);
	triangle(someX,someY,someX+someSize,someY,someX+someSize/2,someY+someSize);
}
			

}




			








