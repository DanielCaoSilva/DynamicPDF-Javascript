//var check = this.getField("PolaritySF").value;
//clearIcons();
//this.getField("PolAButton").display = display.hidden;
var list = ["Polarity A-B: Clipped","Polarity A-A: Clipped","No Polarity-Unclipped",
			"Polarity: A-B","Polarity: A-A"];
switch(event.value){
	case list[0]: // Clipped - A to B ==> 1a
		//hideExcept("AtoBButton");
		hideExcept("1a");
		break;
		
	case list[1]: //Clipped - A to A ==> 1b
		//hideExcept("AtoAButton");
		//app.alert("in a2a case");
		hideExcept("1b");
		break;
	
	case list[2]: //No Clip  ==> 1c
		//hideExcept("NoClip");
		hideExcept("1c");
		break;
		
	case list[3]: 
		hideExcept("1001");
		break;
	
	case list[4]: 
		hideExcept("1000");
		break;
}

function hideExcept(showButton) {
	//var list = ["AtoAButton","AtoBButton","NoClip","PolAButton","PolBButton","PolAButt8f","PolBButt8f","QSFPPol"];
	var list = ["1a","1b","1c",
				"2a","2b","2c","2d","2e",
				"3a","3b","3c","3d",
				"1000","1001"];
	var i;
	//app.alert("at");
	for( i = 0; i< list.length; i++)
	{
		if(showButton == String(list[i]))
		{
			//app.alert("In the if statement");
			this.getField(list[i]).display = display.visible;
		}
		else
		{
			//app.alert("In the else statement");
			this.getField(list[i]).display = display.hidden;
		}
	}
	
	//this.getField("AtoAButton").display = display.visible;
}
//function clearIcons() {
//	var list = ["AtoAButton","AtoBButton","NoClip","PolAButton","PolBButton","PolAButt8f","PolBButt8f","QSFPPol"];
//	var i;
//	app.alert("in function");
//	for ( i = 0; i<= list.length; i++)
//	{
//		this.getField(list[i]).display = display.hidden;
//		//app.alert("In for loop");
//	}
//}
	