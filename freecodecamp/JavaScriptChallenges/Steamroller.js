
function steamrollArray(arr) {

    var flat = [];
    
    // I'm a steamroller, baby
    var flatten = function(arg) {
                if (!Array.isArray(arg)) {
                    flat.push(arg);
                } else {
                    for (var a in arg) {
                        flatten(arg[a]);
                    }
                }
     };
  
    // Calling the function for each element in the array
    arr.forEach(flatten);
    
    return flat;
  }
  
  steamrollArray([1, [2], [3, [[4]]]]);
//OUTPUT: [1,2,3,4]  