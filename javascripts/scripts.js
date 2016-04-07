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