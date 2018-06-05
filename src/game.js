function gameLoop(delta)
{
	state(delta)
}
function play(delta)
{
	currentTime = new Date();
	currentSecond = currentTime.getSeconds();
	if(!battleBool)
	{
		playerMovement(sprite,currentScene);
		collisionDetection(currentScene);
	}

	if((sprite.vx != 0 || sprite.vy != 0) && !battleBool)
	{
		battleChance = Math.floor(Math.random() * 1);
		if(battleChance == 0)
			newBattle();
	}
	if(battleBool)
	{
		battleMenuMovement();

	}
	if(mainMenu.visible){
		mainMenuMovement();
	}
}

