function defineScene(grid, leftScene, rightScene, upScene, downScene, characterPosX, characterPosY)
{
	let scene = new PIXI.DisplayObjectContainer();
	scene.grid = grid;
	scene.leftScene = leftScene;
	scene.rightScene = rightScene;
	scene.upScene = upScene;
	scene.downScene = downScene;
	scene.cPosX = characterPosX;
	scene.cPosY = characterPosY;
	loadGrid(grid, scene);
	scene.vx = 0;
	scene.vy = 0;
	return scene;
}