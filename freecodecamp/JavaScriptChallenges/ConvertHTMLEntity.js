function convertHTML(str) {

    var convertChar = {
      "&":"&amp;",
      "<":"&lt;",
      ">":"&gt;",
      "\"": "&quot;",
      "\'":"&apos;"
    };
    
    for(var i=0; i< str.length; i++){
      if(convertChar.hasOwnProperty(str[i])){
        str = str.replace(str[i],convertChar[str[i]]);
      }
    }  
    return str;
  }
  
  convertHTML('Stuff in "quotation marks"');
  //OUTPUT: Stuff in &quot;quotation marks&quot;