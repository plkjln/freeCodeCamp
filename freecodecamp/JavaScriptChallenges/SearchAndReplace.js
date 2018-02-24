
function myReplace(str, before, after) {
    var afterNew = after;
    
    if (before.charAt(0) == before.charAt(0).toUpperCase()) {
      after = after.replace(after[0],after[0].toUpperCase());
    }
    if (before.charAt(0) == before.charAt(0).toLowerCase()){
       after = after.replace(after[0],after[0].toLowerCase());
    }
    
    var newstr = str.replace(before, after);
    console.log(newstr); 
    
    return newstr;
  }
  
  myReplace("He is Sleeping on the couch", "Sleeping", "sitting");
//  OUTPUT: "He is Sitting on the couch".