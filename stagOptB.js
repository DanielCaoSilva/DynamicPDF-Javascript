var check = this.getField("StagBoxB").value;

var a = "3\" Stagger, Fiber 1 is the Shortest";
var b = "3\" Stagger, Fiber 1 is the Longest";
var ct = String(this.getField("CableType").value);
var co = String(this.getField("ConnectorOptions").value);
var nf = String(this.getField("NumberOfFibers").value);

switch(check){

	case "Yes":
		this.getField("StagB").display = display.visible;
		//3" Stagger is the Shortest Case -> change from b to a
		if((event.value == a)&&(co == "Multi Fiber")&&((ct == "Sub-Unitized")||(ct == "Sub-Unitized Armor"))) 
		{
			switch(nf)
			{
				case "24f":
					swapStagB2A("71r");
					break;
				 
				case "36f (Build w/48f)":
					swapStagB2A("72r");
					break;
				
				case "48f":
					swapStagB2A("73r");
				break;
				
				case "72f (Build w/96f)":
					swapStagB2A("74r");
				break;
				
				case "96f":
					swapStagB2A("75r");
				break;
				
				case "144f":
					swapStagB2A("76r");
				break;
			}
		} 
		if((event.value == b)&&(co == "Multi Fiber")&&((ct == "Sub-Unitized")||(ct == "Sub-Unitized Armor"))) 
		{
			//app.alert("in if");
			switch(nf){
				case "24f":
					//app.alert("In case");
					swapStagA2B("71r");
				break;
				
				case "36f (Build w/48f)":
					swapStagA2B("72r");
				break;
				
				case "48f":
					swapStagA2B("73r");
				break;
				
				case "72f (Build w/96f)":
					swapStagA2B("74r");
				break;
				
				case "96f":
					swapStagA2B("75r");
				break;
				
				case "144f":
					swapStagA2B("76r");
				break;
			}
		}
		// this.getField("BOTextA").display = display.visible;
		// this.getField("SubunitLLSubUA").display = display.visible;
	break;

	case "Off":
		this.getField("StagB").display = display.hidden;
		// this.getField("BOTextA").display = display.hidden;
		// this.getField("SubunitLLSubUA").display = display.hidden;

	break;
	default:
		this.getField("StagB").display = display.hidden;
		// this.getField("BOTextA").display = display.hidden;
		// this.getField("SubunitLLSubUA").display = display.hidden;

	break;
}
function swapStagA2B(img)
{
	this.getField(img).display = display.hidden;
	this.getField(img+"a").display = display.hidden;
	this.getField(img+"b").display = display.visible;
}
function swapStagB2A(img){
	this.getField(img).display = display.hidden;
	this.getField(img+"b").display = display.hidden;
	this.getField(img+"a").display = display.visible;
}



























