let gMax, gMin, reverseFighter;
reverseFighter = false;
function ftr(posx, posy)
{
	let obj = u.sprite(
	[
		"ftr1_fr1.gif", "ftr1_fr2.gif",
		"ftr1_lf1.gif", "ftr1_lf2.gif",
		"ftr1_rt1.gif", "ftr1_rt2.gif",
		"ftr1_bk1.gif", "ftr1_bk2.gif"
	]
	, posx, posy);
	obj.playAnimation([4,5]);
	return obj;
}

function getFtrText()
{
	return "How it goes my mans, welcome to my game, tab is to exit,\nspacebar is to select, hope you enjoy"
}
