function mainMenuSetup()
{
	var menu = new PIXI.DisplayObjectContainer();
	var menuBox = new PIXI.Graphics();
	var menuBox2 = new PIXI.Graphics();
	var playerProfileTexture = new PIXI.Texture.fromImage('./lib/playerProfile.png');
	var playerProfile = new PIXI.Sprite(playerProfileTexture);

	menuBox.beginFill(0xffffff);
	menuBox.drawRect(0,0,(25*32)/5,(25*32)/5);
	menuBox.endFill();

	menuBox2.beginFill(0xfff);
	menuBox2.drawRect(5,5,(25*32)/5 -10,(25*32)/5 -10);
	menuBox2.endFill();

	statusText = new PIXI.Text("Status", highlight);
	statusText.position.set(10,15);

	itemsText = new PIXI.Text("Items", nonhighlight);
	itemsText.position.set(10,45);

	equipText = new PIXI.Text("Equip", nonhighlight);
	equipText.position.set(10,75);

	saveText = new PIXI.Text("Save", nonhighlight);
	saveText.position.set(10,105);



	menu.addChild(menuBox);
	menu.addChild(menuBox2);
	menu.addChild(saveText);
	menu.addChild(equipText);
	menu.addChild(itemsText);
	menu.addChild(statusText);
	menu.addChild(playerProfile);

	mainMenuPosition = 1;

	menu.visible = false;
	statusBox = statusBoxSetup();
	menu.addChild(statusBox);
	return menu;

}
function statusBoxSetup()
{
	var statusContainer = new PIXI.DisplayObjectContainer();
	var box = new PIXI.Graphics();
	var box2 = new PIXI.Graphics();

	box.beginFill(0xffffff);
	box.drawRect((25*32)/5 + 5,0,500,500);
	box.endFill();
	
	box2.beginFill(0xfff);
	box2.drawRect((25*32)/5 + 10,5,490,490);
	box2.endFill();

	statusMenuPlayerHealthText = new PIXI.Text("Health: " + playerHealth.toString() + "/" + playerMaxHealth, highlight);
	statusMenuPlayerHealthText.position.set((25*32)/5 + 25, 20);

	var statusMenuPlayerAttackText = new PIXI.Text("Attack: " + playerAttack.toString(), highlight);
	statusMenuPlayerAttackText.position.set((25*32)/5 + 25, 50);

	var statusMenuPlayerDefenseText = new PIXI.Text("Defense: " + playerDefense.toString(), highlight);
	statusMenuPlayerDefenseText.position.set((25*32)/5 + 25, 80);

	statusContainer.addChild(box);
	statusContainer.addChild(box2);
	statusContainer.addChild(statusMenuPlayerHealthText);
	statusContainer.addChild(statusMenuPlayerAttackText);
	statusContainer.addChild(statusMenuPlayerDefenseText);

	statusContainer.visible = false;
	return statusContainer;
}