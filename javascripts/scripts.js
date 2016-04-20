function modelChange() {
	document.getElementById("Type").options.length = 0;
	if(document.getElementById("Model").value == "Avalon"){
		document.getElementById("Type").appendChild(new Option("XLE", "XLE"));
		document.getElementById("Type").appendChild(new Option("XLE Plus", "XLE Plus"));
		document.getElementById("Type").appendChild(new Option("XLE Premium", "XLE Premium"));
		document.getElementById("Type").appendChild(new Option("Touring", "Touring"));
		document.getElementById("Type").appendChild(new Option("Limited", "Limited"));
		document.getElementById("Type").appendChild(new Option("Hybrid XLE Plus", "Hybrid XLE Plus"));
		document.getElementById("Type").appendChild(new Option("Hybrid XLE Premium", "Hybrid XLE Premium"));
		document.getElementById("Type").appendChild(new Option("Hybrid Limited", "Hybrid Limited"));
	}
	else if(document.getElementById("Model").value == "Camry"){
		document.getElementById("Type").appendChild(new Option("LE", "LE"));
		document.getElementById("Type").appendChild(new Option("XLE", "XLE"));
		document.getElementById("Type").appendChild(new Option("SE", "SE"));
		document.getElementById("Type").appendChild(new Option("Special Edition", "Special Edition"));
		document.getElementById("Type").appendChild(new Option("XSE", "XSE"));
		document.getElementById("Type").appendChild(new Option("Hybrid LE", "Hybrid LE"));
		document.getElementById("Type").appendChild(new Option("Hybrid SE", "Hybrid SE"));
		document.getElementById("Type").appendChild(new Option("Hybrid XLE", "Hybrid XLE"));
	}
	else if(document.getElementById("Model").value == "Corolla"){
		document.getElementById("Type").appendChild(new Option("L", "L"));
		document.getElementById("Type").appendChild(new Option("LE", "LE"));
		document.getElementById("Type").appendChild(new Option("LE Eco", "LE Eco"));
		document.getElementById("Type").appendChild(new Option("S", "S"));
		document.getElementById("Type").appendChild(new Option("Special Edition", "Special Edition"));
	} 
	else if(document.getElementById("Model").value == "Prius"){
		document.getElementById("Type").appendChild(new Option("Two", "Two"));
		document.getElementById("Type").appendChild(new Option("Two Eco", "Two Eco"));
		document.getElementById("Type").appendChild(new Option("Three", "Three"));
		document.getElementById("Type").appendChild(new Option("Three Touring", "Three Touring"));
		document.getElementById("Type").appendChild(new Option("Four", "Four"));
		document.getElementById("Type").appendChild(new Option("Four Touring", "Four Touring"));
	}
	else if(document.getElementById("Model").value == "Prius c"){
		document.getElementById("Type").appendChild(new Option("One", "One"));
		document.getElementById("Type").appendChild(new Option("Two", "Two"));
		document.getElementById("Type").appendChild(new Option("Persona Series Special Edition", "Persona Series Special Edition"));
		document.getElementById("Type").appendChild(new Option("Three", "Three"));
		document.getElementById("Type").appendChild(new Option("Four", "Four"));
	} 
	else if(document.getElementById("Model").value == "Prius v"){
		document.getElementById("Type").appendChild(new Option("Two", "Two"));
		document.getElementById("Type").appendChild(new Option("Three", "Three"));
		document.getElementById("Type").appendChild(new Option("Four", "Four"));
		document.getElementById("Type").appendChild(new Option("Five", "Five"));
	} 
	else if(document.getElementById("Model").value == "Yaris"){
		document.getElementById("Type").appendChild(new Option("3-Door L", "3-Door L"));
		document.getElementById("Type").appendChild(new Option("3-Door LE", "3-Door LE"));
		document.getElementById("Type").appendChild(new Option("5-Door L", "5-Door L"));
		document.getElementById("Type").appendChild(new Option("5-Door LE", "5-Door LE"));
		document.getElementById("Type").appendChild(new Option("5-Door SE", "5-Door SE"));
	}         
}
function modelChange2() {
	document.getElementById("Type").options.length = 0;
	if(document.getElementById("Model").value == ""){
		document.getElementById("Type").appendChild(new Option("", ""));
	}
	else if(document.getElementById("Model").value == "Avalon"){
		document.getElementById("Type").appendChild(new Option("", ""));
		document.getElementById("Type").appendChild(new Option("XLE", "XLE"));
		document.getElementById("Type").appendChild(new Option("XLE Plus", "XLE Plus"));
		document.getElementById("Type").appendChild(new Option("XLE Premium", "XLE Premium"));
		document.getElementById("Type").appendChild(new Option("Touring", "Touring"));
		document.getElementById("Type").appendChild(new Option("Limited", "Limited"));
		document.getElementById("Type").appendChild(new Option("Hybrid XLE Plus", "Hybrid XLE Plus"));
		document.getElementById("Type").appendChild(new Option("Hybrid XLE Premium", "Hybrid XLE Premium"));
		document.getElementById("Type").appendChild(new Option("Hybrid Limited", "Hybrid Limited"));
	}
	else if(document.getElementById("Model").value == "Camry"){
		document.getElementById("Type").appendChild(new Option("", ""));
		document.getElementById("Type").appendChild(new Option("LE", "LE"));
		document.getElementById("Type").appendChild(new Option("XLE", "XLE"));
		document.getElementById("Type").appendChild(new Option("SE", "SE"));
		document.getElementById("Type").appendChild(new Option("Special Edition", "Special Edition"));
		document.getElementById("Type").appendChild(new Option("XSE", "XSE"));
		document.getElementById("Type").appendChild(new Option("Hybrid LE", "Hybrid LE"));
		document.getElementById("Type").appendChild(new Option("Hybrid SE", "Hybrid SE"));
		document.getElementById("Type").appendChild(new Option("Hybrid XLE", "Hybrid XLE"));
	}
	else if(document.getElementById("Model").value == "Corolla"){
		document.getElementById("Type").appendChild(new Option("", ""));
		document.getElementById("Type").appendChild(new Option("L", "L"));
		document.getElementById("Type").appendChild(new Option("LE", "LE"));
		document.getElementById("Type").appendChild(new Option("LE Eco", "LE Eco"));
		document.getElementById("Type").appendChild(new Option("S", "S"));
		document.getElementById("Type").appendChild(new Option("Special Edition", "Special Edition"));
	} 
	else if(document.getElementById("Model").value == "Prius"){
		document.getElementById("Type").appendChild(new Option("", ""));
		document.getElementById("Type").appendChild(new Option("Two", "Two"));
		document.getElementById("Type").appendChild(new Option("Two Eco", "Two Eco"));
		document.getElementById("Type").appendChild(new Option("Three", "Three"));
		document.getElementById("Type").appendChild(new Option("Three Touring", "Three Touring"));
		document.getElementById("Type").appendChild(new Option("Four", "Four"));
		document.getElementById("Type").appendChild(new Option("Four Touring", "Four Touring"));
	}
	else if(document.getElementById("Model").value == "Prius c"){
		document.getElementById("Type").appendChild(new Option("", ""));
		document.getElementById("Type").appendChild(new Option("One", "One"));
		document.getElementById("Type").appendChild(new Option("Two", "Two"));
		document.getElementById("Type").appendChild(new Option("Persona Series Special Edition", "Persona Series Special Edition"));
		document.getElementById("Type").appendChild(new Option("Three", "Three"));
		document.getElementById("Type").appendChild(new Option("Four", "Four"));
	} 
	else if(document.getElementById("Model").value == "Prius v"){
		document.getElementById("Type").appendChild(new Option("", ""));
		document.getElementById("Type").appendChild(new Option("Two", "Two"));
		document.getElementById("Type").appendChild(new Option("Three", "Three"));
		document.getElementById("Type").appendChild(new Option("Four", "Four"));
		document.getElementById("Type").appendChild(new Option("Five", "Five"));
	} 
	else if(document.getElementById("Model").value == "Yaris"){
		document.getElementById("Type").appendChild(new Option("", ""));
		document.getElementById("Type").appendChild(new Option("3-Door L", "3-Door L"));
		document.getElementById("Type").appendChild(new Option("3-Door LE", "3-Door LE"));
		document.getElementById("Type").appendChild(new Option("5-Door L", "5-Door L"));
		document.getElementById("Type").appendChild(new Option("5-Door LE", "5-Door LE"));
		document.getElementById("Type").appendChild(new Option("5-Door SE", "5-Door SE"));
	}         
}
function getVINInfo(val){
	if(val.length >= 10){
		console.log("val"+val);
		var year_temp = 0000;
		if(val.substring(9, 10) == 'V'){
			year_temp = 1997;
		}
		else if(val.substring(9, 10) == 'W'){
			year_temp = 1998;
		}
		else if(val.substring(9, 10) == 'X'){
			year_temp = 1999;
		}
		else if(val.substring(9, 10) == 'Y'){
			year_temp = 2000;
		}
		else if(val.substring(9, 10) >= 1 && val.substring(9, 10) <= 9){
			year_temp = 200 + val.substring(9, 10);
		}
		else if(val.substring(9, 10) == 'A'){
			year_temp = 2010;
		}
		else if(val.substring(9, 10) == 'B'){
			year_temp = 2011;
		}
		else if(val.substring(9, 10) == 'C'){
			year_temp = 2012;
		}
		else if(val.substring(9, 10) == 'D'){
			year_temp = 2013;
		}
		else if(val.substring(9, 10) == 'E'){
			year_temp = 2014;
		}
		else if(val.substring(9, 10) == 'F'){
			year_temp = 2015;
		}
		else if(val.substring(9, 10) == 'G'){
			year_temp = 2016;
		}
		document.getElementById("Year").value = year_temp;
		document.getElementById("Year").min = year_temp;
		document.getElementById("Year").max = year_temp;
	}
}
// function loadTest(){
// 	console.log("Run load test");
// 	document.getElementById("theDate").value = new Date().toISOString().substring(0, 10);
// 	var vin_temp = "JT1BHZ3BXG8";
// 	var vin_temp = vin_temp + Math.floor(Math.random() * (999999 - 111111) + 111111);
// 	document.getElementById("VIN").value = vin_temp;
// 	document.getElementById("Classification").value = "New";
// 	document.getElementById("Year").value = 1952;
// 	document.getElementById("Model").value = "Avalon";
// 	document.getElementById("Type").value = "XLE";
// 	document.getElementById("Engine").value = "V6";
// 	document.getElementById("Transmission").value = "Automatic";
// 	document.getElementById("Color").value = "Yellow";
// 	document.getElementById("Audio").value = "CD Player";
// 	document.getElementById("Mileage").value = "30/29";
// 	document.getElementById("Accessories").value = "none";
// 	document.getElementById('insertForm').submit();
// }