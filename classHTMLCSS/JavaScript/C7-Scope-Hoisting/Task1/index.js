//  //Global scope
//  var a = 10;
//  var name = "Manish";

//  console.log("init Global >>", name);

//  //Local Scope
//  function hello() {
//    var name = "Rudra";
//    console.log("hello >>", name);
//  }
//  hello();

//  function logName() {
//    console.log("logName >>", name);
//  }
//  logName();

//  function helloWorld() {
//    // var name;
//    console.log("init helloWorld >>", name);
//    name = "Anish";
//    console.log("helloWorld >>", name);
//  }
//  helloWorld();

//  console.log("Modify Global >>", name);

// Lexical scope

var g = "Global";
console.log("global >>", g);

function outer() {
  var o = "outer";
  console.log("outer >>", g, o);
  function inner(data) {
    var i = "inner";
    console.log("inner >>", g, o, i, data);
  }
  inner("tddaad");
}

function anotherOuter () {
  var ao = "AnotherOuter";
  console.log("anotherOuter >>", g, ao);
}

anotherOuter();

outer();
