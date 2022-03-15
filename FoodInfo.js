window.onload = function(){ 
    //wrapping all the content under "window.onload = function() { ... }" as 'onmouseover' was not working without it..
	
	
	//for the first icon:
	document.getElementById("burger").onmouseover = addTitle1;
	document.getElementById("burger").onmouseout = removeTitle1;
	function addTitle1(){
		document.getElementById("icon1").style.position = "absolute";
		document.getElementById("icon1").style.marginLeft = "6px";
		document.getElementById("icon1").style.paddingLeft = "10px";
		document.getElementById("icon1").style.paddingRight = "10px";
		document.getElementById("icon1").style.backgroundColor = "yellow";
		document.getElementById("icon1").style.color = "black";
		document.getElementById("icon1").style.border = "3px solid black";
		document.getElementById("icon1").style.borderRadius = "25px";
		document.getElementById("icon1").style.fontWeight = "bold";
		document.getElementById("icon1").style.fontSize = "15px";
		document.getElementById("icon1").innerHTML = "burger";
	}
	function removeTitle1(){
		document.getElementById("icon1").innerHTML = "";
		document.getElementById("icon1").style.border = "0px solid black";
	}
	
	
	
	//for the second icon:
	document.getElementById("pizza").onmouseover = addTitle2;
	document.getElementById("pizza").onmouseout = removeTitle2;
	function addTitle2(){
		document.getElementById("icon2").style.position = "absolute";
		document.getElementById("icon2").style.marginLeft = "10px";
		document.getElementById("icon2").style.paddingLeft = "10px";
		document.getElementById("icon2").style.paddingRight = "10px";
		document.getElementById("icon2").style.backgroundColor = "yellow";
		document.getElementById("icon2").style.color = "black";
		document.getElementById("icon2").style.border = "3px solid black";
		document.getElementById("icon2").style.borderRadius = "25px";
		document.getElementById("icon2").style.fontWeight = "bold";
		document.getElementById("icon2").style.fontSize = "15px";
		document.getElementById("icon2").innerHTML = "pizza";
	}
	function removeTitle2(){
		document.getElementById("icon2").innerHTML = "";
		document.getElementById("icon2").style.border = "0px solid black";
	}
	
	
	
	//for the third icon:
	document.getElementById("noodles").onmouseover = addTitle3;
	document.getElementById("noodles").onmouseout = removeTitle3;
	function addTitle3(){
		document.getElementById("icon3").style.position = "absolute";
		document.getElementById("icon3").style.marginLeft = "5px";
		document.getElementById("icon3").style.paddingLeft = "10px";
		document.getElementById("icon3").style.paddingRight = "10px";
		document.getElementById("icon3").style.backgroundColor = "yellow";
		document.getElementById("icon3").style.color = "black";
		document.getElementById("icon3").style.border = "3px solid black";
		document.getElementById("icon3").style.borderRadius = "25px";
		document.getElementById("icon3").style.fontWeight = "bold";
		document.getElementById("icon3").style.fontSize = "15px";
		document.getElementById("icon3").innerHTML = "noodles";
	}
	function removeTitle3(){
		document.getElementById("icon3").innerHTML = "";
		document.getElementById("icon3").style.border = "0px solid black";
	}
	
	
	
	//for the fourth icon:
	document.getElementById("omelette").onmouseover = addTitle4;
	document.getElementById("omelette").onmouseout = removeTitle4;
	function addTitle4(){
		document.getElementById("icon4").style.position = "absolute";
		document.getElementById("icon4").style.marginLeft = "0px";
		document.getElementById("icon4").style.paddingLeft = "10px";
		document.getElementById("icon4").style.paddingRight = "10px";
		document.getElementById("icon4").style.backgroundColor = "yellow";
		document.getElementById("icon4").style.color = "black";
		document.getElementById("icon4").style.border = "3px solid black";
		document.getElementById("icon4").style.borderRadius = "25px";
		document.getElementById("icon4").style.fontWeight = "bold";
		document.getElementById("icon4").style.fontSize = "15px";
		document.getElementById("icon4").innerHTML = "omelette";
	}
	function removeTitle4(){
		document.getElementById("icon4").innerHTML = "";
		document.getElementById("icon4").style.border = "0px solid black";
	}
	
	
	
	//for the fifth icon:
	document.getElementById("soup").onmouseover = addTitle5;
	document.getElementById("soup").onmouseout = removeTitle5;
	function addTitle5(){
		document.getElementById("icon5").style.position = "absolute";
		document.getElementById("icon5").style.marginLeft = "10px";
		document.getElementById("icon5").style.paddingLeft = "10px";
		document.getElementById("icon5").style.paddingRight = "10px";
		document.getElementById("icon5").style.backgroundColor = "yellow";
		document.getElementById("icon5").style.color = "black";
		document.getElementById("icon5").style.border = "3px solid black";
		document.getElementById("icon5").style.borderRadius = "25px";
		document.getElementById("icon5").style.fontWeight = "bold";
		document.getElementById("icon5").style.fontSize = "15px";
		document.getElementById("icon5").innerHTML = "soup";
	}
	function removeTitle5(){
		document.getElementById("icon5").innerHTML = "";
		document.getElementById("icon5").style.border = "0px solid black";
	}
	
	
	
	//for the sixth icon:
	document.getElementById("icecream").onmouseover = addTitle6;
	document.getElementById("icecream").onmouseout = removeTitle6;
	function addTitle6(){
		document.getElementById("icon6").style.position = "absolute";
		document.getElementById("icon6").style.marginLeft = "0px";
		document.getElementById("icon6").style.paddingLeft = "10px";
		document.getElementById("icon6").style.paddingRight = "10px";
		document.getElementById("icon6").style.backgroundColor = "yellow";
		document.getElementById("icon6").style.color = "black";
		document.getElementById("icon6").style.border = "3px solid black";
		document.getElementById("icon6").style.borderRadius = "25px";
		document.getElementById("icon6").style.fontWeight = "bold";
		document.getElementById("icon6").style.fontSize = "15px";
		document.getElementById("icon6").innerHTML = "icecream";
	}
	function removeTitle6(){
		document.getElementById("icon6").innerHTML = "";
		document.getElementById("icon6").style.border = "0px solid black";
	}
	
};

// "_blank" means that the page will open in new tab:

function burgerWiki(){
	window.open("https://en.wikipedia.org/wiki/Hamburger","_blank");
}

function pizzaWiki(){
	window.open("https://en.wikipedia.org/wiki/Pizza","_blank");
}

function noodlesWiki(){
	window.open("https://en.wikipedia.org/wiki/Noodle","_blank");
}

function omeletteWiki(){
	window.open("https://en.wikipedia.org/wiki/Omelette","_blank");
}

function soupWiki(){
	window.open("https://en.wikipedia.org/wiki/Soup","_blank");
}

function icecreamWiki(){
	window.open("https://en.wikipedia.org/wiki/Ice_cream","_blank");
}

















