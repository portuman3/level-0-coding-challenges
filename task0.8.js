function convertToHours(number){
    hours = Math.floor(number/60); //Math.floor rounds to the nearest whole number.
    minutes = number % 60;
    console.log(hours+ "hours"+":"+ minutes+ "minutes");
}
convertToHours(71)