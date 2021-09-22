//for the uniboot to uniboot case
var conA = String(this.getField("SingleFiberConA.0").value);
var uniboot = "LC UNIBOOT UPC";
if(event.value == uniboot && conA == uniboot)
{
	//Set the new menu items for Polarity 
	this.getField("PolaritySF").setItems(["","Polarity: A-B","Polarity: A-A"]);
	this.getField("CableType").setItems(["","Sub-Unitized","Sub-Unitized Armor","2mm Round Duplex","Micro Core (250 micron)"]);

}
else 
{
	this.getField("PolaritySF").setItems(["","Polarity A-B: Clipped","Polarity A-A: Clipped","No Polarity-Unclipped"]);
}
