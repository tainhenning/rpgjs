let fight, defend, item, run, highlight, nonhighlight, positionSelected, executed, 
	enemyHealth, enemyAttack, playerHealth, playerAttack, playerDefens, playerPresses;

function battleSetup(scene)
{
	enemyHealth = 0;
	enemyAttack = 0;
	playerPresses = 3;
	executed = false;
	var scene = new PIXI.DisplayObjectContainer();

	var textBox = new PIXI.Graphics();
	var textBox2 = new PIXI.Graphics();

	var commandBox = new PIXI.Graphics();
	var commandBox2 = new PIXI.Graphics();


	textBox.beginFill(0xffffff);
	textBox.drawRoundedRect(app.width - 25*32,app.height - (25*32)/3,25*32,(25*32)/3,10);
	textBox.endFill();

	textBox2.beginFill(0xfff);
	textBox2.drawRect(app.width - 25*32+5,app.height - (25*32)/3 + 5,25*32 -10,(25*32)/3 -10);
	textBox2.endFill();

	commandBox.beginFill(0xffffff);
	commandBox.drawRoundedRect(0,app.height - (25*32)/3,25*16,(25*32)/3,10);
	commandBox.endFill();

	commandBox2.beginFill(0xfff);
	commandBox2.drawRect(5,app.height - (25*32)/3 + 5,25*16 - 10,(25*32)/3 - 10);
	commandBox2.endFill();

	battleFightText = new PIXI.Text("Attack", nonhighlight);
	battleFightText.position.set(10,app.height - (25*32)/3 + 5);

	battleDefendText = new PIXI.Text("Defend", nonhighlight);
	battleDefendText.position.set(10,app.height - (25*32)/3 + 35);

	battleItemText = new PIXI.Text("Item", nonhighlight);
	battleItemText.position.set(10,app.height - (25*32)/3 + 65);

	battleRunText = new PIXI.Text("Run", nonhighlight);
	battleRunText.position.set(10,app.height - (25*32)/3+ 95);

	highlighted(battleFightText);
	positionSelected = 1;

	battleBackground = new PIXI.Graphics;
	battleBackground.beginFill(0x000);
	battleBackground.drawRect(0,0,app.width,app.height);
	battleBackground.endFill();

	scene.addChild(battleBackground);

	scene.addChild(textBox);
	scene.addChild(textBox2);
	scene.addChild(commandBox);
	scene.addChild(commandBox2);
	scene.addChild(battleFightText);
	scene.addChild(battleDefendText);
	scene.addChild(battleItemText);
	scene.addChild(battleRunText);

	return scene;
}
function newBattle()
{

	battleBool = true;
	battleScene = battleSetup();
	currentScene.visible = false;
	battleScene.visible = true;

	en = enemy();

	battleDialogBox = actionDescribeBox();
	battleDialogBox.visible = false;

	pHealth = new PIXI.Text("Player HP: "+ playerHealth.toString(), highlight);
	pHealth.position.set(app.width/2 - 95,app.height - (25*32)/3 + 5);
	
	battleScene.addChild(en);
	battleScene.addChild(pHealth);
	battleScene.addChild(battleDialogBox);

	app.stage.addChild(battleScene);
}
function enemy(scene)
{
	var bat =  u.sprite(
	[
		"enemy1.gif", "enemy2.gif",
		"enemy3.gif", "enemy4.gif",
	]
	, app.width/2 - 108/2, app.height/2 - 126/2);
	enemyHealth = 5;
	enemyAttack = 5;
	bat.playAnimation();
	return bat;
}

function getEnemyHealth()
{
	return enemyHealth;
}

function battleMenuMovement()
{

	if(playerPresses == 0 && battleDialogBox.visible == false)
	{
		enemyTurn();
		playerPresses = 3;
	}
	if(currentSecond >= lastBattleDialogBoxOpened + 2)
		battleDialogBox.visible = false;
	if(currentSecond == 1 && lastBattleDialogBoxOpened == 59)
		battleDialogBox.visible = false;
	if(currentSecond == 0 && lastBattleDialogBoxOpened == 58)
		battleDialogBox.visible = false;


	mUp.press = () => {
		if(!currentScene.visible)
		{
			positionSelected--;
			menuCursorSound.playFrom(0.6);
		}
	}
	mDown.press = () => {
		if(!currentScene.visible)
		{
			positionSelected++;
			menuCursorSound.playFrom(0.6);
		}
	}

	spacebar.press = () => {
		if(!battleDialogBox.visible)
			executed = true;
	}

	if(positionSelected == 0)
		positionSelected = 4;
	if(positionSelected == 5)
		positionSelected = 1;

	switch(positionSelected)
	{
		case 1:
			highlighted(battleFightText);
			delighted(battleDefendText);
			delighted(battleItemText);
			delighted(battleRunText);
			if(executed == true)
			{
				playerAttacks();
				playerPresses--;
			}
			break;
		case 2:
			highlighted(battleDefendText);
			delighted(battleFightText);
			delighted(battleItemText);
			delighted(battleRunText);
			if(executed == true)
			{
				menuSelectSound.play();
				playerDefends();
			}
			break;
		case 3:
			highlighted(battleItemText);
			delighted(battleDefendText);
			delighted(battleFightText);
			delighted(battleRunText);
			break;
		case 4:
			highlighted(battleRunText);
			delighted(battleDefendText);
			delighted(battleItemText);
			delighted(battleFightText);
			if(executed == true)
			{
				menuSelectSound.play();
				battleExit();
			}
			break;
		default:
			break;
	}
}

function battleExit()
{
	battleMusic.pause();
	dungeonMusic.playFrom(0);
	statusMenuPlayerHealthText.text = "Health: " + playerHealth.toString() + "/" + playerMaxHealth;
	executed = false;
	currentScene.visible = true;
	app.stage.removeChild(battleScene);
	battleBool = false;
}

function playerAttacks()
{
	executed = false;
	enemyHealth--;
	playerAttacksSound.playFrom(0.7);
	viewBattleDialogBox("Player attacks for " + playerAttack.toString());

	pHealth.text = "Player HP: "+ playerHealth.toString();
	monsterDamageSound.loop = true;
	monsterDamageSound.playFrom(1);
	monsterDamageSound.playing = true;
	enemyDamaged = true;
	if(enemyHealth == 0)
		battleExit();
}

function playerDefends()
{
	playerDefense = 3;
	executed = false;
	enemyTurn();
	playerDefense = 0;
	pHealth.text = "Player HP: "+ playerHealth.toString();
}

function enemyTurn()
{
	var enemyChoice = Math.floor(Math.random() * 1);
	switch(enemyChoice)
	{
		case 0:
			playerHealth = (playerHealth + playerDefense) - enemyAttack;
			break;
		default:
			break;
	}
	viewBattleDialogBox("Enemy attacks for " + enemyAttack.toString());
	pHealth.text = "Player HP: "+ playerHealth.toString();

}

function actionDescribeBox()
{
	var container = new PIXI.DisplayObjectContainer();

	actionDialogText = new PIXI.Text("", highlight);
	actionDialogText.position.set(20,((25*32)/6-20)/2 -20);

	var mainBox = new PIXI.Graphics();
	mainBox.beginFill(0xffffff);
	mainBox.drawRoundedRect(10,10,app.width-20,(25*32)/6-20,10);
	mainBox.endFill();

	var mainBox2 = new PIXI.Graphics();
	mainBox2.beginFill(0xfff);
	mainBox2.drawRect(15,15,app.width-30,(25*32)/6-30);
	mainBox2.endFill();

	container.addChild(mainBox);
	container.addChild(mainBox2);
	container.addChild(actionDialogText);

	return container;
}
function viewBattleDialogBox(text)
{
	actionDialogText.text = text;
	battleDialogBox.visible = true;
	var d = new Date();
	lastBattleDialogBoxOpened = d.getSeconds();
}
