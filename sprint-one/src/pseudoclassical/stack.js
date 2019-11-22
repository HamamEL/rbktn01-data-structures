var Stack = function() {
 
   this.storage = {};
   this.key = 0;
   
};

Stack.prototype.push = function(value){
  this.storage[this.key++] = value;
};
  
Stack.prototype.pop = function(value){
   if(this.key === 0){
        return;
      }
     this.key--;
     var val = this.storage[this.key];
     delete this.storage[this.key];
    
       console.log(val)
     return val;

};
Stack.prototype.size = function(value){
 return  this.key;  
 
};

var Stack2 = new Stack();