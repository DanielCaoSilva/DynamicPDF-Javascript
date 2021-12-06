var pol = String(event.value);

switch(pol) {
	case " ":
		hideExcept("sdf");
		break;
	case "T568A Straight":
		hideExcept("T568A Straight");
		break;
	case "T568B Straight":
		hideExcept("T568B Straight");
		break;
	case "T568A Fully Crossed":
		hideExcept("T568A Fully Crossed");
		break;
	case "T568B Fully Crossed":
		hideExcept("T568B Fully Crossed");
		break;
	case "T568A Rollover":
		hideExcept("T568A Rollover");
		break;
	case "T568B Rollover":
		hideExcept("T568B Rollover");
		break;
	case "RJ45 Crossover (Half crossed: T568A to T568B)":
		hideExcept("RJ45 Crossover (Half crossed: T568A to T568B)");
		break;
}

function hideExcept(showThis){
	var list = ["T568A Straight","T568B Straight",
				"T568A Fully Crossed","T568B Fully Crossed",
				"T568A Rollover","T568B Rollover",
				"RJ45 Crossover (Half crossed: T568A to T568B)"];
	var i;
	for( i = 0; i<= list.length;i++)
	{
		if(showThis == String(list[i]))
		{
			this.getField(list[i]).display = display.visible;
		}
		else
		{
			this.getField(list[i]).display = display.hidden;
		}
	}
}