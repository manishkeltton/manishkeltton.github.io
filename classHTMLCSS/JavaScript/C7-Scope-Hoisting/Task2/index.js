// var a = 1;
// console.log(a);

/////////////////////////////////////////////////////////////

// If you are declaring variable at using "var" then that declaration of that function and that variable then move to the top of that particular scope.
// step - 1 -> variable declare with var.
// step - 2 -> Functions inside a particular scope.
// step - 3 -> Declaration of that move to the top.
// var b;
// console.log(b);
// b = 1;

// var a;
// var b;
// var c ;
// a = 1;
// b = 2
// console.log(a + " " + b + " " + c);
// c =3;

// var tmp = 10;
// function func() {
//   var tmp;
//   console.log("1. ", tmp);
//   if (true) {
//     var tmp = 12;
//   }
//   console.log("2.", tmp);
// }

// func();
// var myFunc;
// console.log(myFunc);
// console.log(myFunc("XYZ"));

// function myFunc(name) {
//     return name;
// }

// a = 1;
// console.log('1 >', a);
// let a;          // let and const are not host. 
// console.log('2 >', a);

if (true){
    console.log(b, a);
    /** @Temporal Dead Zone 
       Statement1
       Statement2
       statement3
    */
    let a = 10;
    var b = 20;
}
console.log(a);


// Temporal Dead Zone



// function discountPrices (prices, discount) {
//     let discounted = []
  
//     for ( let i = 0; i < prices.length; i++) { // 5
//       let discountedPrice = prices[i] * (1 - discount) // 10
//       let finalPrice = Math.round(discountedPrice * 100) / 100 //20
//       discounted.push(finalPrice)
//     }

  
//     console.log(i)
//     console.log(discountedPrice)
//     console.log(finalPrice)
  
//     return discounted
//   }
  
//   discountPrices([100, 200, 300], .5)
//   console.log(discounted);



// function abc () {
//     console.log(a);
//     a = 1;
// }