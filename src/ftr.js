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
function getFtrTextAmount()
{
	return 5;
}
function getFtrText(page)
{
	switch(page)
	{
		case 1:
			return "How it goes my mans, welcome to my game, hope you enjoy";
		case 2:
			return "This is the second page";
		case 3:
			return "And this is the third page";
		case 4:
			return "qq";
	}
}
