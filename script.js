function problem1() {
	var sum = 0;
	var number = document.getElementById("problem_1").value;
	var result = document.getElementById("answer_1");
	for (i = 0; i < number; i++) {
		if (i % 3 === 0 || i % 5 ===0) {
			sum += i;
		}
	}
result.textContent = sum.toString();
}

function problem2() {
	var a = 0; b = 1; c = 1; sum = 0;
	var number = document.getElementById("problem_2").value;
	var result = document.getElementById("answer_2");
	for (i = 2; i < number; i++) {
			c = a + b;
			a = b;
			b = c;
			if (c % 2 ===0) {
				sum += c;
			}

		}
	
result.textContent = sum.toString();
}

function problem3() {
	var i = 2;
	var number = parseInt(document.getElementById("problem_3").value);
	var result = document.getElementById("answer_3");

	switch(number) {
		case 0 :
			result.textContent = "0";
			break;
		case 1 :
			result.textContent = "1";
			break;
		default :
			while (i <= number) {
				if (number % i ===0) {
				number /= i;
									}
			else {
				i++;
				}
	}	
	var largestFactor=i;	
	result.textContent = largestFactor.toString();	
}

}	
	