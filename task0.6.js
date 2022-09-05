function maximum (num1, num2, num3, ...extraNumbers){
    
    let maximumNumber = "";
    if (num1 > num2 && num1 > num3){
        maximumNumber = num1;
    } else if (num2 > num1 && num2 > num3){
        maximumNumber = num2;
    }
    else {
        maximumNumber = num3;
    }
    for (let i = 0; i < extraNumbers.length; i++){
        if (maximumNumber < extraNumbers[i]){
            maximumNumber = extraNumbers[i];

        }
        
    }
    return maximumNumber;

}

console.log(maximum (1, 22, 2, 3));  
