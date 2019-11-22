
var Stack = function() {

  var someInstance= Object.create(stackMethods);
   someInstance.storage = {};
   someInstance.key = 0;
   

   return someInstance;
}

var stackMethods = {};

stackMethods.push = function(value){
  this.storage[this.key++] = value;
};
  
stackMethods.pop = function(value){
   if(this.key === 0){
        return;
      }
     this.key--;
     var val = this.storage[this.key];
     delete this.storage[this.key];
    
       console.log(val)
     return val;

};
stackMethods.size = function(value){
 return  this.key;  
 
};
