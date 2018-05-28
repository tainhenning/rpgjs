
function highlighted(text)
{
	text.style = highlight;
}
function delighted(text)
{
	text.style = nonhighlight;
}
function battleMenuMovement()
{
	mUp.press = () => {
		positionSelected--;
	}
	mDown.press = () => {
		positionSelected++;
	}

	spacebar.press = () => {
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
			if(executed == true)
			{
				executed = false;
				playerDefense += 4;
				enemyTurn();
				playerDefense = 0;
				pHealth.text = playerHealth.toString();
			}
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
function mainMenuMovement()
{
	execute = false; 
	mUp.press = () => {
		if(mainMenu.visible && !statusBox.visible)
			mainMenuPosition--;
	}
	mDown.press = () => {
		if(mainMenu.visible && !statusBox.visible)
			mainMenuPosition++;
	}

	if(mainMenuPosition == 0)
		mainMenuPosition = 4;
	if(mainMenuPosition == 5)
		mainMenuPosition = 1;

	switch(mainMenuPosition)
	{
		case 1: 
			highlighted(statusText);
			delighted(itemsText);
			delighted(equipText);
			delighted(saveText);
			break;
		case 2:
			highlighted(itemsText);
			delighted(statusText);
			delighted(equipText);
			delighted(saveText);
			break;
		case 3:
			highlighted(equipText);
			delighted(itemsText);
			delighted(statusText);
			delighted(saveText);
			break;
		case 4:
			highlighted(saveText);
			delighted(itemsText);
			delighted(statusText);
			delighted(equipText);
			break;			
	}
	spacebar.press = () => {
		if(mainMenu.visible)
		{
			switch(mainMenuPosition)
			{
				case 1:
					statusBox.visible = true;
			}
		}
	}
}
function statusBoxMovement()
{

}