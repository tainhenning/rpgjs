let currentGrid, battleBool, mainMenuPosition, currentScene, canTalk, currentNPC, en;
function setup()
{
	lastBattleDialogBoxOpened = 0;
	canTalk = false;
	currentNPC = 0;
	b = new Bump(PIXI);
	battleBool = false;
	let scene3, scene1;
	scene3 = defineScene(grid2, null, null, null, null, (app.width - 32)/2, (app.height - 32)/2, (app.width - 32)/2 - (32 * 1), (app.height - 32)/2 - (32 * 26));
	scene1 = defineScene(grid, null, scene3, null, null, (app.width - 32)/2, (app.height - 32)/2, (app.width - 32)/2 - (32 * 23), (app.height - 32)/2 - (32 * 26));
	scene3.leftScene = scene1;
	
	sprite = player(sprite, (app.width - 32)/2, (app.height - 32)/2);
	scene1.addChild(sprite);

	scene1.visible = true;

	mainMenu = mainMenuSetup();

	dialog = dialogSetup();

	mainBackground = new PIXI.Graphics();
	mainBackground.beginFill(0x34);
	mainBackground.drawRect(0,0,app.width,app.height);
	mainBackground.endFill();

	app.stage.addChild(mainBackground);
	app.stage.addChild(scene3);
	app.stage.addChild(scene1);
	app.stage.addChild(mainMenu);
	app.stage.addChild(dialog);

	currentScene = scene1;
	state = play;

	uniforms = {}
	uniforms.time =  {
		type:"f",
		value:0
	}
	uniforms.resolution = {
		type:"v2",
		value:[app.width,app.height]
	}

	shaderCode = document.getElementById("shader").innerHTML;
	shaderTestCode = document.getElementById("shader2").innerHTML;
	battleEntryAnimationEnabled = false;
	battleEntryAnimationTimer = 0;



	app.ticker.add(delta => gameLoop(delta))
}

highlight = new PIXI.TextStyle({
	fill: "white", fontFamily: "8bit", fontSize: 50
});
nonhighlight = new PIXI.TextStyle({
	fill: "black", fontFamily: "8bit", fontSize: 50
});
