switch(event.value) {
	
	
    case "Single Fiber":
		this.getField("CableType").setItems(["","Sub-Unitized","Sub-Unitized Armor",
											"Micro Core (250 micron)",
											"Distribution (900 micron-indoor)","Distribution (900 micron-indoor/outdoor)",
											"2mm Zip Duplex","2mm Round Duplex"]);
		showCONotes("single");
		//this.getField("ConnectorGroupA").value = "Choice1";
		this.getField("SingleFiberConA.0").display = display.visible;
		this.getField("MultiFiberConA").display = display.hidden;
		this.getField("SingleFiberConB").display = display.visible;
		this.getField("MultiFiberConB").display = display.hidden;
		this.getField("PolaritySF").display = display.visible;
		this.getField("PolarityHF").display = display.hidden;
		this.getField("PolarityMF").display = display.hidden;
		this.getField("hydraFiberConB").display = display.hidden;
		
		//Icons
		this.getField("QSFPPol").display = display.hidden;
	break;


    case "Multi Fiber":
        this.getField("CableType").setItems(["","Sub-Unitized","Sub-Unitized Armor","Micro Core (250 micron)"]);
		showCONotes("multi");
		//this.getField("ConnectorGroupA").value = "Choice2";
		this.getField("SingleFiberConA.0").display = display.hidden;
		this.getField("MultiFiberConA").display = display.visible;
		this.getField("SingleFiberConB").display = display.hidden;
		this.getField("MultiFiberConB").display = display.visible;
		this.getField("PolaritySF").display = display.hidden;
		this.getField("PolarityHF").display = display.hidden;
		this.getField("PolarityMF").display = display.visible;
		this.getField("hydraFiberConB").display = display.hidden;
		
		//Icons
		this.getField("QSFPPol").display = display.hidden;
    break;   


    case "Hydra":
        this.getField("CableType").setItems(["","Sub-Unitized","Sub-Unitized Armor","Micro Core (250 micron)"]);
		showCONotes("hydra");
		//this.getField("ConnectorGroupA").value = "Choice3";
		this.getField("SingleFiberConA.0").display = display.hidden;
		this.getField("MultiFiberConA").display = display.visible;
		this.getField("SingleFiberConB").display = display.hidden;
		this.getField("MultiFiberConB").display = display.hidden;
		this.getField("PolaritySF").display = display.hidden;
		this.getField("PolarityHF").display = display.visible;
		this.getField("PolarityMF").display = display.hidden;
		this.getField("hydraFiberConB").display = display.visible;
		
		//Icons
		//this.getField("QSFPPol").display = display.visible;
    break;
}
function showCONotes(opt){
	switch(opt){
		case "single":
			this.getField("SingleNote").display = display.visible;
			this.getField("MultiNote").display = display.hidden;
			this.getField("HydraNote").display = display.hidden;
			break;
		case "multi":
			this.getField("SingleNote").display = display.hidden;
			this.getField("MultiNote").display = display.visible;
			this.getField("HydraNote").display = display.hidden;
			break;
		case "hydra":
			this.getField("SingleNote").display = display.hidden;
			this.getField("MultiNote").display = display.hidden;
			this.getField("HydraNote").display = display.visible;
			break;
	}
}