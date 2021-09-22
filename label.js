if ( event.target.isBoxChecked(0)) {
    this.getField("Line1").display = display.visible;
    this.getField("Line2").display = display.visible;
	this.getField("Line1Label").display = display.visible;
    this.getField("Line2Label").display = display.visible;
} else {
    this.getField("Line1").display = display.hidden;
    this.getField("Line2").display = display.hidden;
	this.getField("Line1Label").display = display.hidden;
    this.getField("Line2Label").display = display.hidden;
}