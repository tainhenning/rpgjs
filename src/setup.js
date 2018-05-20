function setup()
{
	player();
	fighter = ftr(600, 600, 620, 550, 1, 0);

	for(var i = 0; i < grid.length; i++)
	{
		for(var j = 0; j < grid[i].length; j++)
		{
			let rectangle = new PIXI.Graphics();
			if(grid[i][j] != 1) 
			{
				rectangle.beginFill(0x000000);
			}
			else 
				rectangle.beginFill(0x470a72)
			rectangle.drawRect((32) * j, (32) * i , 32, 32);
			rectangle.endFill();
			app.stage.addChild(rectangle);
		}
	}

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
