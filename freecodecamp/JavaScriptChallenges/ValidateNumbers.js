/*Return true if the passed string is a valid US phone number.
FORMATS:     555-555-5555
    (555)555-5555
    (555) 555-5555
    555 555 5555
    5555555555
    1 555 555 5555
*/

function telephoneCheck(str) {
    // Good luck!
    var re = /(?:\d{3}|\(\d{3}\))([-\/\.])\d{3}\1\d{4}/; //Format: ###-###-#### or # ###-###-####
    var re1 = /^(1\s?)?(\(\d{3}\)|\d{3})[\s\-]?\d{3}[\s\-]?\d{4}$/; //all format
    var OK = re1.exec(str);  
    console.log("OK is: ",re1.exec(str));
          if (!OK)  
            return false;  
          else
             return true;
  }
  
  
  telephoneCheck("555-555-5555");
  //OUTPUT: true
  /*
 telephoneCheck("2 757 622-7382");
 //OUTPUT: false
  */