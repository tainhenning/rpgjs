let fight, defend, item, run, highlight, nonhighlight, positionSelected, executed, 
	enemyHealth, enemyAttack, playerHealth, playerAttack, playerDefense;
function battleSetup(scene)
{
	enemyHealth = 0;
	enemyAttack = 0;

	playerHealth = getPlayerHealth();
	playerAttack = getPlayerAttack();
	playerDefense = getPlayerDefense();

	executed = false;
	scene = new PIXI.DisplayObjectContainer();
	textBox = new PIXI.Graphics();
	commandBox = new PIXI.Graphics();
	commandBox2 = new PIXI.Graphics();


	textBox.beginFill(0x000000);
	textBox.drawRect(0,(25*32) - (25*32)/3,25*32,(25*32)/3);
	textBox.endFill();

	commandBox.beginFill(0xffffff);
	commandBox.drawRect(0,(25*32) - (25*32)/3,25*16,(25*32)/3);
	commandBox.endFill();

	commandBox2.beginFill(0xfff);
	commandBox2.drawRect(5,(25*32) - (25*32)/3 + 5,25*16 - 10,(25*32)/3 - 10);
	commandBox2.endFill();

	fight = new PIXI.Text("Fight", nonhighlight);
	fight.position.set(10,(25*32) - (25*32)/3 + 5);

	defend = new PIXI.Text("Defend", nonhighlight);
	defend.position.set(10,(25*32) - (25*32)/3 + 35);

	item = new PIXI.Text("Item", nonhighlight);
	item.position.set(10,(25*32) - (25*32)/3 + 65);

	run = new PIXI.Text("Run", nonhighlight);
	run.position.set(10,(25*32) - (25*32)/3 + 95);

	highlighted(fight);
	positionSelected = 1;

	scene.addChild(textBox);
	scene.addChild(commandBox);
	scene.addChild(commandBox2);
	scene.addChild(fight);
	scene.addChild(defend);
	scene.addChild(item);
	scene.addChild(run);

	return scene;
}

function enemy(scene)
{
	let enemy = new PIXI.Graphics();
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
	enemy.drawRect((25*32)/2 - 50,(25*32)/2 -100, 100, 100);
	enemy.endFill();

	return enemy;
}

function getEnemyHealth()
{
	return enemyHealth;
}
function enemyTurn()
{
	enemyChoice = Math.floor(Math.random() * 1);
	switch(enemyChoice)
	{
		case 0:
			playerHealth = (playerHealth + playerDefense) - enemyAttack;
			break;
		default:
			break;
	}
}
