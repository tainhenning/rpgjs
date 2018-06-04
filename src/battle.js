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

	battleFightText = new PIXI.Text("Fight", nonhighlight);
	battleFightText.position.set(10,app.height - (25*32)/3 + 5);

	battleDefendText = new PIXI.Text("Defend", nonhighlight);
	battleDefendText.position.set(10,app.height - (25*32)/3 + 35);

	battleItemText = new PIXI.Text("Item", nonhighlight);
	battleItemText.position.set(10,app.height - (25*32)/3 + 65);

	battleRunText = new PIXI.Text("Run", nonhighlight);
	battleRunText.position.set(10,app.height - (25*32)/3+ 95);

	highlighted(battleFightText);
	positionSelected = 1;

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

	eHealth = new PIXI.Text(getEnemyHealth().toString(), highlight);
	eHealth.position.set(app.width/2,app.height/2+10, 100, 100);
	pHealth = new PIXI.Text("Player HP: "+ playerHealth.toString(), highlight);
	pHealth.position.set(app.width/2 - 95,app.height - (25*32)/3 + 5);
	
	battleScene.addChild(en);
	battleScene.addChild(eHealth);
	battleScene.addChild(pHealth);
	battleScene.addChild(battleDialogBox);
	app.stage.addChild(battleScene);
}
function enemy(scene)
{
	var enemy = new PIXI.Graphics();
	enemyChance = Math.floor(Math.random() * 1000);
	if(enemyChance == 1)
	{
		enemy.beginFill(0xf49d41);
		enemyHealth = 5;
		enemyAttack = 5;
	}
	else if(enemyChance == 2)
	{
		enemy.beginFill(0xf44242);
		enemyHealth = 5;
		enemyAttack = 5;
	}
	else if(enemyChance == 3)
	{
		enemy.beginFill(0x41d9f4);
		enemyHealth = 5;
		enemyAttack = 5;
	}
	else if(enemyChance == 4)
	{
		enemy.beginFill(0x41f45b);
		enemyHealth = 5;
		enemyAttack = 5;
	}
	else
	{
		enemy.beginFill(0xf441e8);
		enemyHealth = 5;
		enemyAttack = 5;
	}
	enemy.drawRect(app.width/2-50,app.height/2-100, 100, 100);
	enemy.endFill();

	return enemy;
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
		positionSelected--;
	}
	mDown.press = () => {
		positionSelected++;
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
				playerDefends();
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
				battleExit();
			break;
		default:
			break;
	}
}

function battleExit()
{
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
	eHealth.text = enemyHealth.toString();

	viewBattleDialogBox("Player attacks for " + playerAttack.toString());

	pHealth.text = "Player HP: "+ playerHealth.toString();
	
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
	actionDialogText.position.set(25,((25*32)/6-20)/2 -10);

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
