
function spinalCase(str) {
    // "It's such a fine line between stupid, and clever."
    // --David St. Hubbins
    var re = /\s|_|(?=[A-Z])/; //Space check,"_" check and Camel case letter check 
    
    var arr = str.split(re).join("-").toLowerCase();
         
    return arr;
  }
  
  spinalCase('This Is Spinal Tap');
  //OUTPUT: "this-is-spinal-tap"