
function pairElement(str) {
    var dnaRes = [];
    var dnaPair = {
      "A": "T",
      "T": "A",
      "C": "G",
      "G": "C"
    };
    for(var i=0;i< str.length; i++){
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


  //METHOD 2
function pairElement(str) {
  //define a map object with all pair possibilities 
    var map = {T:'A', A:'T', G:'C', C:'G'};
    //split str into a char Array
    strArr = str.split('');
    //replace each Array item with a 2d Array using map
    for (var i=0;i<strArr.length;i++){
        strArr[i]=[strArr[i], map[strArr[i]]];
    }
    return strArr;
}