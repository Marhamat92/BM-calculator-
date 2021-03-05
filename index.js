function bmiCalculator (weight,height){
var bmi=weight/ (height * height); 
return bmi=Math.round(bmi); 
 
}

var bmi= bmiCalculator(78, 1.78);
console.log(bmi);