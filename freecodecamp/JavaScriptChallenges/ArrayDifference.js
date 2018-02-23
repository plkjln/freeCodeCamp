
function diffArray(arr1, arr2) {
    var newArr = [];
   // destroy matches in both arrays
    for (var i=0; i<arr1.length; i++){
      for (var j=0; j<arr2.length; j++){
        if (arr2[j] === arr1[i]) {
          arr2.splice(j,1);
          arr1.splice(i,1);
          j--;
        }
      }
    }
    
    newArr = arr1.concat(arr2);
    return newArr;
  }
  
  diffArray(["andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]);
//OUTPUT: ["diorite", "pink wool"]  