var nf = String(this.getField("NumberOfFibers").value);

if((nf == "2mm Zip Duplex"))
{
	this.getField("ToleranceNote").display = display.hidden;
}
else 
{
	this.getField("ToleranceNote").display = display.visible;
}
