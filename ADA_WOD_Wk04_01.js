function reverseText(x) {
  //Get input
	var x = document.getElementById("userInput1").value;
  //Split input into array with no separator
	var y = x.split("");
  //Reverse generated array
	var z = y.reverse();
  //Rejoin reversed array into string with no separator
	var result = z.join("");
	document.getElementById("answer1").innerHTML='"' + x + '"' + " in reverse is " + '"' + result + '"';
}
	