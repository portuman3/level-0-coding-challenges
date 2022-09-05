function areaOfTriangle(length1, length2, length3){
    const semiPerimeter = (length1 + length2 + length3)/2; 
    let areaValue = Math.sqrt(semiPerimeter * (semiPerimeter - length1) * (semiPerimeter - length2) * (semiPerimeter - length3)); 
    return areaValue;
    }
    console.log(areaOfTriangle(3,4,5));  