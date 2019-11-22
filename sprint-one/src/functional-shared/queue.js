var extend = function(to, from) {
  for (var key in from) {
    to[key] = from[key];
  }
};

var Queue = function() {
  
  var someInstance = {};
  someInstance.key = 0; 
  someInstance.storage = {};
  extend(someInstance,queueMethods);
 return someInstance;
}
var queueMethods = {};
  queueMethods.enqueue = function(value) {
    this.storage[this.key] = value;
    this.key++;
  };

  queueMethods.dequeue = function() {
    if(this.key === 0){
        return;
      }
       this.key--;
       var deleted = this.storage[0];
       var obj = {};
       for(var k in this.storage){
        if(k !== this.key){
        obj[k-1] = this.storage[k];
       }
     }
     
     this.storage = obj;
     return deleted;
  }

  queueMethods.size = function() {
    return this.key;
  };





/// 

