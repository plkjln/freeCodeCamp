
function whatIsInAName(collection, source) {
    // What's in a name?
    var arr = [];
    // Only change code below this line
    var srcKeys = Object.keys(source);
    
    var check=false;
    
    collection.forEach(function(elePair,i){
      srcKeys.forEach(function(key,j){
          
          if(collection[i].hasOwnProperty(key)){
             if(collection[i][key] === source[key]){
               check = true;
             }else {
               check = false;
             }
          }else {
             check = false;
          }
        });
      
        if(check === true){
          arr.push(collection[i]);
        }
      });  
    
    console.log("arr: ",arr);
    // Only change code above this line
    return arr;
  }
  
  whatIsInAName([{ "a": 1, "b": 2 }, { "a": 1 }, { "a": 1, "b": 2, "c": 2 }], { "a": 1, "c": 2 });
  //OUTPUT:  [{ "a": 1, "b": 2, "c": 2 }]