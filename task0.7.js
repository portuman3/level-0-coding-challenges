function convertToFahrenheit(celcius){
    fahrenheit = celcius * 9/5 + 32;
    return fahrenheit;
}
console.log ("Fahrenheit: " + convertToFahrenheit(20));
function convertToCelcius(fahrenheit){
    celcius = (fahrenheit - 32) * (5/9);
    return celcius;
}
console.log("Celcius: " + convertToCelcius(68));  