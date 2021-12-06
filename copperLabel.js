var label = String(event.value);

if(label == "No Label" || label == " " || label == "") {
	this.getField("LabelPic").display = display.hidden;
	this.getField("Label1").display = display.hidden;
	this.getField("Label2").display = display.hidden;
}
if(label == "One Label End A" || label == "One Label End B") {
	this.getField("LabelPic").display = display.visible;
    this.getField("Label1").display = display.visible;
	this.getField("Label2").display = display.hidden;
}
if(label == "Two Labels") {
	this.getField("LabelPic").display = display.visible;
    this.getField("Label1").display = display.visible;
	this.getField("Label2").display = display.visible;
}
