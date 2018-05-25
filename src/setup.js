let currentGrid, previousScene, thisScene, battleBool;
function setup()
{
	battleBool = false;
	scene1 = new PIXI.DisplayObjectContainer();

	sprite = player(sprite,scene1, (window.innerWidth - 32)/2, (window.innerHeight - 32)/2);

	scene1 = loadGrid(grid, scene1);
	scene1.addChild(sprite);
	scene1.vx = 0;
	scene1.vy = 0;


	app.stage.addChild(scene1);

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
	if(battleBool == false)
	{
		playerMovement(sprite,scene1);
	}

	wallDetection(scene1);
	if((sprite.vx != 0 || sprite.vy != 0) && !battleBool)
	{
		battleChance = Math.floor(Math.random() * 100);
		if(battleChance == 1)
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
			
			menuMovement();
		}
	}
	if(battleBool)
		menuMovement();
}
