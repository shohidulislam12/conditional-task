/***

Free Drinks
    - Order more than 500tk: free Coke
    - Else Coke: 30tk
*/

var orderPrice=400;
var cokePrice=30;
if(orderPrice>=500){
  console.log('congrats! you will get free drink');
}
else {
    console.log('you will pay 30tk  get free drink');
    orderPrice=orderPrice+cokePrice;
}
console.log('now you pay ' + '' + orderPrice);