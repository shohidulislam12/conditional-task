/***
Grade Calculator
Create a simple JavaScript program that takes a student's score as input and returns their corresponding grade based on the following grading scale:
    A: 90-100
    B: 80-89
    C: 70-79
    D: 60-69
    F: 0-59

***/
var number =900;
if (number>=0&&number<=100){


if(number<100&&number>=90){
    console.log('you got "A"')
}
 else if(number>=80){
    console.log('you got "B"')
}
 else if(number>=70){
    console.log('you got "C"')
}
 else if(number>=60){
    console.log('you got "D"')
}
 else if(number>=0){
    console.log('you got "F"')
}
}
 else {
    console.log('your mark is unvalid')
}