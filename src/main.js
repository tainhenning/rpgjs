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

grid = createArray(25,25);
grid[1][6] = 1;
grid[10][9] = 1;
let sprite, state, fighter;
let u = new SpriteUtilities(PIXI);
let b = new Bump(PIXI);

document.body.appendChild(app.view);

loader.add("./src/lib/sheet.json").load(setup);

function createArray(length) {
    var arr = new Array(length || 0),
        i = length;

    if (arguments.length > 1) {
        var args = Array.prototype.slice.call(arguments, 1);
        while(i--) arr[length-1 - i] = createArray.apply(this, args);
    }

    return arr;
}