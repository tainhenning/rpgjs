
function highlighted(text)
{
	text.style = highlight;
}
function delighted(text)
{
	text.style = nonhighlight;
}
function mainMenuMovement()
{
	execute = false; 
	mUp.press = () => {
		if(mainMenu.visible && !statusBox.visible)
		{
			mainMenuPosition--;
			menuCursorSound.playFrom(0.6);
		}
	}
	mDown.press = () => {
		if(mainMenu.visible && !statusBox.visible)
		{
			mainMenuPosition++;
			menuCursorSound.playFrom(0.6);
		}
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
					menuSelectSound.play();
					statusBox.visible = true;
			}
		}
	}
}