
function uniteUnique(arr) {
  
    var newArr;
   //Convert the arguments object into an array
    var args = Array.prototype.slice.call(arguments);
    //Use reduce function to flatten the array
    newArr = args.reduce(function(arrA,arrB){
    //Apply filter to remove the duplicate elements in the array
      return arrA.concat(arrB.filter(function(i){
        return arrA.indexOf(i) === -1;
      }));
    });
  
     return newArr;  
  
    /*//Removing duplicate elements from array
    var uniqueEle = [];
    $.each(concatArr, function(i, el){
        if($.inArray(el, uniqueEle) === -1) uniqueEle.push(el);
    });*/
  }
  
  uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);
  //OUTPUT: [1, 3, 2, 5, 4]