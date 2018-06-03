let currentGrid, battleBool, mainMenuPosition, currentScene, canTalk, currentNPC;
highlight = new PIXI.TextStyle({
	fill: "white"
});
nonhighlight = new PIXI.TextStyle({
	fill: "black"
});
function setup()
{
	canTalk = false;
	currentNPC = 0;
	b = new Bump(PIXI);
	battleBool = false;
	let scene3, scene1;
	scene3 = defineScene(grid2, null, null, null, null, 500, 250, 432, -350);
	scene1 = defineScene(grid, null, scene3, null, null, (1000 - 32)/2, (1000 - 32)/2, -232, -350);
	scene3.leftScene = scene1;
	
	sprite = player(sprite, (1000 - 32)/2, (1000 - 32)/2);
	scene1.addChild(sprite);

	scene1.visible = true;

	mainMenu = mainMenuSetup();

	dialog = dialogSetup();

	app.stage.addChild(scene3);
	app.stage.addChild(scene1);
	app.stage.addChild(mainMenu);
	app.stage.addChild(dialog);

	currentScene = scene1;
	state = play;
	app.ticker.add(delta => gameLoop(delta))
}

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
		activeDialogText();
	}

	if((sprite.vx != 0 || sprite.vy != 0) && !battleBool)
	{
		battleChance = Math.floor(Math.random() * 1);
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
