var co = String(this.getField("ConnectorOptions").value);
var ct = String(this.getField("CableType").value);
var conB = String(this.getField("SingleFiberConB").value);
var conA = String(this.getField("SingleFiberConA.0").value);
var uniboot = "LC UNIBOOT UPC";
var isUni2Uni = (conA == uniboot) && (conB == uniboot);

if(co == "Multi Fiber" && (ct == "Sub-Unitized" || ct == "Sub-Unitized Armor"))
{
	switch(event.value){
		case "24f":
			hideExceptNF("71l");
		break;
		
		case "36f (Build w/48f)":
			hideExceptNF("72l");
		break;
		
		case "48f":
			hideExceptNF("73l");
		break;
		
		case "72f (Build w/96f)":
			hideExceptNF("74l");
		break;
		
		case "96f":
			hideExceptNF("75l");
		break;
		
		case "144f":
			hideExceptNF("76l");
		break;
	}
}
if(co == "Hydra" && (ct == "Sub-Unitized" || ct == "Sub-Unitized Armor"))
{
	
	switch(event.value){
		case "24f":
			leftExceptNF("71l");
		break;
		
		case "36f (Build w/48f)":
			leftExceptNF("72l");
		break;
		
		case "48f":
			leftExceptNF("73l");
		break;
		
		case "72f (Build w/96f)":
			leftExceptNF("74l");
		break;
		
		case "96f":
			leftExceptNF("75l");
		break;
		
		case "144f":
			leftExceptNF("76l");
		break;
	}
}

if(co == "Single Fiber" && (ct == "Distribution (900 micron-indoor)" || ct == "Distribution (900 micron-indoor/outdoor)"))
{
	//24f, 36f, 48f, 72f ---> show L2
	//"",2f,...,12f -----> hide L2
	switch(event.value){
		case "":
			hideL2Options();break;
		case "2f (Build w/12f)":
			hideL2Options();break;
		case "4f (Build w/12f)":
			hideL2Options();break;
		case "6f (Build w/12f)":
			hideL2Options();break;
		case "12f":
			hideL2Options();break;
		case "24f":
			//Show pic 800
			//Show break out L1 and L2
			showL2Options();
			break;
		case "36f (Build w/48f)":
			//Show pic 800
			//Show break out L1 and L2
			showL2Options();
			break;
		case "48f":
			//Show pic 800
			//Show break out L1 and L2
			showL2Options();
			break;
		case "72f":
			//Show pic 800
			//Show break out L1 and L2
			showL2Options();
			break;
	}
}

if(co == "Single Fiber" && ct == "Micro Core (250 micron)")
{
	
	//24f, 36f, 48f, 72f ---> show L2
	//"",1f,...,12f -----> hide L2
	//"","1f","2f (Build w/12f)","4f (Build w/12f)","6f (Build w/12f)","8f (Build w/12f)","12f","24f","36f","48f","72f"
	switch(event.value){
		case "":
			hideL2Options();break;
		case "1f":
			hideL2Options();break;
		case "2f (Build w/12f)":
			hideExceptNF("1002");
			hideFurcationOption();
			hideStagOptions();
			hideL2Options();break;
		case "4f (Build w/12f)":
			hideExceptNF("1004");
			hideL2Options();break;
		case "6f (Build w/12f)":
			hideExceptNF("1006");
			hideL2Options();break;
		case "8f (Build w/12f)":
			hideExceptNF("1008");
			hideL2Options();break;
		case "10f":
			hideExceptNF("1010");
			hideL2Options();break;
		case "12f":
			hideExceptNF("1012");
			hideL2Options();break;
		case "24f":
			//Show pic 800
			//Show break out L1 and L2
			showL2Options();
			break;
		case "36f":
			//Show pic 800
			//Show break out L1 and L2
			showL2Options();
			break;
		case "48f":
			//Show pic 800
			//Show break out L1 and L2
			showL2Options();
			break;
		case "72f":
			//Show pic 800
			//Show break out L1 and L2
			showL2Options();
			break;
	}
}

if(co == "Single Fiber" && (ct == "Sub-Unitized" || ct == "Sub-Unitized Armor"))
{
	switch(event.value){
		case "":
			showL2Options();break;
		case "24f":
			hideExceptNF("1024");break;
		case "36f (Build w/48f)":
			hideExceptNF("1025");break;
		case "48f":
			hideExceptNF("1026");break;
		case "72f (Build w/96f)":
			hideExceptNF("1027");break;
		case "96f":
			hideExceptNF("1028");break;
		case "144f":
			hideExceptNF("1029");break;	
	}
}

//if(ct == "Micro Core (250 micron)" && isUni2Uni)
//{
	
//}

function leftExceptNF(showThis){
	var list = ["17l","17al","18l","18al",
				"71l","72l","73l","74l","75l","76l",
				"71la","72la","73la","74la","75la","76la",
				"71lb","72lb","73lb","74lb","75lb","76lb",
				"1002"];
	var i;
	for(i = 0; i < list.length; i++){
		if(showThis == String(list[i])) {
			this.getField(list[i]).display = display.visible;}
		else {
			this.getField(list[i]).display = display.hidden;}	
	}
}

//Hides all the other images except the parameter input
function hideExceptNF(showThis){
	//for the left sides 
	var list = ["17l","17al","18l","18al",
				"71l","72l","73l","74l","75l","76l",
				"71la","72la","73la","74la","75la","76la",
				"71lb","72lb","73lb","74lb","75lb","76lb",
				"1002", // for single - 2mm round
				"1002","1004","1006","1008","1010","1012", // for single - microcore
				"1024","1025","1026","1027","1028","1029", // for single - subuni/subuniarmor 
				"1049A","1050","1051","1052","1053", // for all - sub/subarmor
				"1004","1008","1012","1071","1072", // for all - microcore
				"1004","1008","1012","1071","1072","1079","1049A","1050","1051", // for all - Distribution
				"1048", // multi fiber - microcore
				];
	//for the right sides
	var list2 = ["17r","17ar","18r","18ar",
				 "71r","72r","73r","74r","75r","76r",
				 "71ra","72ra","73ra","74ra","75ra","76ra",
				 "71rb","72rb","73rb","74rb","75rb","76rb",
				 "1003", // for single - 2mm round
				 "1003","1005","1007","1009","1011","1013", // for single - microcore 
				 "1030","1031","1032","1033","1034","1035", //for single - sub/subarmor
				 "1054","1055","1056","1057","1058", // for all - sub/subarmor
				 "1005","1009","1013","1073","1074", // for all - microcore 
				 "1005","1009","1013","1073","1074","1080","1054","1055","1065", // for all - distribution 
				 "1049", // for multi fiber - microcore 
				 ];
	var i;
	for( i = 0; i< list.length; i++)
	{
		if(showThis == String(list[i]))
		{
			//app.alert("In the if statement");
			this.getField(list[i]).display = display.visible;
			this.getField(list2[i]).display = display.visible;
		}
		else
		{
			//app.alert("In the else statement");
			this.getField(list[i]).display = display.hidden;
			this.getField(list2[i]).display = display.hidden;
		}
	}	
}
function showL2Options(){
	this.getField("BOTextA").display = display.visible;
	this.getField("SubunitLLSubUA").display = display.visible;
	this.getField("BOTextB").display = display.visible;
	this.getField("SubunitLLSubUB").display = display.visible;
}
function hideL2Options(){

	this.getField("BOTextA").display = display.hidden;
	this.getField("SubunitLLSubUA").display = display.hidden;
	this.getField("BOTextB").display = display.hidden;
	this.getField("SubunitLLSubUB").display = display.hidden;
}
function hideFurcationOption(){
	this.getField("FurText").display = display.hidden;
	this.getField("FurcationTubeA").display = display.hidden;
	// this.getField("FurcationTubeB").display = display.hidden;
}

function hideStagOptions(){
	this.getField("Text6").display = display.hidden;
	this.getField("StagBoxA").display = display.hidden;
	this.getField("StagBoxB").display = display.hidden;
	this.getField("StagA").display = display.hidden;
	this.getField("StagB").display = display.hidden;
}
