function dialogSetup()
{
	var dialog = new PIXI.DisplayObjectContainer();
	var dialogBox = new PIXI.Graphics();
	var dialogBox2 = new PIXI.Graphics();

	dialogBox.beginFill(0xffffff);
	dialogBox.drawRoundedRect(0,0,1000,150,10);
	dialogBox.endFill();
	dialog.addChild(dialogBox);

	dialogBox2.beginFill(0xfff);
	dialogBox2.drawRect(5,5, 990,140);
	dialogBox2.endFill();
	
	dialog.addChild(dialogBox2);

	dialogText = new PIXI.Text("test", highlight);
	dialogText.position.set(20,20);
	dialog.addChild(dialogText);


	dialog.visible = false;
	return dialog;
}
function activeDialogText(page)
{
	if(currentNPC == 11)
	{
		dialogText.text = getFtrText(page);
		if(dialogText.text == "qq")
			dialog.visible = false;
	}
	else if(currentNPC == 0)
	{
		dialogText.text = "";
	}
}