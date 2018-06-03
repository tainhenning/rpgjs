function gameLoop(delta)
{
	state(delta)
}
function play(delta)
{
	if(!battleBool)
	{
		playerMovement(sprite,currentScene);
		collisionDetection(currentScene);
	}

	if((sprite.vx != 0 || sprite.vy != 0) && !battleBool)
	{
		battleChance = Math.floor(Math.random() * 100000000);
		if(battleChance == 1)
		{
			battleBool = true;
			scene2 = battleSetup();
			currentScene.visible = false;
			scene2.visible = true;
			en = enemy();
			scene2.addChild(en);

			eHealth = new PIXI.Text(getEnemyHealth().toString(), nonhighlight);
			eHealth.position.set(50,50);
			scene2.addChild(eHealth);
			pHealth = new PIXI.Text(getPlayerHealth().toString(), highlight);
			pHealth.position.set((25*32)/2 + 50,(25*32) - (25*32)/3 + 5);
			
			scene2.addChild(pHealth);
			app.stage.addChild(scene2);
			
			battleMenuMovement();
		}
	}
	if(battleBool)
		battleMenuMovement();
	if(mainMenu.visible){
		mainMenuMovement();
	}
}
