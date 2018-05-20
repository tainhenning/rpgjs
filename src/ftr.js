
let gMax, gMin, reverseFighter;
reverseFighter = false;
function ftr(posx, posy, max, min, velx, vely)
{
	gMax = max;
	gMin = min;
	let obj = u.sprite(
	[
		"ftr1_fr1.gif", "ftr1_fr2.gif",
		"ftr1_lf1.gif", "ftr1_lf2.gif",
		"ftr1_rt1.gif", "ftr1_rt2.gif",
		"ftr1_bk1.gif", "ftr1_bk2.gif"
	]
	, posx, posy);
	obj.vx = velx;
	obj.vy = vely;
	obj.playAnimation([4,5]);
	return obj;
}
function fighterMovement(obj)
{
	if(obj.x == gMax)
		reverseFighter = fighterMovementLogic(obj);
	else if(obj.x == gMin)
		reverseFighter = fighterMovementLogic(obj);
	if(!reverseFighter)
	{
		obj.x += obj.vx;
	}
	else
	{
		obj.x -= obj.vx;
	}
}
function fighterMovementLogic(obj)
{
	if(reverseFighter)
		{obj.playAnimation([4,5]); return false;}
	else
		{obj.playAnimation([2,3]); return true;}
}