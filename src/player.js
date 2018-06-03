function player(user, x, y)
{
	playerHealth = 50;
	playerAttack = 1;
	playerDefense = 4;
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
	speed = 2;
	return user;
}
function playerMovement(user, scene)
{
	left.press = () => {
		if(!mainMenu.visible && !battleBool && !dialog.visible)
		{
			scene.vx = speed;
			scene.vy = 0;
			user.vx = -speed;
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
		if(!mainMenu.visible && !battleBool && !dialog.visible)
		{
			scene.vy = speed;
			user.vy = -speed;
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
		if(!mainMenu.visible && !battleBool && !dialog.visible)
		{
			scene.vx = -speed;
			user.vx = speed;
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
		if(!mainMenu.visible && !battleBool && !dialog.visible)
		{
			user.vy = speed;
			user.vx = 0;
			scene.vy =-speed;
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

	tab.press = () => {
		if(!mainMenu.visible && !battleBool && !dialog.visible)
		{
			mainMenu.visible = true;
		}
		else if(mainMenu.visible && statusBox.visible)
		{
			statusBox.visible = false;
		}
		else
		{
			mainMenu.visible = false;
		}
	};

	spacebar.press = () => {

		if(!dialog.visible && !battleBool && !mainMenu.visible && canTalk)
		{
			pageNumber = 1;
			activeDialogText(pageNumber);
			dialog.visible = true;
		}
		else if(dialog.visible)
		{
			pageNumber++;
			activeDialogText(pageNumber)
		}
	};

	shift.press = () => {
		if(speed == 2)
			speed = 6;
		else
			speed = 2;
	};
}

function getPlayerHealth()
{
	return playerHealth;
}

function getPlayerAttack()
{
	return playerAttack;
}

function getPlayerDefense()
{
	return playerDefense;
}
