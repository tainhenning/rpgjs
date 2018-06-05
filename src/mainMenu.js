function mainMenuSetup()
{
	var menu = new PIXI.DisplayObjectContainer();
	var menuBox = new PIXI.Graphics();
	var menuBox2 = new PIXI.Graphics();
	menuBox.beginFill(0xffffff);
	menuBox.drawRoundedRect(0,0,(25*32)/5,(25*32)/5,10);
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
	box.drawRoundedRect((25*32)/5 + 5,0,500,500,10);
	box.endFill();
	
	box2.beginFill(0xfff);
	box2.drawRect((25*32)/5 + 10,5,490,490);
	box2.endFill();

	statusMenuPlayerHealthText = new PIXI.Text("Health: " + playerHealth.toString() + "/" + playerMaxHealth, highlight);
	statusMenuPlayerHealthText.position.set((25*32)/5 + 25+110, 20);

	var statusMenuPlayerAttackText = new PIXI.Text("Attack: " + playerAttack.toString(), highlight);
	statusMenuPlayerAttackText.position.set((25*32)/5 + 25+110, 50);

	var statusMenuPlayerDefenseText = new PIXI.Text("Defense: " + playerDefense.toString(), highlight);
	statusMenuPlayerDefenseText.position.set((25*32)/5 + 25+110, 80);

	var playerProfileTexture = PIXI.utils.TextureCache["./src/lib/playerProfile.png"];
	var playerProfileImage = new PIXI.Sprite(playerProfileTexture);
	
	playerProfileImage.x = (25*32)/5 + 25;
	playerProfileImage.y = 20;
	playerProfileImage.width = 100;
	playerProfileImage.height = 100;

	var playerProfileImageBackground = new PIXI.Graphics();
	playerProfileImageBackground.beginFill(0xffffff);
	playerProfileImageBackground.drawRect((25*32)/5 + 20,15, 110, 110);
	playerProfileImageBackground.endFill();


	statusContainer.addChild(box);
	statusContainer.addChild(box2);
	statusContainer.addChild(statusMenuPlayerHealthText);
	statusContainer.addChild(statusMenuPlayerAttackText);
	statusContainer.addChild(statusMenuPlayerDefenseText);
	statusContainer.addChild(playerProfileImageBackground);	
	statusContainer.addChild(playerProfileImage);
	statusContainer.visible = false;
	return statusContainer;
}