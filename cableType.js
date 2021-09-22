switch(event.value) {
    case "Sub-Unitized":

		var f = this.getField("ConnectorOptions");
		switch(f.value) {
			
			case "Single Fiber":
				this.getField("NumberOfFibers").setItems(["","24f","36f (Build w/48f)","48f","72f (Build w/96f)","96f","144f"]);
				//hideExceptCT("L1L2Sub");
				hideExceptCT("17l");
				showFanOut();
				//showLLSub();
				//showLLSubA();
				showL2Options()
			break;
				
			case "Multi Fiber":
				this.getField("NumberOfFibers").setItems(["","24f","36f (Build w/48f)","48f","72f (Build w/96f)","96f","144f"]);
				hideExceptCT("71lshownothing");
				//showHidePullDowns(1,0,0);
				showFanOut();//hideFanOut();
				hideL2Options()
				hideFurcationOption();
			break;
			
			case "Hydra":
				this.getField("NumberOfFibers").setItems(["","24f","36f (Build w/48f)","48f","72f (Build w/96f)","96f","144f"]);
				//hideExceptCT("L1Sub");
				hideExceptCT("18l");
				this.getField("18r").display = display.hidden;
				this.getField("17r").display = display.visible;
				showFanOut();
				showL2Options();
				this.getField("BOTextA").display = display.hidden;
				this.getField("SubunitLLSubUA").display = display.hidden;
				
				//this.getField("SubunitLSubUA").display = display.hidden;
				//showHidePullDowns(3,0,0);
			break;		
		}
    break;

    case "Sub-Unitized Armor":

        //this.getField("NumberOfFibers").setItems(["24f","36f (Build w/48f)","48f","72f (Build w/96f)","96f","144f"]);
		var f = this.getField("ConnectorOptions");
		switch(f.value) {
			case "Single Fiber":
				this.getField("NumberOfFibers").setItems(["","24f","36f (Build w/48f)","48f","72f (Build w/96f)","96f","144f"]);
				//hideExceptCT("L1L2Sub");
				hideExceptCT("17l");
				//showHidePullDowns(2,1,0);
				showFanOut();
				//showLLSub();
				//showLLSubA();
				showL2Options()
			break;
				
			case "Multi Fiber":
				this.getField("NumberOfFibers").setItems(["","24f","36f (Build w/48f)","48f","72f (Build w/96f)","96f","144f"]);
				//hideExcept("L1Sub");
				hideExceptCT("71lshownothing");
				showFanOut();//hideFanOut();
				hideL2Options()
				hideFurcationOption();
				//showHidePullDowns(1,0,0);
			break;
			
			case "Hydra":
				this.getField("NumberOfFibers").setItems(["","24f","36f (Build w/48f)","48f","72f (Build w/96f)","96f","144f"]);
				//hideExceptCT("L1Sub");
				hideExceptCT("18l");
				this.getField("18r").display = display.hidden;
				this.getField("17r").display = display.visible;
				showFanOut();
				showL2Options();
				this.getField("BOTextA").display = display.hidden;
				this.getField("SubunitLLSubUA").display = display.hidden;
				//showHidePullDowns(3,0,0);
			break;		
		}

    break;   

    case "Micro Core (250 micron)":

        //this.getField("NumberOfFibers").setItems(["2f (Build w/12f","4f (Build w/12f)","6f (Build w/12f","8f (Build w/12f)","12f","24f"]);
		var f = this.getField("ConnectorOptions");
		switch(f.value) {
			case "Single Fiber":
				//app.alert("in the single fiber micro core");
				this.getField("NumberOfFibers").setItems(["","1f","2f (Build w/12f)","4f (Build w/12f)","6f (Build w/12f)","8f (Build w/12f)","12f","24f","36f","48f","72f"]);
				//hideExceptCT("L1Sub");
				hideExceptCT("18l");
				//showHidePullDowns(1,1,0);
				
				showFanOut();//hideFanOut();
				hideL2Options()
				
				//showFanOutSubA()
				//showLLSub();
				//showLLSubA();

			break;
				
			case "Multi Fiber":
				this.getField("NumberOfFibers").setItems(["12f"]);
				hideExceptCT("L1Sub");
				hideFanOut();
				hideFurcationOption();
				//hideExceptCT("18l");
				//showHidePullDowns(0,0,0);
			break;
			
			case "Hydra":
				this.getField("NumberOfFibers").setItems(["12f"]);
				hideExceptCT("74l");
				this.getField("74l").display = display.hidden;
				showFanOut();
				hideL2Options();
				this.getField("BOTextB").display = display.hidden;
				this.getField("SubunitLLSubUB").display = display.hidden;
				//hideCTPICs
				//showHidePullDowns(0,0,0);
			break;		
		}

    break;
	
	case "Distribution (900 micron-indoor)":


        this.getField("NumberOfFibers").setItems(["",
												"2f (Build w/12f)",
												"4f (Build w/12f)",
												"6f (Build w/12f)",
												"8f (Build w/12f)",
												"12f",
												"24f",
												"36f (Build w/48f)",
												"48f",
												"72f"]);
		//hideExceptCT("L1Sub");
		hideExceptCT("18l");
		showFanOut();//hideFanOut();
		hideL2Options();
		hideFurcationOption();
		
		//showHidePullDowns(1,0,0);
    break;
	
	case "Distribution (900 micron-indoor/outdoor)":


        this.getField("NumberOfFibers").setItems(["","2f (Build w/12f)",
													"4f (Build w/12f)",
													"6f (Build w/12f)",
													"8f (Build w/12f)",
													"12f",
													"24f",
													"36f (Build w/48f)",
													"48f",
													"72f"]);
		//hideExceptCT("L1Sub");
		hideExceptCT("18l");
		showFanOut();//hideFanOut();
		hideL2Options();
		hideFurcationOption();
		
		//showHidePullDowns(1,0,0);
    break;	
	
	case "2mm Zip Duplex":
		this.getField("NumberOfFibers").setItems(["2f"]);
		hideExceptCT("L1Zip");
		hideL2Options();
		hideFanOut();
		
		
		//showHidePullDowns(0,0,1);
    break;
		
	case "2mm Round Duplex":
		this.getField("NumberOfFibers").setItems(["2f"]);
		hideExceptCT("1002");
		showFanOut();
		hideFurcationOption();
		hideL2Options();
		hideStagOptions();
		
		
		//showHidePullDowns(0,0,1);
    break;

}
//---------------------------------------------------------------------------------------------------------------------------
//Hides all the other images except the parameter input
function hideExceptCT(showThis){
	//var list = ["L1Sub","L1SubStag","L1Zip","L1ZipStag","L1L2Sub","L1L2ZipStag","L1L2Zip","L1L2ZipStag"];
	//var list = ["17l","17al","18l","18al"];
	//var list2 = ["17r","17ar","18r","18ar"];
	var list = ["17l","17al","18l","18al",
				"71l","72l","73l","74l","75l","76l",
				"1002"];
	
	var list2 = ["17r","17ar","18r","18ar",
				 "71r","72r","73r","74r","75r","76r",
				 "1003"];
	//var list2 = ["L1SubA","L1SubStagA","L1ZipA","L1ZipStagA","L1L2SubA","L1L2ZipStagA","L1L2ZipA","L1L2ZipStagA"];
	var i;
	//app.alert(list.length);
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
	//app.alert("out of for loop");
}

//Shows num of BO (for each side), Furcation, and/or zip <-not sure what zip is for
function showHidePullDowns(numBO,fur,zip) {
	var list = ["BOA1","BOA2","BOB1","BOB2","FurcationTubing"];
	
	//Handles the BreakOut Cases
	var i;
	for(i = 1; i <= 4; i++)
	{
		if(numBO>(i-1))
			this.getField(list[i-1]).display = display.visible;
		if(numBO<=(i-1))
			this.getField(list[i-1]).display = display.hidden;
	}
	
	//Handles the Furcations Case 
	if(fur == 1)
		this.getField(list[4]).display = display.visible;
	if(fur == 0)
		this.getField(list[4]).display = display.hidden;
}


//-------------------------------------------------------------------------------------------------------------------------
//Legacy Code Embedding again
function showFanOut()
{

	this.getField("SubunitLSubUA").display = display.visible;
	this.getField("BOTextA").display = display.visible;
	this.getField("Text6").display = display.visible;
	this.getField("StagBoxA").display = display.visible;
	this.getField("FurText").display = display.visible;

	// this.getField("StagA").display = display.visible;
	this.getField("FurcationTubeA").display = display.visible;
	this.getField("PullingEyeA").display = display.visible;

	this.getField("BOTextB").display = display.visible;
	this.getField("SubunitLSubUB").display = display.visible;
	this.getField("StagBoxB").display = display.visible;
	// this.getField("StagB").display = display.visible;
	// this.getField("FurcationTubeB").display = display.visible;
	this.getField("PullingEyeB").display = display.visible;
	this.getField("block").display = display.hidden;
}
	
function hideFanOut()
{
	this.getField("SubunitLSubUA").display = display.hidden;

	this.getField("Text6").display = display.hidden;
	this.getField("StagBoxA").display = display.hidden;
	this.getField("StagA").display = display.hidden;
	this.getField("FurcationTubeA").display = display.hidden;
	this.getField("PullingEyeA").display = display.hidden;
	this.getField("FurText").display = display.hidden;

	this.getField("SubunitLSubUB").display = display.hidden;

	this.getField("StagBoxB").display = display.hidden;
	this.getField("StagB").display = display.hidden;
	//this.getField("FurcationTubeB").display = display.hidden;
	this.getField("PullingEyeB").display = display.hidden;
	this.getField("block").display = display.visible;

	hideStagA();
	hideStagB();
	hideL2Options();
}

function hideL2Options(){

	this.getField("BOTextA").display = display.hidden;
	this.getField("SubunitLLSubUA").display = display.hidden;
	this.getField("BOTextB").display = display.hidden;
	this.getField("SubunitLLSubUB").display = display.hidden;
}

function showL2Options(){
	this.getField("BOTextA").display = display.visible;
	this.getField("SubunitLLSubUA").display = display.visible;
	this.getField("BOTextB").display = display.visible;
	this.getField("SubunitLLSubUB").display = display.visible;
}

function showFanOutSub()
{
	showFanOut();
	showLSub();
	
	this.getField("BOTextB").display = display.hidden;

}

function showFanOutSubA()
{
	showFanOut();
	showLSubA();
	
	this.getField("BOTextA").display = display.hidden;
}

function showFanOut()
{

	this.getField("SubunitLSubUA").display = display.visible;
	this.getField("BOTextA").display = display.visible;
	this.getField("Text6").display = display.visible;
	this.getField("StagBoxA").display = display.visible;
	this.getField("FurText").display = display.visible;

	// this.getField("StagA").display = display.visible;
	this.getField("FurcationTubeA").display = display.visible;
	this.getField("PullingEyeA").display = display.visible;

	this.getField("BOTextB").display = display.visible;
	this.getField("SubunitLSubUB").display = display.visible;
	this.getField("StagBoxB").display = display.visible;
	// this.getField("StagB").display = display.visible;
	// this.getField("FurcationTubeB").display = display.visible;
	this.getField("PullingEyeB").display = display.visible;
	this.getField("block").display = display.hidden;
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

function hideStagB(){
	this.getField("L1Zip").display = display.hidden;
	this.getField("L1ZipStag").display = display.hidden;
	this.getField("L1SubStag").display = display.hidden;
	this.getField("L1Sub").display = display.hidden;
	this.getField("L1L2Zip").display = display.hidden;
	this.getField("L1L2ZipStag").display = display.hidden;
	this.getField("L1L2SubStag").display = display.hidden;
	this.getField("L1L2Sub").display = display.hidden;

}

function hideStagA(){
	this.getField("L1ZipA").display = display.hidden;
	this.getField("L1ZipStagA").display = display.hidden;
	this.getField("L1SubStagA").display = display.hidden;
	this.getField("L1SubA").display = display.hidden;
	this.getField("L1L2ZipA").display = display.hidden;
	this.getField("L1L2ZipStagA").display = display.hidden;
	this.getField("L1L2SubStagA").display = display.hidden;
	this.getField("L1L2SubA").display = display.hidden;

}

function showLZipA(){
	hideStagA();
	this.getField("L1ZipA").display = display.visible;	
}

function showLZip(){
	hideStagB();
	hideL2Options();
	this.getField("L1Zip").display = display.visible;
}

function showLZipStagA(){
	hideStagA();
	this.getField("L1ZipStagA").display = display.visible;
}

function showLZipStag(){
	hideStagB();
	hideL2Options();
	this.getField("L1ZipStag").display = display.visible;
}


function showLSubA(){
	hideStagA();
	this.getField("L1SubA").display = display.visible;
}

function showLSub(){
	hideStagB();
	hideL2Options();
	this.getField("L1Sub").display = display.visible;
}

function showLSubStagA(){
	hideStagA();
	this.getField("L1SubStagA").display = display.visible;
}

function showLSubStag(){
	hideStagB();
	hideL2Options();
	this.getField("L1SubStag").display = display.visible;
}

function showLLZipA(){
	hideStagA();
	showL2Options();
	this.getField("L1L2ZipA").display = display.visible;
}

function showLLZip(){
	hideStagB();
	showL2Options();
	this.getField("L1L2Zip").display = display.visible;
}

function showLLZipStagA(){
	hideStagA();
	showL2Options();
	this.getField("L1L2ZipStagA").display = display.visible;
}

function showLLZipStag(){
	hideStagB();
	showL2Options();
	this.getField("L1L2ZipStag").display = display.visible;
}

function showLLSubA(){
	hideStagA();
	showL2Options();
	this.getField("L1L2SubA").display = display.visible;
}

function showLLSub(){
	hideStagB();
	showL2Options();
	this.getField("L1L2Sub").display = display.visible;
}

function showLLSubStagA(){
	hideStagA();
	showL2Options();
	this.getField("L1L2SubStagA").display = display.visible;
}

function showLLSubStag(){
	hideStagB();
	showL2Options();
	this.getField("L1L2SubStag").display = display.visible;
}



function setFurcationTube(furType){ //expects 'color' or 'duplex'



var mpoState = this.getField("CableOptionsMPO").value;
var sfState = this.getField("CableOptions").value;
var tube = this.getField("FurcationTubeA").value; //expects 'color' or 'duplex'
var tube = furType;
var stagBoxB = this.getField("StagBoxB").value;
var stagBoxA = this.getField("StagBoxA").value;



if(mpoState != "Off"){
	console.println("MPO on");
	
	switch(tube){ //duplex or color
		case "duplex":
			console.println("Duplex");

		break;

		case "color":
			console.println("Color");
			(stagBoxB == "Yes") ? showLSubStag() : showLSub();
			(stagBoxA == "Yes") ? showLSubStagA() : showLSubA();

		break;

		default:


		break;
	}
	
}else if(sfState != "Off"){
	console.println("SF on");

	if(sfState == "SF900" || sfState == "SF250"){
		switch(tube){ //duplex or color
			case "duplex":
				console.println("L1 SF Duplex");
				(stagBoxB == "Yes") ? showLZipStag() : showLZip();
				(stagBoxA == "Yes") ? showLZipStagA() : showLZipA();
			break;

			case "color":
				console.println("L1 SF Color");
				(stagBoxB == "Yes") ? showLSubStag() : showLSub();
				(stagBoxA == "Yes") ? showLSubStagA() : showLSubA();
			break;

			default:


			break;
		}
	}else if(sfState == "SFSubUnit" || sfState == "SFSubArm"){
		switch(tube){ //duplex or color
			case "duplex":
				console.println("L1L2 SF Duplex");
				(stagBoxB == "Yes") ? showLLZipStag() : showLLZip();
				(stagBoxA == "Yes") ? showLLZipStagA() : showLLZipA();

			break;

			case "color":
				console.println("L1L2 SF Color");
				(stagBoxB == "Yes") ? showLLSubStag() : showLLSub();
				(stagBoxA == "Yes") ? showLLSubStagA() : showLLSubA();

			break;

			default:


			break;
		}
	}

}else {
	console.println("all Off")
}

}

function hideLabelGroup(){
	this.getField("LabelBody").display = display.hidden;
	this.getField("LabelBox").display = display.hidden;
	this.getField("LabelT").display = display.hidden;
	this.getField("LabelText").display = display.hidden;
	this.getField("LabelDist").display = display.hidden;
	this.getField("LabelNote").display = display.hidden;

}

function showLabelGroup(){
	this.getField("LabelBody").display = display.visible;
	this.getField("LabelBox").display = display.visible;
	this.getField("LabelT").display = display.visible;
	this.getField("LabelText").display = display.visible;
	this.getField("LabelDist").display = display.visible;
	this.getField("LabelNote").display = display.visible;
}	

