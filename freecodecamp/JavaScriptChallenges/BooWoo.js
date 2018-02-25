
function booWho(bool) {
    // What is the new fad diet for ghost developers? The Boolean.
    if (bool === true || bool === false){
      return true;
    } else {
      return false;
    }
  }
  
  booWho(null);
  //OUTPUT : false
  booWho([1, 2, 3]) 
  //OUTPUT: false

  //METHOD 2
  function booWho(bool) {
    return typeof bool === 'boolean';
  }