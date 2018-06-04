let currentGrid, battleBool, mainMenuPosition, currentScene, canTalk, currentNPC;
function setup()
{
	lastBattleDialogBoxOpened = 0;
	canTalk = false;
	currentNPC = 0;
	b = new Bump(PIXI);
	battleBool = false;
	let scene3, scene1;
	scene3 = defineScene(grid2, null, null, null, null, (app.width - 32)/2, (app.height - 32)/2, (app.width - 32)/2 - (32 * 1), (app.height - 32)/2 - (32 * 27));
	scene1 = defineScene(grid, null, scene3, null, null, (app.width - 32)/2, (app.height - 32)/2, (app.width - 32)/2 - (32 * 23), (app.height - 32)/2 - (32 * 28));
	scene3.leftScene = scene1;
	
	sprite = player(sprite, (app.width - 32)/2, (app.height - 32)/2);
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

highlight = new PIXI.TextStyle({
	fill: "white", fontSize: 30
});
nonhighlight = new PIXI.TextStyle({
	fill: "black", fontSize: 26
});