
function calculateBMI() {
  var weight = parseFloat(document.getElementById('weight').value);
  var height = parseFloat(document.getElementById('height').value);

  if (isNaN(weight) || isNaN(height) || weight <= 0 || height <= 0) {
    document.getElementById('result').innerHTML = "Please enter valid weight and height.";
    return;
  }

  var bmi = weight / (height * height);

  var resultElement = document.getElementById('result');
  resultElement.innerHTML = "Your BMI is: " + bmi.toFixed(2);

  if (bmi < 18.5) {
    resultElement.innerHTML += "<br>Underweight";
  } else if (bmi >= 18.5 && bmi < 24.9) {
    resultElement.innerHTML += "<br>Normal weight";
  } else if (bmi >= 25 && bmi < 29.9) {
    resultElement.innerHTML += "<br>Overweight";
  } else {
    resultElement.innerHTML += "<br>Obese";
  }
}