var Queue = function() {
  var someInstance = {};
  var key = 0; 
  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below

  someInstance.enqueue = function(value) {
    storage[key] = value;
    key++;
  };

  someInstance.dequeue = function() {
    if(key === 0){
        return;
      }
       key--;
       var deleted = storage[0];
       var obj = {};
       for(var k in storage){
        if(k !== key){
        obj[k-1] = storage[k];
       }
     }
     
     storage = obj;
     return deleted;
  }

  someInstance.size = function() {
    return key;
  };

  return someInstance;
};
