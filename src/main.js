let type = "WebGL",
	TextureCache = PIXI.utils.TextureCache,
	Application = PIXI.Application,
	loader = PIXI.loader,
	resources = PIXI.loader.resources,
	Sprite = PIXI.Sprite;
let left = keyboard(37),
	up = keyboard(38),
	right = keyboard(39),
	down = keyboard(40);
let app = new PIXI.Application(
	{width: 256, height: 256, antialias: true, transparent: false, resolution: 1});

app.renderer.backgroundColor = 0xffffff;
app.renderer.view.style.position = "float";
app.renderer.view.style.display = "block";
app.renderer.autoResize = true;
app.renderer.resize(window.innerWidth, window.innerHeight);

grid = zero2D(25,25);
for(var i = 0; i < grid.length; i++)
{
	grid[i][0] = 1;
	grid[0][i] = 1;
	grid[i][24] = 1;
	grid[24][i] = 1;
	grid[3][i] = 1;
}
let sprite, state, fighter;
let u = new SpriteUtilities(PIXI);
let b = new Bump(PIXI);

document.body.appendChild(app.view);

loader.add("./src/lib/sheet.json").add("./src/lib/floorsheet.json").load(setup);



function zero2D(rows, cols) {
  var array = [], row = [];
  while (cols--) row.push(0);
  while (rows--) array.push(row.slice());
  return array;
}

