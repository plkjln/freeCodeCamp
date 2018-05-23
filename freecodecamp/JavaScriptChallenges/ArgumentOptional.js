function addTogether() {
    var args = new Array(arguments.length);
    console.log("arguments: ",arguments); //actual passed arguments
    //Storing the arguments in an array
    for(var i = 0; i < args.length; ++i) {
        args[i] = arguments[i];
      }
   //Check for the arguments length
   if(args.length == 2){
      //If there are two arguments,check for the type of both arguments
      //Use typeof to check the type of the argument(both should be numbers)
      if(typeof args[0] !== 'number' || typeof args[1] !=='number' ){
        return undefined;
        }
      return args[0]+args[1];
     }
   //When only one argument is provided
   if(args.length == 1){
       a= args[0];
       //Check the  argument using typeof 
      if(typeof a!=='number'){
          return undefined;
        }
      else{
         //Making use of closures 
         return function(b){
         //Checking the second argument 
           if(typeof b !=='number'){
             return undefined;
             }
           else
             return a+b;
            };
        }
      }
  }
  
  // test here
  addTogether(2)(3);
  //OUTPUT: 5