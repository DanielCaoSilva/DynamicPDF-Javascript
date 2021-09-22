//clear
var fullList = ["17l","17al","18l","18al",
				"17r","17ar","18r","18ar",
				"1a","1b","1c","2a","2b","2c","2d","2e","3a","3b","3c","3d","1001","1000",
				"71l","72l","73l","74l","75l","76l",
				"71r","72r","73r","74r","75r","76r",
				"71la","72la","73la","74la","75la","76la",
				"71lb","72lb","73lb","74lb","75lb","76lb",
				"71ra","72ra","73ra","74ra","75ra","76ra",
				"71rb","72rb","73rb","74rb","75rb","76rb",
				"1002", // for single - 2mm round
				"1002","1004","1006","1008","1010","1012", // for single - microcore
				"1024","1025","1026","1027","1028","1029", // for single - subuni/subuniarmor 
				"1049A","1050","1051","1052","1053", // for all - sub/subarmor
				"1004","1008","1012","1071","1072", // for all - microcore
				"1004","1008","1012","1071","1072","1079","1049A","1050","1051", // for all - Distribution
				"1048", // multi fiber - microcore
				"1003", // for single - 2mm round
				"1003","1005","1007","1009","1011","1013", // for single - microcore 
				"1030","1031","1032","1033","1034","1035", //for single - sub/subarmor
				"1054","1055","1056","1057","1058", // for all - sub/subarmor
				"1005","1009","1013","1073","1074", // for all - microcore 
				"1005","1009","1013","1073","1074","1080","1054","1055","1065", // for all - distribution 
				"1049" // for multi fiber - microcore
				];
				
//app.alert("before loop");
this.getField("Line1").display = display.hidden;
this.getField("Line2").display = display.hidden;
this.getField("Line1Label").display = display.hidden;
this.getField("Line2Label").display = display.hidden;
this.getField("SingleNote").display = display.hidden;
this.getField("MultiNote").display = display.hidden;
this.getField("HydraNote").display = display.hidden;

this.getField("NumberOfFibers").setItems([""]);

this.getField("PolaritySF").setItems(["","Polarity A-B: Clipped","Polarity A-A: Clipped","No Polarity-Unclipped"]);

var i;
for(i = 0; i<fullList.length; i++)
{
	this.getField(fullList[i]).display = display.hidden;
}


hideL2Options();

function hideL2Options(){

	this.getField("BOTextA").display = display.hidden;
	this.getField("SubunitLLSubUA").display = display.hidden;
	this.getField("BOTextB").display = display.hidden;
	this.getField("SubunitLLSubUB").display = display.hidden;
}