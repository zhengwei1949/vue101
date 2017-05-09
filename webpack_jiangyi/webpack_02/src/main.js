import "./style.css"
const calculator = require('./calculator');
window.onload = function(){
			var btn = document.getElementById("btn");
			var operator = document.getElementById("operator");
			var result = document.getElementById("result");
			btn.onclick = function(){
				var a = document.getElementById("a").value;
				var b = document.getElementById("b").value;
				switch(operator.value){
					case '0':
						result.value = calculator.add(a,b);
						break;
					case '1':
						result.value = calculator.substract(a,b);
						break;
					case '2':
						result.value = calculator.multiply(a,b);
						break;
					case '3':
						result.value = calculator.divide(a,b);
						break;
				}
			};
		};