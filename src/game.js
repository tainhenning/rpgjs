function gameLoop(delta)
{
	state(delta)
}
function play(delta)
{
	currentSecond = new Date().getSeconds();

	updateShaders();
	soundManagement();
	enemyDamageManagement();

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

function updateShaders()
{
	simpleShader = new PIXI.AbstractFilter('',shaderCode, uniforms);
	testShader = new PIXI.Filter('',shaderTestCode, uniforms);
	mainBackground.filters = [testShader];
	uniforms.time.value += 0.01;
}

function soundManagement()
{
	if(monsterDamageSound.playing)
	{
		monsterDamageSound.timePlayed+= 1/60;
		if(monsterDamageSound.timePlayed > 1.5)
		{
			monsterDamageSound.pause();
			monsterDamageSound.timePlayed = 0;
		}
	}
}

function enemyDamageManagement()
{
	if(enemyDamaged)
	{
		timeDamaged+=1/60;
		console.log(timeDamaged);
		if(timeDamaged > 1.6)
		{
			console.log("done");
			en.playAnimation();
			timeDamaged = 0.0;
			enemyDamaged = false;
		}
		else if(timeDamaged > 1.2)
		{
			en.stopAnimation();
		}
	}
}