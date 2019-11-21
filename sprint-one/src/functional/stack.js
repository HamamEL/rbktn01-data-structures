var Stack = function() {
  var someInstance = {};
  var key = 0;
  // Use an object with numeric keys to store values
  var storage  = {};

  // Implement the methods below
  someInstance.push = function(value) {
    
    storage[key++] = value;
    // console.log()
}
   someInstance.pop = function() {
      if(key === 0){
        return;
      }
     //   --key;
     //   var deleted = storage[key] 
     //   var obj = {};
     //   for(var k in storage){
     //    if(k !== key){
     //    obj[k] = storage[k];
     //   }
     // }
     // obj = storage;
     // return deleted;
     key--
     var val = storage[key];
     delete storage[key];
    
       console.log(val)
     return val;

  }

  someInstance.size = function() {
    
     return  key;   
    }

    return someInstance;
};
