var Person = function(firstAndLast) {
    var fullName = firstAndLast;
  
    //Fetching First Name
    this.getFirstName = function() {
      return fullName.split(" ")[0];
    };
    //Fetching Last Name
    this.getLastName = function() {
      return fullName.split(" ")[1];
    };
    // Complete the method below and implement the others similarly
    this.getFullName = function() {
      return fullName;
    };
  
    //Setting First Name
    this.setFirstName = function(name) {
      fullName = name + " " + fullName.split(" ")[1];
    };
    //Setting Last Name
    this.setLastName = function(name) {
      fullName = fullName.split(" ")[0] + " " + name;
    };
    //Setting Full Name
    this.setFullName = function(name) {
      fullName = name;
    };
  
    return firstAndLast;
  };
  
  var bob = new Person('Bob Ross');
  bob.getFullName();

  /*
  bob.getFullName() should return "Haskell Ross" after bob.setFirstName("Haskell")
  */