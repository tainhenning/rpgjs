function gameLoop(delta)
{
	state(delta)
}
function play(delta)
{
	simpleShader = new PIXI.AbstractFilter('',shaderCode, uniforms);
	uniforms.time.value += 0.01;

	currentTime = new Date();
	currentSecond = new Date().getSeconds();

	if(!battleBool)
	{
		playerMovement(sprite,currentScene);
		collisionDetection(currentScene);
	}

	if((sprite.vx != 0 || sprite.vy != 0) && !battleBool)
	{
		battleChance = Math.floor(Math.random() * 1);
		if(battleChance == 1)
		{
			newBattle();

		}
	}
	if(battleBool)
	{
		battleMenuMovement();
		battleBackground.filters = [simpleShader];

	}
	if(mainMenu.visible){
		mainMenuMovement();
	}
}

