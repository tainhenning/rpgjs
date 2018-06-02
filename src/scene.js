function defineScene(grid, leftScene, rightScene, upScene, downScene, characterPosX, characterPosY, biasX, biasY)
{
	let scene = new PIXI.DisplayObjectContainer();
	scene.grid = grid;
	scene.leftScene = leftScene;
	scene.rightScene = rightScene;
	scene.upScene = upScene;
	scene.downScene = downScene;
	scene.cPosX = characterPosX;
	scene.cPosY = characterPosY;
	scene.biasX = biasX;
	scene.biasY = biasY;
	loadGrid(scene);
	scene.vx = 0;
	scene.vy = 0;
	scene.visible = false;
	return scene;
}