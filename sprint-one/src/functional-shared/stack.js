var Stack = function() {

  var someInstance.= {};
   someInstance.key = 0;
  // Use an object with numeric keys to store values
  var storage  = {};
  extend(someInstance,storage,stackMethods);
  return someInstance;
}
  // Implement the methods below
var extend = function(to, from) {
  for (var key in from) {
    to[key] = from[key];
  }
};



 storage.stackMethods.push = function(value){
  storage[key++] = value;
};
  
storage.stackMethods.pop = function(value){
   if(key === 0){
        return;
      }
     key--
     var val = storage[key];
     delete storage[key];
    
       console.log(val)
     return val;

};
storage.stackMethods.size = function(value){
 return  key;  

};


