function gameLoop(delta)
{
	state(delta)
}
function play(delta)
{
	simpleShader = new PIXI.AbstractFilter('',shaderCode, uniforms);
	testShader = new PIXI.Filter('',shaderTestCode,uniforms);
	mainBackground.filters = [testShader];
	uniforms.time.value += 0.01;

	currentTime = new Date();
	currentSecond = new Date().getSeconds();

	if(battleEntryAnimationEnabled)
	{
		battleEntryAnimationTimer += 1/60;
		if(battleEntryAnimationTimer > 1.5)
		{
			battleMusic.playFrom(22);
			battleEntryAnimationEnabled = false;
			battleEntryAnimationTimer = 0;
			app.stage.filters = [];
			newBattle();
		}
	}
	if((sprite.vx != 0 || sprite.vy != 0) && !battleBool && !battleEntryAnimationEnabled)
	{
		battleChance = Math.floor(Math.random() * 100);
		if(battleChance == 0)
		{
			sprite.vx = 0;
			sprite.vy = 0;
			currentScene.vx = 0;
			currentScene.vy = 0;
			sprite.stopAnimation();
			sprite.playAnimation([1]);
			battleEntryAnimationEnabled = true;
			toBattleTransitionSound.playFrom(1);
			dungeonMusic.pause();
			battleMusic.loop = true;
		}
	}
	
	if(!battleBool && !battleEntryAnimationEnabled)
	{
		playerMovement(sprite,currentScene);
		collisionDetection(currentScene);
	}

	else if(battleBool)
	{
		battleMenuMovement();
		battleBackground.filters = [simpleShader];

	}
	
	if(mainMenu.visible){
		mainMenuMovement();
	}
}

