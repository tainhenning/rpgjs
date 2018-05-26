let currentGrid, previousScene, thisScene, battleBool, mainMenuPosition;

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
	scene1.vx = 0;
	scene1.vy = 0;

	menu = new PIXI.DisplayObjectContainer();
	menuBox = new PIXI.Graphics();
	menuBox = new PIXI.Graphics();

	menuBox.beginFill(0xf44242);
	menuBox.drawRect(0,0,(25*32)/3,(25*32)/5);
	menuBox.endFill();
	menu.addChild(menuBox);

	statusText = new PIXI.Text("Status", highlight);
	statusText.position.set(5,10);

	itemsText = new PIXI.Text("Items", nonhighlight);
	itemsText.position.set(5,40);

	equipText = new PIXI.Text("Equip", nonhighlight);
	equipText.position.set(5,70);

	saveText = new PIXI.Text("Save", nonhighlight);
	saveText.position.set(5,100);

	menu.addChild(saveText);
	menu.addChild(equipText);
	menu.addChild(itemsText);
	menu.addChild(statusText);

	mainMenuPosition = 1;

	menu.visible = false;

	app.stage.addChild(scene1);
	app.stage.addChild(menu);
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
		battleChance = Math.floor(Math.random() * 10);
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
			
			battleMenuMovement();
		}
	}
	if(battleBool)
		battleMenuMovement();
	if(menu.visible)
		mainMenuMovement();
}
