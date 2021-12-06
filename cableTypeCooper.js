if(event.value == "CAT5E" || event.value == "CAT5E Shielded") {
	this.getField("wireGauge").setItems(["","24AWG: Solid","24AWG: Stranded","26AWG: Stranded"]);
}
if(event.value == "CAT6" || event.value == "CAT6 Shielded") {
	this.getField("wireGauge").setItems(["","23AWG: Solid","24AWG: Solid","24AWG: Stranded","26AWG: Stranded","26AWG: Stranded"]);
}
if(event.value == "CAT6A" || event.value == "CAT6A Shielded") {
	this.getField("wireGauge").setItems(["","23AWG: Solid","26AWG: Stranded","28AWG: Stranded"]);
}


if(event.value == "Bubble"){
	this.getField("colorA").setItems(["","Clear","White","Brown","Green","Yellow","Grey","Pink","Blue","Red","Black","Violet","Orange","Spring Green","Light Blue"]);
}
if(event.value == "Bubble"){
	this.getField("colorB").setItems(["","Clear","White","Brown","Green","Yellow","Grey","Pink","Blue","Red","Black","Violet","Orange","Spring Green","Light Blue"]);
}


