function mainMenuSetup()
{
	var menu = new PIXI.DisplayObjectContainer();
	var menuBox = new PIXI.Graphics();

	menuBox.beginFill(0xf44242);
	menuBox.drawRect(0,0,(25*32)/5,(25*32)/5);
	menuBox.endFill();

	statusText = new PIXI.Text("Status", highlight);
	statusText.position.set(5,10);

	itemsText = new PIXI.Text("Items", nonhighlight);
	itemsText.position.set(5,40);

	equipText = new PIXI.Text("Equip", nonhighlight);
	equipText.position.set(5,70);

	saveText = new PIXI.Text("Save", nonhighlight);
	saveText.position.set(5,100);

	menu.addChild(menuBox);
	menu.addChild(saveText);
	menu.addChild(equipText);
	menu.addChild(itemsText);
	menu.addChild(statusText);

	mainMenuPosition = 1;

	menu.visible = false;
	statusBox = statusBoxSetup();
	menu.addChild(statusBox);
	return menu;

}
function statusBoxSetup()
{
	statusContainer = new PIXI.DisplayObjectContainer();
	box = new PIXI.Graphics();
	box.beginFill(0x000008);
	box.drawRect((25*32)/5,0,500,500);
	box.endFill();
	
	playerHealthText = new PIXI.Text("Health: " + getPlayerHealth().toString(), highlight);
	playerHealthText.position.set((25*32)/5 + 5, 10);

	playerAttackText = new PIXI.Text("Attack: " + getPlayerAttack().toString(), highlight);
	playerAttackText.position.set((25*32)/5 + 5, 40);

	playerDefenseText = new PIXI.Text("Defense: " + getPlayerDefense().toString(), highlight);
	playerDefenseText.position.set((25*32)/5 + 5, 70);

	statusContainer.addChild(box);
	statusContainer.addChild(playerHealthText);
	statusContainer.addChild(playerAttackText);
	statusContainer.addChild(playerDefenseText);

	statusContainer.visible = false;
	return statusContainer;
}