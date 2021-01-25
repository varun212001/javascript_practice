console.log("Hello world!");
var i, j, re = '';
var n = 6;
for (i = 1; i < n; i++) {

    console.log('*'.repeat(i));

}
//console input
var num = prompt("enter number");
// console.log(num);

// var array = [];
// for (var i = 1; i <= 5; i++) {
//     array.push(i);
// }
// console.log(array.join(','));

// var one = "1"
// var two = "2"
// var three = "3"

// var combinedString = one + ", " + two + ", " + three

// console.log(combinedString) // "1, 2, 3"
// console.log(one + ", " + two + ", " + three) // "1, 2, 3"

// var array = ["1", "2", "3"];
// var string = "";
// array.forEach(function(element) {
//     string += element;
// });
// console.log(string);

//pattern start
var i, j, re = "";
for (i = 1; i < 5; i++) {
    for (j = 1; j < i; j++) {

        console.log(re = re + num);
    }

}
//factorial
function factorial(x) {

    // if number is 0
    if (x == 0) {
        return 1;
    }

    // if number is positive
    else {
        return x * factorial(x - 1);
    }
}


console.log("factorIAL", factorial(num));