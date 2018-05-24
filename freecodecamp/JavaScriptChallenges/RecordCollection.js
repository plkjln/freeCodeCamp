/* 
If prop isn't "tracks" and value isn't empty (""), update or set the value for that record album's property.
Your function must always return the entire collection object.

There are several rules for handling incomplete data:
If prop is "tracks" but the album doesn't have a "tracks" property, create an empty array before adding the new value to the album's corresponding property.
If prop is "tracks" and value isn't empty (""), push the value onto the end of the album's existing tracks array.
If value is empty (""), delete the given prop property from the album.

*/
// Setup
var collection = {
    "2548": {
      "album": "Slippery When Wet",
      "artist": "Bon Jovi",
      "tracks": [ 
        "Let It Rock", 
        "You Give Love a Bad Name" 
      ]
    },
    "2468": {
      "album": "1999",
      "artist": "Prince",
      "tracks": [ 
        "1999", 
        "Little Red Corvette" 
      ]
    },
    "1245": {
      "artist": "Robert Palmer",
      "tracks": [ ]
    },
    "5439": {
      "album": "ABBA Gold"
    }
};
// Keep a copy of the collection for tests
var collectionCopy = JSON.parse(JSON.stringify(collection));
//console.log("CollectionCopy: ",collectionCopy);
// Only change code below this line
function updateRecords(id, prop, value) {
  
  if (collection[id]){
    //console.log("you have the id in collection");
    
    if (prop == "tracks"){
      if (!collection[id][prop]) {
        collection[id].tracks = [];//create an empty array before adding the new value
        
        if (value){
           console.log("Added new value in collection");
           collection[id].tracks.push(value);
        }  
      } else {
        // Id with Prop already exists in Collection
        if(value) {
          collection[id].tracks.push(value);
        } else {
          delete collection[id].tracks;
        }
        
      }
      
    // For all other Prop other than Tracks   
    } else {
      //console.log("Property is NOT Tracks");
      // Add value with new property
      if (value){
        //console.log("NEW Value is given", collection[id][prop] , value);
        collection[id][prop] = value;
      }
      else {  
        //Value is empty; delete the given prop property from the album.
          delete collection[id][prop];
      }
    }

  }
  console.log("collection: ", collection);
  //collection = collectionCopy;
  
  return collection;
}

// Alter values below to test your code
updateRecords(2548, "tracks", "");
//OUTPUT : tracks should not be set 

/*
updateRecords(5439, "tracks", "Take a Chance on Me");
//OUTPUT:  tracks should have "Take a Chance on Me" as the last element. 
*/

