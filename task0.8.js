function convertToHours(number){
    let hours = Math.floor(number/60); 
    let minutes = (number % 60);
    hours += hours === 1 ? " hour," : " hours,";
    minutes += minutes === 1 ? " minute" : " minutes"
    return hours + " " + minutes;
}
console.log(convertToHours(71));  