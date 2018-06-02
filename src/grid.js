
function loadGrid(gGrid, scene)
{
	for(var i = 0; i < gGrid.length; i++)
	{
		for(var j = 0; j < gGrid[i].length; j++)
		{
			if(gGrid[i][j] == 1) 
			{
				let id = PIXI.loader.resources["./src/lib/floorsheet.json"].textures; 		
				let wall = new Sprite(id["floor_vines0.png"]);
				wall.y = 32 * i;
				wall.x = 32 * j;	
				wall.width = 32;
				wall.height = 32;
				scene.addChild(wall);

			}
			else if(gGrid[i][j] == 0)
			{
				let id = PIXI.loader.resources["./src/lib/floorsheet.json"].textures; 		
				let floor = new Sprite(id["crystal_floor2.png"]);
				floor.y = 32 * i;
				floor.x = 32 * j;	
				floor.width = 32;
				floor.height = 32;
				scene.addChild(floor);
			}
		}
	}
}
function wallDetection(scene)
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
	let cgx = Math.ceil(sprite.x/32);
	let cgy = Math.ceil(sprite.y/32);
	let fgx = Math.floor(sprite.x/32);
	let fgy = Math.floor(sprite.y/32);
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
		sprite.x = (1000 - 32)/2;
		sprite.y = (1000 - 32)/2;
		sprite.playAnimation([0,1]);

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
		sprite.x = (1000 - 32)/2;
		sprite.y = (1000 - 32)/2;
		sprite.playAnimation([0,1]);

		scene.leftScene.addChild(sprite);
		currentScene = scene.leftScene;
	}
}