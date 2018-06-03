function dialogSetup()
{
	var dialog = new PIXI.DisplayObjectContainer();
	var dialogBox = new PIXI.Graphics();

	dialogBox.beginFill(0x343434);
	dialogBox.drawRect(0,550,1000,350);
	dialogBox.endFill();
	dialog.addChild(dialogBox);

	dialogText = new PIXI.Text("test", highlight);
	dialogText.position.set(50, 600);
	dialog.addChild(dialogText);


	dialog.visible = false;
	return dialog;
}
function activeDialogText()
{
	console.log(currentNPC);
	if(currentNPC == 11)
	{
		dialogText.text = getFtrText();
	}
	else if(currentNPC == 0)
	{
		dialogText.text = "";
	}
}