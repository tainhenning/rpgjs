let currentGrid, battleBool, mainMenuPosition;

highlight = new PIXI.TextStyle({
	fill: "white"
});
nonhighlight = new PIXI.TextStyle({
	fill: "black"
});

function setup()
{
	
	battleBool = false;
	scene1 = new PIXI.DisplayObjectContainer();

	sprite = player(sprite,scene1, (window.innerWidth - 32)/2, (window.innerHeight - 32)/2);

	scene1 = loadGrid(grid, scene1);
	scene1.addChild(sprite);

	mainMenu = mainMenuSetup();

	statusBox = statusBoxSetup();	
	mainMenu.addChild(statusBox);

	app.stage.addChild(scene1);
	app.stage.addChild(mainMenu);


	currentGrid = grid;
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
		playerMovement(sprite,scene1);
	}

	wallDetection(scene1);
	if((sprite.vx != 0 || sprite.vy != 0) && !battleBool)
	{
		battleChance = Math.floor(Math.random() * 1);
		if(battleChance == 0)
		{
			battleBool = true;
			scene2 = battleSetup();
			scene1.visible = false;
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
	if(menu.visible){
		mainMenuMovement();
	}
}
