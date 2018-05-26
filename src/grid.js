
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
	return scene;
}
function wallDetection(scene)
{
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
	if(cgy < 0 || cgy >= 25 || fgy < 0 || fgy >= 25)
		return;
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
}