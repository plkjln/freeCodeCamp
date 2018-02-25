function fearNotLetter(str) {
  
    for(var i=0; i<str.length; i++){
      var code = str.charCodeAt(i);
      
      if (code !== str.charCodeAt(0) + i) {
  
        return String.fromCharCode(code - 1);
      }  
      
    }
    
    return undefined;
  }
  
fearNotLetter("abce");
//OUTPUT: d

//METHOD 2  
function fearNotLetter(str) {
    var compare = str.charCodeAt(0), missing;
  
    str.split('').map(function(letter,index) {
      if (str.charCodeAt(index) == compare) {
        ++compare;
      } else {
        missing = String.fromCharCode(compare);
      }
    });
  
    return missing;
  }

