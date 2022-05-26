let length1 = 3
let length2 = 4
let length3 = 5
const s = (length1 + length2 + length3)/2; //s is semi-perimeter
const areaOfTriangle = Math.sqrt(s * (s - length1) * (s - length2) * (s - length3)); //Area of a triangle by Herons formula.
console.log("Area of a triangle is", areaOfTriangle);
