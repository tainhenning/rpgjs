function player()
{
	sprite = u.sprite(
	[
		"scr1_fr1.gif", "scr1_fr2.gif",
		"scr1_lf1.gif", "scr1_lf2.gif",
		"scr1_rt1.gif", "scr1_rt2.gif",
		"scr1_bk1.gif", "scr1_bk2.gif"
	]
	, 350, 350);
	sprite.width = 32;
	sprite.height = 32;
	sprite.vy = 0;
	sprite.vx = 0;

	playerMovement();
}
function playerMovement()
{
	left.press = () => {
		sprite.vx = -2;
		sprite.vy = 0;
		sprite.playAnimation([2,3]);

	};

	left.release = () => {
		if (!right.isDown && sprite.vy === 0) {
		  sprite.vx = 0;
		  sprite.stopAnimation();
		}
	};

	up.press = () => {
		sprite.vy = -2;
		sprite.vx = 0;
		sprite.playAnimation([6,7]);
	};
	up.release = () => {
		if (!down.isDown && sprite.vx === 0) {
		  sprite.vy = 0;
		  sprite.stopAnimation();
		}
	};
	right.press = () => {
		sprite.vx = 2;
		sprite.vy = 0;
		sprite.playAnimation([4,5]);
	};
	right.release = () => {
		if (!left.isDown && sprite.vy === 0) {
		  sprite.vx = 0;
		  sprite.stopAnimation();
		}
	};
	down.press = () => {
		sprite.vy = 2;
		sprite.vx = 0;
		sprite.playAnimation([0,1]);
	};
	down.release = () => {
		if (!up.isDown && sprite.vx === 0) {
		  sprite.vy = 0;
		  sprite.stopAnimation();
		}
	};
}