var list = ["Method A: 12 Fiber-Colored Code Fiber",
			"Method B: 12 Fiber-Colored Code Fiber",
			"Method A: 8 Fiber-Colored Code Fiber",
			"Method B: 8 Fiber-Colored Code Fiber"];
switch(event.value){
	case(list[0])://Method A: 12 Fiber ==> 3a
		hideExcept("3a");
		app.alert("in 3a case");
		break;
	
	case(list[1]): //Method B: 12 Fiber ==> 3b
		hideExcept("3b");
		break;
	
	case(list[2]): //Method A: 8 Fiber ==> 3c
		hideExcept("3c");
		break;
	
	case(list[3]): //Method B: 8 Fiber ==> 3d
		hideExcept("3d");
		break;
}

function hideExcept(showButton) {
	//var list = ["AtoAButton","AtoBButton","NoClip","PolAButton","PolBButton","PolAButt8f","PolBButt8f","QSFPPol"];
	var list = ["1a","1b","1c",
				"2a","2b","2c","2d","2e",
				"3a","3b","3c","3d"];
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