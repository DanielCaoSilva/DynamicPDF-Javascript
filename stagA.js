var co = this.getField("ConnectorOptions");
var ct = this.getField("CableType");
//app.alert(co.value);
if(this.getField("StagBoxA").value =="Yes")
{
	//for single fiber with sub unitized or sub unit. armor 
    if((co.value == "Single Fiber") && (ct.value == "Sub-Unitized" || ct.value == "Sub-Unitized Armor")){
		this.getField("17al").display = display.visible;
		this.getField("17l").display = display.hidden;
	}
	//for multi fiber with various special cases 
	if((co.value == "Multi Fiber") && (ct.value == "Sub-Unitized" || ct.value == "Sub-Unitized Armor")){
		var nf = String(this.getField("NumberOfFibers").value);
		switch(nf){
			case "24f":
				//swap the left image with the staggered version
				change2Stag("71l");
			break;
			case "36f (Build w/48f)":
				change2Stag("72l");
			break;
			case "48f":
				change2Stag("73l");
			break;
			case "72f (Build w/96f)":
				change2Stag("74l");
			break;
			case "96f":
				change2Stag("75l");
			break;
			case "144f":
				change2Stag("76l");
			break;
		}
	}
	//for hydra with special cases 
	if((co.value == "Hydra") && (ct.value == "Sub-Unitized" || ct.value == "Sub-Unitized Armor")){
		var ng = String(this.getField("NumberOfFibers").value);
		switch(ng){
			case "24f":
				//swap the left image with the staggered version
				change2Stag("71l");
			break;
			case "36f (Build w/48f)":
				change2Stag("72l");
			break;
			case "48f":
				change2Stag("73l");
			break;
			case "72f (Build w/96f)":
				change2Stag("74l");
			break;
			case "96f":
				change2Stag("75l");
			break;
			case "144f":
				change2Stag("76l");
			break;
		}
	}
	
	//for hydra with micro core option
	if((co.value == "Hydra") && (ct.value == "Micro Core (250 micron)")){
		this.getField("74la").display = display.visible;
		this.getField("74l").display = display.hidden;
	}
	//for all other cases (
	else{
		this.getField("18al").display = display.visible;
		this.getField("18l").display = display.hidden;
	}
}
else{
	//for single fiber with sub unitized or sub unit. armor 
    if((co.value == "Single Fiber") && (ct.value == "Sub-Unitized" || ct.value == "Sub-Unitized Armor")){
		this.getField("17al").display = display.hidden;
		this.getField("17l").display = display.visible;
	}
	//for multi fiber with various special cases 
	if((co.value == "Multi Fiber") && (ct.value == "Sub-Unitized" || ct.value == "Sub-Unitized Armor")){
		var nf = String(this.getField("NumberOfFibers").value);
		switch(nf){
			case "24f":
				//swap the left image with the staggered version
				changeFromStag("71l");
			break;
			case "36f (Build w/48f)":
				changeFromStag("72l");
			break;
			case "48f":
				changeFromStag("73l");
			break;
			case "72f (Build w/96f)":
				changeFromStag("74l");
			break;
			case "96f":
				changeFromStag("75l");
			break;
			case "144f":
				changeFromStag("76l");
			break;
		}
	}
	
	//for hydra with various special cases 
	if((co.value == "Hydra") && (ct.value == "Sub-Unitized" || ct.value == "Sub-Unitized Armor")){
		var ng = String(this.getField("NumberOfFibers").value);
		switch(ng){
			case "24f":
				//swap the left image with the staggered version
				changeFromStag("71l");
			break;
			case "36f (Build w/48f)":
				changeFromStag("72l");
			break;
			case "48f":
				changeFromStag("73l");
			break;
			case "72f (Build w/96f)":
				changeFromStag("74l");
			break;
			case "96f":
				changeFromStag("75l");
			break;
			case "144f":
				changeFromStag("76l");
			break;
		}
	}
	//for hydra with micro core option
	if((co.value == "Hydra") && (ct.value == "Micro Core (250 micron)")){
		this.getField("74la").display = display.hidden;
		this.getField("74l").display = display.visible;
	}
	else{
		this.getField("18al").display = display.hidden;
		this.getField("18l").display = display.visible;
		//app.alert("in the else");
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
