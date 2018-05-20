function setup()
{
	player();
	fighter = ftr(600, 600, 620, 550, 1, 0);

	loadGrid();
	app.stage.addChild(fighter);
	app.stage.addChild(sprite);
	state = play;
	app.ticker.add(delta => gameLoop(delta))
}

function gameLoop(delta)
{
	state(delta)

}
function play(delta)
{
	b.hit(sprite, fighter, true);
	let prevx = sprite.x;
	let prevy = sprite.y;
	sprite.x += sprite.vx;
	sprite.y += sprite.vy;
	let cgx = Math.ceil(sprite.x/32);
	let cgy = Math.ceil(sprite.y/32);
	let fgx = Math.floor(sprite.x/32);
	let fgy = Math.floor(sprite.y/32);
	if(grid[fgy][fgx] == 1 || grid[cgy][fgx] == 1 || grid[cgy][cgx] == 1 || grid[fgy][cgx] == 1) //bottom right
	{
		sprite.x = prevx;
		sprite.y = prevy;
		sprite.vy = 0;
		sprite.vx = 0;
	}
	fighterMovement(fighter);
}

function loadGrid()
{
	for(var i = 0; i < grid.length; i++)
	{
		for(var j = 0; j < grid[i].length; j++)
		{
			if(grid[i][j] == 1) 
			{
				let id = PIXI.loader.resources["./src/lib/floorsheet.json"].textures; 		
				let wall = new Sprite(id["floor_vines0.png"]);
				wall.y = 32 * i;
				wall.x = 32 * j;	
				wall.width = 32;
				wall.height = 32;
				app.stage.addChild(wall);

			}
			else if(grid[i][j] == 0)
			{
				let id = PIXI.loader.resources["./src/lib/floorsheet.json"].textures; 		
				let floor = new Sprite(id["crystal_floor2.png"]);
				floor.y = 32 * i;
				floor.x = 32 * j;	
				floor.width = 32;
				floor.height = 32;
				app.stage.addChild(floor);
			}


		}
	}
}