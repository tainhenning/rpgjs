function player(user,scene, x, y)
{
	user = u.sprite(
	[
		"scr1_fr1.gif", "scr1_fr2.gif",
		"scr1_lf1.gif", "scr1_lf2.gif",
		"scr1_rt1.gif", "scr1_rt2.gif",
		"scr1_bk1.gif", "scr1_bk2.gif"
	]
	, x, y);
	user.width = 32;
	user.height = 32;
	user.vy = 0;
	user.vx = 0;
	return user;
}
function playerMovement(user, scene)
{
	left.press = () => {
		if(battleBool == false)
		{
			scene.vx = 2;
			scene.vy = 0;
			user.vx = -2;
			user.vy = 0;
			user.playAnimation([2,3]);
		}
	};

	left.release = () => {
		if (!right.isDown && user.vy === 0) {
		  user.vx = 0;
		  scene.vx = 0;
		  user.stopAnimation();
		}
	};

	up.press = () => {
		if(battleBool == false)
		{
			scene.vy = 2;
			user.vy = -2;
			user.vx = 0;
			scene.vx = 0;
			user.playAnimation([6,7]);
		}
	};
	up.release = () => {
		if (!down.isDown && user.vx === 0) {
		  user.vy = 0;
		  scene.vy = 0;
		  user.stopAnimation();
		}
	};
	right.press = () => {
		if(battleBool == false)
		{
			scene.vx = -2;
			user.vx = 2;
			user.vy = 0;
			scene.vy = 0;
			user.playAnimation([4,5]);
		}
	};
	right.release = () => {
		if (!left.isDown && user.vy === 0) {
		  user.vx = 0;
		  scene.vx = 0;
		  user.stopAnimation();
		}
	};
	down.press = () => {
		if(battleBool == false)
		{
			user.vy = 2;
			user.vx = 0;
			scene.vy =-2;
			scene.vx = 0;
			user.playAnimation([0,1]);
		}

	};
	down.release = () => {
		if (!up.isDown && user.vx === 0) {
		  user.vy = 0;
		  scene.vy = 0;
		  user.stopAnimation();
		}
	};
}