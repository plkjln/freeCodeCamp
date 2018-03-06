
function findElement(arr, func) {
  
    var filtered = arr.filter(func);
    var num = filtered[0];
    
    return num;
  }
  
  findElement([1, 3, 5, 9], function(num){ return num % 2 === 0; });
//OUTPUT: 8  