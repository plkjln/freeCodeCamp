
function sumAll(arr) {
    var min = Math.min.apply(null, arr), //Get minimum from array
        max = Math.max.apply(null, arr); //Get max from array
    var arrList = [];
    
    for (var i = min; i <= max; i++) {
        arrList.push(i);//create a new array with the series from min & max
    }
    //Method 1
    var sum = arrList.reduce(function(a, b) {
        return a + b;//sum the elements in new array.
    });
    /*
    // Method 2
    var sum = arrList.reduce(
        function (
          accumulator,
          currentValue,
          currentIndex,
          array
        ) {
             return accumulator + currentValue;
          }
       );
    */

    return sum;
  }
  
  sumAll([1, 4]);
//OUTPUT: 10  