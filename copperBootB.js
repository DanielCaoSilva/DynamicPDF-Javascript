if(event.value == "Bubble"||event.value == "Snag-less"){
	this.getField("End B Color").setItems(["","Clear","White","Brown","Green","Yellow","Grey","Pink","Blue","Red","Black","Violet","Orange","Spring Green","Light Blue"]);
}
else {
     this.getField("End B Color").setItems([""]);
}

var bootA = String(this.getField("End A Boots").value);
var bootB = String(event.value);

checkCombo(bootA,bootB);


function checkCombo(bootA,bootB) {
	var i;
	var bAindex;
	var bBindex;
	list = ["No boot","Snag-less","Bubble"];
	for(i = 0;i<=list.length;i++){
		if(bootA == list[i])
			bAindex = i;
		if(bootB == list[i])
			bBindex = i;
	}
	//A is rows and B is cols
	var listPics = [
		["NoBootNoBoot", "NoBootSnagless","NoBootBubble"],
		["SnaglessNoBoot","SnaglessSnagless","SnaglessBubble"],
		["BubbleNoBoot","BubbleSnagless","BubbleBubble"],
		];
	var x;
	var y;
	for(x = 0;x<list.length;x++){
		for(y = 0;y<list.length;y++){
			this.getField(listPics[x][y]).display=display.hidden;
		}
	}
	//app.alert(y);
	this.getField(listPics[bAindex][bBindex]).display = display.visible;
	
}