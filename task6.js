/***
Ticket fare Calculator
    - Children (age < 10): free
    - Students get a 50% discount
    - Senior citizens (age >= 60) gets a 15% Discount
    - Otherwise Regular ticket fare 800 tk
*/
var age =67;
var student =false;
var price=800;
if (age<10){
console.log(" children Free")
}
else if (student==true){
    var discount=price*1/2
    price= price-discount;
    console.log(price)
}
else if (age>=60){
    var discount=price*15/100
    price= price-discount;
    console.log(price)
}
else{
    price=price;
    console.log(price)
}
