const prompt = require("prompt-sync")();
while (true){

let number = Number(prompt("Enter a number: "));


if(Number.isNaN(number)){
	console.log("enter a valid number: ");	
	continue;
		
}
else {
	
	for(let index = 1; index <= 12; index++){
	

		let multiplication = number * index;
		console.log(number + " X " + index + " = " + multiplication);
	}
}	
break;

}




