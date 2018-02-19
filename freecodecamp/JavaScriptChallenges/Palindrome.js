
function palindrome(str) {
    // Good luck!
    var strVal = str.toLowerCase();
    strVal.replace(/[&\/\\#,+()$~%.!_'":*?<>{}]/g,'');
    console.log("strVal: ",strVal);
    var reverse = strVal.split('').reverse().join('');
    if (strVal == reverse){
      return true;
    } else {
       return false;
    }
  }
  

  palindrome("_eye");
  