let fight, defend, item, run, highlight, nonhighlight, positionSelected, executed, 
	enemyHealth, enemyAttack, playerHealth, playerAttack;
function battleSetup(scene)
{
	enemyHealth = 0;
	enemyAttack = 0;
	playerHealth = 50;
	playerAttack = 1;
	executed = false;
	scene = new PIXI.DisplayObjectContainer();
	textBox = new PIXI.Graphics();
	textBox.beginFill(0x000000);
	textBox.drawRect(0,(25*32) - (25*32)/3,25*32,(25*32)/3);
	textBox.endFill();

	commandBox = new PIXI.Graphics();
	commandBox.beginFill(0xfff);
	commandBox.drawRect(0,(25*32) - (25*32)/3,25*16,(25*32)/3);
	commandBox.endFill();

	highlight = new PIXI.TextStyle({
		fill: "white"
	});
	nonhighlight = new PIXI.TextStyle({
		fill: "black"
	});


	fight = new PIXI.Text("Fight", nonhighlight);
	fight.position.set(50,(25*32) - (25*32)/3 + 5);

	defend = new PIXI.Text("Defend", nonhighlight);
	defend.position.set(50,(25*32) - (25*32)/3 + 35);

	item = new PIXI.Text("Item", nonhighlight);
	item.position.set(50,(25*32) - (25*32)/3 + 65);

	run = new PIXI.Text("Run", nonhighlight);
	run.position.set(50,(25*32) - (25*32)/3 + 95);

	highlighted(fight);
	positionSelected = 1;

	scene.addChild(textBox);
	scene.addChild(commandBox);
	scene.addChild(fight);
	scene.addChild(defend);
	scene.addChild(item);
	scene.addChild(run);

	return scene;
}
function highlighted(text)
{
	text.style = highlight;
}
function delighted(text)
{
	text.style = nonhighlight;
}
function menuMovement()
{
	let returning = false;
	mUp.press = () => {
		positionSelected--;
	}
	mDown.press = () => {
		positionSelected++;
	}

	enter.press = () => {
		executed = true;
	}
	if(positionSelected == 0)
		positionSelected = 4;
	if(positionSelected == 5)
		positionSelected = 1;
	switch(positionSelected)
	{
		case 1:
			highlighted(fight);
			delighted(defend);
			delighted(item);
			delighted(run);
			if(executed == true)
			{
				executed = false;
				enemyHealth--;
				eHealth.text = enemyHealth.toString();
				enemyTurn();
				pHealth.text = playerHealth.toString();
				if(enemyHealth == 0)
				{
					scene1.visible = true;
					app.stage.removeChild(scene2);
					battleBool = false;
				}
			}
			break;
		case 2:
			highlighted(defend);
			delighted(fight);
			delighted(item);
			delighted(run);
			break;
		case 3:
			highlighted(item);
			delighted(defend);
			delighted(fight);
			delighted(run);
			break;
		case 4:
			highlighted(run);
			delighted(defend);
			delighted(item);
			delighted(fight);
			if(executed == true)
			{
				executed = false;
				scene1.visible = true;
				app.stage.removeChild(scene2);
				battleBool = false;
			}
			break;
		default:
			break;
	}
}

function enemy(scene)
{
	let enemy = new PIXI.Graphics();
	enemyChance = Math.floor(Math.random() * 5);
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
	enemy.drawRect((25*32)/2 - 50,(25*32)/2 -100, 100, 100);
	enemy.endFill();

	return enemy;
}

function getEnemyHealth()
{
	return enemyHealth;
}
function getPlayerHealth()
{
	return playerHealth;
}
function enemyTurn()
{
	enemyChoice = Math.floor(Math.random() * 3);
	playerHealth--;
	switch(enemyChoice)
	{
		case 0:
			playerHealth = playerHealth - enemyAttack;
			break;
		default:
			break;
	}
}