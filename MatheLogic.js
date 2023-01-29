var num1;
var num2;
var zeichen;
var ergebnis;

function rechenzeichen() {
	document.getElementById("loesung").value = "";
	document.querySelector('#checkB').disabled = false;
	var signs = ["+", "-", "x", ":"];
	var rechenZ = signs[getRandomInt(4)];
	zeichen = rechenZ;
	if (rechenZ == "+") {
		add();
	} else if (rechenZ == "-") {
		sub()
	} else if (rechenZ == "x") {
		mul()
	} else if (rechenZ == ":") {
		div()
	}
	write();
}

function add() {
	num1 = getRandomInt(101);
	num2 = getRandomInt(100 - num1);
	ergebnis = num1 + num2;
}

function sub() {
	num1 = getRandomInt(101);
	num2 = getRandomInt(num1);
	ergebnis = num1 - num2;
}

function mul() {
	num1 = getRandomInt(10);
	num2 = getRandomInt(10);
	ergebnis = num1 * num2;
}

function div() {
	num1 = getRandomInt(101);
	var teiler = new Array();
	for (let i = 1; i < num1; i++) {
		if (num1 % i == 0) {
			teiler.push(i);
		}
	}
	num2 = teiler[getRandomInt(teiler.length)];

	ergebnis = num1 / num2;
}
function write() {
	var paragraph = document.getElementById("aufgabe");
	paragraph.innerText="" + num1 + " " + zeichen + " " + num2 + " = ";
}


function checkSolution() {
	document.querySelector('#checkB').disabled = true;
	if (ergebnis == document.getElementById("loesung").value) {
		var meldung = document.getElementById("meldung");
		meldung.innerText="Das war richtig!";
		
		setTimeout(() => {  
		meldung.innerText="";
		rechenzeichen();
		 }, 3000);
		
	}else{
		var meldung = document.getElementById("meldung");
		meldung.innerText="Das war falsch";
		document.querySelector('#checkB').disabled = false;
	}

}


document.addEventListener('DOMContentLoaded', function() {
	const element = document.getElementById("checkB");
	element.addEventListener("click", checkSolution);
	rechenzeichen();
}, false);

function getRandomInt(max) {
	return Math.floor(Math.random() * max);
}