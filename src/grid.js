
function loadGrid(scene)
{
	gGrid = scene.grid;
	biasX = scene.biasX;
	biasY = scene.biasY;
	for(var i = 0; i < gGrid.length; i++)
	{
		for(var j = 0; j < gGrid[i].length; j++)
		{
			if(gGrid[i][j] == 1) 
			{
				let id = PIXI.loader.resources["./src/lib/floorsheet.json"].textures; 		
				let wall = new Sprite(id["floor_vines0.png"]);
				wall.y = (32 * i) + biasY;
				wall.x = (32 * j) + biasX;	
				wall.width = 32;
				wall.height = 32;
				scene.addChild(wall);

			}
			else if(gGrid[i][j] == 0 || gGrid[i][j] == 11)
			{
				let id = PIXI.loader.resources["./src/lib/floorsheet.json"].textures; 		
				let floor = new Sprite(id["crystal_floor2.png"]);
				floor.y = (32 * i) + biasY;
				floor.x = (32 * j) + biasX;	
				floor.width = 32;
				floor.height = 32;
				scene.addChild(floor);
			}
			else if(gGrid[i][j] == 10)
			{
				posY = (32 * i) + biasY;
				posX = (32 * j) + biasX;
				fighterNPC = ftr(posX, posY);
				scene.addChild(fighterNPC);

			}
		}
	}
}
function collisionDetection(scene)
{
	currentGrid = scene.grid;
	let prevx = sprite.x;
	let prevy = sprite.y;
	let prevsx = scene.x;
	let prevsy = scene.y;
	sprite.x += sprite.vx;
	sprite.y += sprite.vy;
	scene.x += scene.vx;
	scene.y += scene.vy;
	let cgx = Math.ceil((sprite.x - scene.biasX)/32);
	let cgy = Math.ceil((sprite.y - scene.biasY)/32);
	let fgx = Math.floor((sprite.x - scene.biasX)/32);
	let fgy = Math.floor((sprite.y- scene.biasY)/32);
	if(currentGrid[fgy][fgx] == 1 || currentGrid[cgy][fgx] == 1 || currentGrid[cgy][cgx] == 1 || currentGrid[fgy][cgx] == 1) 
	{
		sprite.x = prevx;
		sprite.y = prevy;
		sprite.vy = 0;
		sprite.vx = 0;
		scene.x = prevsx;
		scene.y = prevsy;
		scene.vx = 0;
		scene.vy = 0;
	}
	if(currentGrid[fgy][fgx] == 2 || currentGrid[cgy][fgx] == 2 || currentGrid[cgy][cgx] == 2 || currentGrid[fgy][cgx] == 2) 
	{
		scene.rightScene.visible = true;
		scene.visible = false;
		scene.removeChild(sprite);
		
		scene.vx = 0;
		scene.vy = 0;
		scene.x = 0;
		scene.y = 0;

		sprite.vx = 0;
		sprite.vy = 0;
		sprite.x = (app.width - 32)/2;
		sprite.y = (app.height - 32)/2;
		sprite.stopAnimation();

		scene.rightScene.addChild(sprite);
		currentScene = scene.rightScene;
	}
	if(currentGrid[fgy][fgx] == 3 || currentGrid[cgy][fgx] == 3 || currentGrid[cgy][cgx] == 3 || currentGrid[fgy][cgx] == 3) 
	{
		scene.leftScene.visible = true;
		scene.visible = false;
		scene.removeChild(sprite);
		
		scene.vx = 0;
		scene.vy = 0;
		scene.x = 0;
		scene.y = 0;

		sprite.vx = 0;
		sprite.vy = 0;
		sprite.x = (app.width - 32)/2;
		sprite.y = (app.height - 32)/2;
		sprite.stopAnimation();

		scene.leftScene.addChild(sprite);
		currentScene = scene.leftScene;
	}
	if(currentGrid[fgy][fgx] == 10 || currentGrid[cgy][fgx] == 10 || currentGrid[cgy][cgx] == 10 || currentGrid[fgy][cgx] == 10) 
	{
		sprite.x = prevx;
		sprite.y = prevy;
		sprite.vy = 0;
		sprite.vx = 0;
		scene.x = prevsx;
		scene.y = prevsy;
		scene.vx = 0;
		scene.vy = 0;
	}
	if(currentGrid[fgy][fgx] == 11 || currentGrid[cgy][fgx] == 11 || currentGrid[cgy][cgx] == 11 || currentGrid[fgy][cgx] == 11) 
	{
		canTalk = true;
		currentNPC = 11; 
	}
	else
	{
		canTalk = false;
		currentNPC = 0;
	}
}