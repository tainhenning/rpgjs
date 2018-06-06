function player(user, x, y)
{
	playerMaxHealth = 50;
	playerHealth = 50;
	playerAttack = 1;
	playerDefense = 0;
	var user = u.sprite(
	[
		"playerside1.png", "playerside2.png", "playerside3.png",
		"playerfront1.png", "playerfront2.png", "playerfront3.png",
		"playerback3.png", "playerback2.png", "playerback1.png",
		"playerside21.png", "playerside22.png", "playerside23.png",
	]
	, x, y);
	user.width = 32;
	user.height = 48;
	user.vy = 0;
	user.vx = 0;
	speed = 2;
	return user;
}
function playerMovement(user, scene)
{
	left.press = () => {
		if(allowKeyboardMovement())
		{
			scene.vx = speed;
			scene.vy = 0;
			user.vx = -speed;
			user.vy = 0;
			user.playAnimation([0,2]);
		}
	};

	left.release = () => {
		if (allowKeyboardMovement() && !right.isDown && user.vy === 0) {
		  user.vx = 0;
		  scene.vx = 0;
		  user.playAnimation([1]);
		}
	};

	up.press = () => {
		if(allowKeyboardMovement())
		{
			scene.vy = speed;
			user.vy = -speed;
			user.vx = 0;
			scene.vx = 0;
			user.playAnimation([6,8]);
		}
	};

	up.release = () => {
		if (allowKeyboardMovement() && !down.isDown && user.vx === 0) {
		  user.vy = 0;
		  scene.vy = 0;
		  user.playAnimation([7]);
		}
	};

	right.press = () => {
		if(allowKeyboardMovement())
		{
			scene.vx = -speed;
			user.vx = speed;
			user.vy = 0;
			scene.vy = 0;
			user.playAnimation([9,11]);
		}
	};

	right.release = () => {
		if (allowKeyboardMovement() && !left.isDown && user.vy === 0) {
		  user.vx = 0;
		  scene.vx = 0;
		  user.playAnimation([10]);
		}
	};

	down.press = () => {
		if(allowKeyboardMovement())
		{
			user.vy = speed;
			user.vx = 0;
			scene.vy =-speed;
			scene.vx = 0;
			user.playAnimation([3,5]);
		}

	};
	
	down.release = () => {
		if (allowKeyboardMovement() && !up.isDown && user.vx === 0) {
		  user.vy = 0;
		  scene.vy = 0;
		  user.playAnimation([4]);
		}
	};

	q.press = () => {
		if(!mainMenu.visible && !battleBool && !dialog.visible && !battleEntryAnimationEnabled)
		{
			menuOpenSound.play();
			mainMenu.visible = true;
		}
		else if(mainMenu.visible && statusBox.visible)
		{
			menuBackSound.play();
			statusBox.visible = false;
		}
		else
		{
			menuBackSound.play();
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
function allowKeyboardMovement()
{
	if(!mainMenu.visible && !battleBool && !dialog.visible && !battleEntryAnimationEnabled)
		return true;
	else
		return false;
}