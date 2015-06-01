//////////////////////////////////////////////////
//////////////////////////////////////////////////
//     ___  ___________  _______________  ___   //
//    / _ \/ __/ __/ _ |/ ___/_  __/ __ \/ _ \  //
//   / , _/ _// _// __ / /__  / / / /_/ / , _/  //
//  /_/|_/___/_/ /_/ |_\___/ /_/  \____/_/|_|   //
//                                              //
// The below assignment has 10 questions with 1 //
// bonus question. Each question has a specific //
// area for you to put your answer. That is the //
// only part that should be changed. Do not     //
// edit the code in the question. Your answers  //
// should be valid javascript and any comments  //
// should be commented out. When finished this  //
// entire document should be valid javascript.  //
//                                              //
//////////////////////////////////////////////////
//////////////////////////////////////////////////

// 1. --------------------------------------------

// This is a named function, convert it
// to a variable containing an anonymous
// function

function doSomethingCool() {
  console.log("Something Cool!");
}

// Put your answer below

var doSomethingCool = function(){
console.log("Something Cool!");
}


// -----------------------------------------------

//////////////////////////////////////////////////
//////////////////////////////////////////////////

// 2. --------------------------------------------

// Here we are using setTimeout to call a function
// after 2 seconds. Refactor to use an anonymous
// function

function sayHi() {
  alert("Hello, World!");
}

setTimeout(sayHi, 2000);

// Put your answer below -------------------------

setTimeout(function(){
      alert("Hello, World!")
}, 2000);
// -----------------------------------------------

//////////////////////////////////////////////////
//////////////////////////////////////////////////

// 3. --------------------------------------------

// The code below will log the letter twice. What
// is the order that will be logged?

// [a]: x then y then z
// [b]: y then z
// [c]: z then y
// [d]: x then z

// Please explain your answer.

var letter = "x";

setTimeout(function(){
  letter = "y";
  console.log("The letter is", letter);
}, 1);

letter = "z";
console.log("The letter is", letter);

// Put your answer below -------------------------
// The order that will be logged in the console is
// [c] z and then y. The reason is this because although
//letter is first stored as X, it is not logged into the console.
// next it seems like it is going to log y first, but there is a setTimeout
// that delays this. It them executes the console.log that logs z then
// logs y when the time is up.


// -----------------------------------------------

//////////////////////////////////////////////////
//////////////////////////////////////////////////

// 4. --------------------------------------------

// The function below reverses a string. The body
// of the function is 5 lines of code. Refactor
// this function to do the same thing with 1 line

var reverseStr = function(str) {
  var arr;
  arr = str.split("");
  arr = arr.reverse();
  str = arr.join("");
  return str;
};

// Put your answer below -------------------------

var reverseStr = function(str){
  return ((str.split("")).reverse()).join("");
}

// -----------------------------------------------

//////////////////////////////////////////////////
//////////////////////////////////////////////////

// 5. --------------------------------------------

// The function below takes the spanish word for
// the colors red, white, blue, green, and black
// and returns the hex code for that color.
// Refactor this function to use an object
// instead of an if/else statement.

var spanishColor = function(colorName) {
  if (colorName.toLowerCase() === "rojo") {
    return "#ff0000";
  }
  else if (colorName.toLowerCase() === "blanco") {
    return "#ffffff";
  }
  else if (colorName.toLowerCase() === "azul") {
    return "#0000ff";
  }
  else if (colorName.toLowerCase() === "verde") {
    return "#00ff00";
  }
  else if (colorName.toLowerCase() === "negro") {
    return "#000000";
  }
};

// Put your answer below -------------------------

var spanishColor = function(colorName){
  var colors = {
    rojo:"#ff0000",
    blanco:"#ffffff",
    azul:"#0000ff",
    verde:"#00ff00",
    negro:"#000000"};
    return colors[colorName];
}


// -----------------------------------------------

//////////////////////////////////////////////////
//////////////////////////////////////////////////

// 6. --------------------------------------------

// Below is a variable *declaration* and an
// *assignment* in a single line of code.
// Break it up so that the declaration and
// assignment are happening on 2 seperate lines.

var foo = "bar";

// Put your answer below -------------------------
var foo;
foo="bar";

// -----------------------------------------------

//////////////////////////////////////////////////
//////////////////////////////////////////////////

// 7. --------------------------------------------

// The function `callTenTimes` takes an argument
// that is another function and will call that
// function 10 times. Refactor this into another
// function called `callNtimes` that allows you
// to specify a number of times to call the given
// function.

var callTenTimes = function(callback) {
  for(var i = 0; i < 10; i++) {
    console.log(callback);
  }
};

// Put your answer below -------------------------

var callNTimes = function (callback, n) {
  for(var i=0; i < n; i++){
    console.log(callback);
  }
};


// -----------------------------------------------

//////////////////////////////////////////////////
//////////////////////////////////////////////////

// 8. --------------------------------------------

// Below is the beginning code for an awesome game
// but already suffers a vulnerability that allows
// the savvy user to open the console and adjust
// the score to whatever they want. Refactor the
// code to protect from this.

// HINT: "global scope"

var score = 0;

var increaseScore = function() {
  score++;
};

var decreaseScore = function() {
  score--;
};

// Put your answer below -------------------------

var score = 0;

var increaseScore = function(){
  var score;
  score++;
}

var decreaseScore = function(){
  var score;
  score--;
};



// -----------------------------------------------

//////////////////////////////////////////////////
//////////////////////////////////////////////////

// 9. --------------------------------------------

// The below function does not work. The variable
// twoPlusTwo gets set to `undefined`. Refactor
// the function to make it work.

var addNumbers = function(numberA, numberB) {
  console.log(numberA + numberB);
};

var twoPlusTwo = addNumbers(2,2);

// Put your answer below -------------------------
var addNumbers = function(numberA, numberB) {
  var sum = numberA + numberB;
  console.log(sum);
  return sum;
};

var twoPlusTwo = addNumbers(2,2);

// -----------------------------------------------

//////////////////////////////////////////////////
//////////////////////////////////////////////////

// 10. -------------------------------------------

// Below is a snippet of code taken from a racing
// game (not really!) It allows you to accelerate
// the speed by a given amount. The problem is if
// you call the function without specifying an
// amount, it inadvertently sets the speed to NaN
// First write a comment that explains why it was
// setting speed to NaN when no parameter is given
// Then refactor the function to have a default
// amount of 1 if no param is given.

var speed = 0;

var accelerate = function(amount) {
  speed += amount;
};

// Put your answer below -------------------------

//the function calls to perform the following operation
// speed = speed + amount. with speed being globally
//defined as 0 above, the expression turns into
// 0 = 0 + amount. If amount is not defined then the
// expression turns into 0 = 0 + undefined which is NaN

var speed = 0;
var accelerate = function (amount){
  if( typeof amount === 'undefined'){
    amount = 1;
    speed +=amount;
  }
  else{
    speed += amount;
  }
}

// -----------------------------------------------

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//            ___  ____  _  ____  ______        //
//           / _ )/ __ \/ |/ / / / / __/        //
//          / _  / /_/ /    / /_/ /\ \          //
//         /____/\____/_/|_/\____/___/          //
//                                              //
//////////////////////////////////////////////////
//////////////////////////////////////////////////

// The function below allows you to call another
// function at a later time. It takes 2 params, an
// amount of miliseconds and a function. It will
// call the function that many miliseconds later.
// Refactor it so that is has a default timeout.

// This is more advanced than the default param on
// the accelerate function. This is because there
// is another parameter to consider.

// When setting the timeout, the function needs to
// work like this:

//     callLater(1000, function(){
//       ...
//     });

// When using the default timeout, the function
// needs to work like this:

//     callLater(function(){
//       ...
//     });

var callLater = function(timeout, callback) {
  setTimeout(callback, timeout);
};

// Put your answer below -------------------------

var callLater = function(timeout, callback){
   if( typeof timeout !== "number"){
        callback = timeout;
        console.log(callback);
        setTimeout(callback, 1000);
    }
    else{
      setTimeout(callback, timeout);
      console.log('You set the timeout');
    }
}

// -----------------------------------------------




//////////////////////////////////////////////////

// ---------------------
// Define a function max() that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in Javascript.
// ---------------------

function max(x, y){
    "use strict";
    var x;
    var y;
    if( x > y){
      return x;
      console.log(x);
    }
    else{
      return y;
      console.log(y);
    }
}

// ---------------------
// Define a function maxOfThree() that takes three numbers as arguments and returns the largest of them.
// ---------------------

function maxOfThree(x, y, z){
    "use strict";
    var x;
    var y;
    var z;
    if(x > y && x > z){
      return x;
      console.log('first number was highest');
    }
    else if(x >= y && z >= x){
      return z;
      console.log('last number was highest');
    }
    else if(y >= x && y >= z){
      return y;
      console.log('middle number was higher');
    }
    else if(y >= x && z >= y){
      return z;
      console.log('last number was highest');
    }
    else{
      console.log('error');
    }
}

// ---------------------
// Write a function that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.
// ---------------------

function isVowel(char){
    "use strict";
    var char;
    if(char === 'a' || char === 'e' || char === 'i' || char ==='o' || char === 'u' ||char === 'A' || char === 'E' || char === 'I' || char ==='O' || char === 'U'){
      return 'true';
    }
    else{
      return 'false';
    }
}

// ---------------------
// Write a function translate() that will translate a text into "rövarspråket". That is, double every consonant and place an occurrence of "o" in between. For example, translate("this is fun") should return the string "tothohisos isos fofunon".
// ---------------------

function rovarspraket(phrase){
    "use strict";
    // b, c, d, f, g, h, j, k, l, m, n, p, q, r, s, t, v, w, x, z
    var consonant = {b:1, c:1, d:1, f:1, g:1, h:1, j:1, k:1, l:1, m:1, n:1, p:1, q:1, r:1, s:1, t:1, v:1, w:1, x:1, y:1, z:1};
    var array = phrase.split(" ");
    var x = array.length;
    for (var i=0; i < x; i++){
      var warray = array[i].split("");
      var z = warray.length;
      for(var y=0; y < z; y++){
        var letter= warray[y];
        var test= consonant[letter];
        if(test === 1){
          warray[y]= letter + 'o' + letter;
        }
      }
      array[i]= warray.join("");
    }
    phrase = array.join(" ");
    return phrase;
}

// ---------------------
// Define a function sum() and a function multiply() that sums and multiplies (respectively) all the numbers in an array of numbers. For example, sum([1,2,3,4]) should return 10, and multiply([1,2,3,4]) should return 24.
// ---------------------

function sum(x, i, y, z){
    "use strict";
    var sumN= [x, i, y, z];
    var sumTotal= 0;
    for(i=0; i < sumN.length; i++){
      sumTotal += sumN[i];
    }
    return sumTotal;
}

function multiply(x, i, y, z){
    "use strict";
    var mulN= [x, i, y, z];
    var mulTotal= 1;
    for(i=0; i < mulN.length; i++){
      mulTotal *= mulN[i];
    }
    return mulTotal;
}

// ---------------------
// Define a function reverse() that computes the reversal of a string. For example, reverse("jag testar") should return the string "ratset gaj".
// ---------------------

function reverse(str){
    "use strict";
    return str.split("").reverse().join("");
}

// ---------------------
// Write a function findLongestWord() that takes an array of words and returns the length of the longest one.
// ---------------------

function findLongestWord(words){
    "use strict";
    var array= words.split(" ");
    var x = array.length;
    var long = 0;
    for( var i=0; i < x; i++){
      var comp = array[i].length;
      if( comp > long){
        long = comp;
      }
    }
    console.log(long);
    return long;
}

// ---------------------
// Write a function filterLongWords() that takes an array of words and an integer i and returns the array of words that are longer than i.
// ---------------------

function filterLongWords(words, i){
    "use strict";
    var array1= words.split(" ");
    var x = array1.length;
    var array2 = [];
    var length = 0;
    var t= 0;
    for(var y=0; y < x; y++){
      length = array1[y].length;
      if(length > i){
        array2[t]= array1[y];
        t +=1;
      }
    }
    console.log(array2);
}

// ---------------------
// Write a function charFreq() that takes a string and builds a frequency listing of the characters contained in it. Represent the frequency listing as a Javascript object. Try it with something like charFreq("abbabcbdbabdbdbabababcbcbab").
// ---------------------

function charFreq(string){
    "use strict";
    var array = string.split("");
    var obj = {};
    var x = array.length;
    var z;
    for( var i = 0; i < x; i++){
      z = array[i];
      if(obj[z] !== undefined){
        obj[z] += 1;
      }
      else{
        obj[z] = 1;
      }
    }
   return obj;
  }
