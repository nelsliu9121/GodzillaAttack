//Canvas stuff goes here
"use strict";
//CONSTANTS

//GLOBALS

// start drawing
function Animate()
{
	var deltaTime = calculateDeltaTime();	

	enemiesUpdate(deltaTime);
	godzillaUpdate(deltaTime);

	drawBackground();
	level.getSection(level.currentSection).draw();
	drawGodzilla();
	drawHelicopter();
	
	window.requestAnimFrame(Animate);
	
}

function drawBackground()
{
	ctx.fillStyle="gray";
	ctx.fillRect(0,0,CANVAS_WIDTH,CANVAS_HEIGHT);
}

function handleCollisions(){
	helicopter.forEach(function(heli)
	{
		if(collides(heli, godzilla))
		{
			console.log(godzilla.health);
			godzilla.health -= 5;
		}
	});
	
	level.getSection(level.currentSection).buildings.forEach(function(building)
	{
		
		if(collides(building, godzilla))
		{
			console.log("Building destroyed");
		}
	});
}