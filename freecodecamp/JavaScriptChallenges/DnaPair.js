
function pairElement(str) {
  
    var dnaRes = [];
    var dnaPair = {
      "A": "T",
      "T": "A",
      "C": "G",
      "G": "C"
    };
   
    for(var i=0;i< str.length; i++){
      //dna.push(str[i]);
      var dna = [];
      if(dnaPair.hasOwnProperty(str[i])){
        dna.push(str[i]);
        dna.push(dnaPair[str[i]]);
      }
      dnaRes.push(dna);
      
    }
    
    return dnaRes;
  }
  
  pairElement("GCG");
  //OUTPUT: [["G", "C"], ["C","G"],["G", "C"]]