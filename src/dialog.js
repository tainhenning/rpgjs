function dialogSetup()
{
	var dialog = new PIXI.DisplayObjectContainer();
	var dialogBox = new PIXI.Graphics();
	var dialogBox2 = new PIXI.Graphics();

	dialogBox.beginFill(0xffffff);
	dialogBox.drawRoundedRect(0,app.height-350,1000,350,10);
	dialogBox.endFill();
	dialog.addChild(dialogBox);

	dialogBox2.beginFill(0xfff);
	dialogBox2.drawRect(5,app.height-345, 990,340);
	dialogBox2.endFill();
	
	dialog.addChild(dialogBox2);

	dialogText = new PIXI.Text("test", highlight);
	dialogText.position.set(50,app.height-300);
	dialog.addChild(dialogText);


	dialog.visible = false;
	return dialog;
}
function activeDialogText(page)
{
	console.log(currentNPC);
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