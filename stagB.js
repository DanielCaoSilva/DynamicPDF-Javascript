var co = this.getField("ConnectorOptions");
var ct = this.getField("CableType");
if(this.getField("StagBoxB").value =="Yes")
{
	if(((co.value == "Single Fiber") || (co.value == "Hydra")) && ((ct.value == "Sub-Unitized") || (ct.value == "Sub-Unitized Armor")))
	{
		this.getField("17ar").display = display.visible;
		this.getField("17r").display = display.hidden;
	}
	//for multi fiber with various special cases 
	if((co.value == "Multi Fiber") && (ct.value == "Sub-Unitized" || ct.value == "Sub-Unitized Armor")){
		var nf = String(this.getField("NumberOfFibers").value);
		switch(nf){
			case "24f":
				//swap the left image with the staggered version
				change2Stag("71r");
			break;
			case "36f (Build w/48f)":
				change2Stag("72r");
			break;
			case "48f":
				change2Stag("73r");
			break;
			case "72f (Build w/96f)":
				change2Stag("74r");
			break;
			case "96f":
				change2Stag("75r");
			break;
			case "144f":
				change2Stag("76r");
			break;
		}
	}
	//for hydra with micro core option
	if((co.value == "Hydra") && (ct.value == "Micro Core (250 micron)")){
		this.getField("74ra").display = display.visible;
		this.getField("74r").display = display.hidden;
	}
	else{
		this.getField("18ar").display = display.visible;
		this.getField("18r").display = display.hidden;
	}
}
else{
	if(((co.value == "Single Fiber") || (co.value == "Hydra")) && ((ct.value == "Sub-Unitized") || (ct.value == "Sub-Unitized Armor")))
	{
		this.getField("17ar").display = display.hidden;
		this.getField("17r").display = display.visible;
	}
		//for multi fiber with various special cases 
	if((co.value == "Multi Fiber") && (ct.value == "Sub-Unitized" || ct.value == "Sub-Unitized Armor")){
		var nf = String(this.getField("NumberOfFibers").value);
		switch(nf){
			case "24f":
				//swap the left image with the staggered version
				changeFromStag("71r");
			break;
			case "36f (Build w/48f)":
				changeFromStag("72r");
			break;
			case "48f":
				changeFromStag("73r");
			break;
			case "72f (Build w/96f)":
				changeFromStag("74r");
			break;
			case "96f":
				changeFromStag("75r");
			break;
			case "144f":
				changeFromStag("76r");
			break;
		}
	}
	//for hydra with micro core option
	if((co.value == "Hydra") && (ct.value == "Micro Core (250 micron)")){
		this.getField("74ra").display = display.hidden;
		this.getField("74r").display = display.visible;
	}
	else{
		this.getField("18ar").display = display.hidden;
		this.getField("18r").display = display.visible;
	}
}
function change2Stag(img){
	this.getField(img).display = display.hidden;
	this.getField(img+"a").display = display.visible;
}
function changeFromStag(img){
	this.getField(img+"a").display = display.hidden;
	this.getField(img+"b").display = display.hidden;
	this.getField(img).display = display.visible;
}
