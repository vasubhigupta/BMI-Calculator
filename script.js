const btnEl = document.getElementById("btn");
const inputValueEl = document.getElementById("bmi-result");
const weightCondition = document.getElementById("weight-condition");


function calculateBMI(){
    const heightValue = document.getElementById("height").value / 100;
    const weightValue = document.getElementById("weight").value;

    if(heightValue == 0){
        inputValueEl.value = "Enter your height";
        return ;
    }
    if (weightValue == 0) {
        inputValueEl.value = "Enter your weight";
        return;
    }
    const bmiValue = weightValue / (heightValue * heightValue);
    inputValueEl.value = bmiValue;

    if (bmiValue < 18.5) {
      weightCondition.innerText = "Underweight";
    } else if (bmiValue >= 25 && bmiValue <= 29.9) {
      weightCondition.innerText = "Overweight";
    } else if (bmiValue >= 30) {
      weightCondition.innerText = "Obesity";
    }
    else weightCondition.innerText = "Normal Weight";
}

btnEl.addEventListener("click",calculateBMI);