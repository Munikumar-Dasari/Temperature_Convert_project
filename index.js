const temperatureEl = document.getElementById("temp");
const fromEl = document.getElementById("from");
const toEl = document.getElementById("to");
let resultEl = document.getElementById("result");

function convert() {
  const tempValue = temperatureEl.value;
  const fromValue = fromEl.value;
  const toValue = toEl.value;
  let result;
  if (fromValue === "celsius" && toValue === "fahrenheit") {
    result = String((tempValue * 9) / 5 + 32) + "F";
  } else if (fromValue === "celsius" && toValue === "kelvin") {
    result = String(parseFloat(tempValue) + 273.15) + "K";
  } else if (fromValue === "fahrenheit" && toValue === "celsius") {
    result = String(((parseFloat(tempValue) - 32) * 5) / 9) + "C";
  } else if (fromValue === "fahrenheit" && toValue === "kelvin") {
    result = String(parseFloat(tempValue) - 32) + "K";
  }
  resultEl.textContent = result;
}
