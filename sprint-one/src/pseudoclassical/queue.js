var Queue = function() {
	this.storage = {};
	this.key = 0;
};


  Queue.prototype.enqueue = function(value) {
    this.storage[this.key] = value;
    this.key++;
  };

   Queue.prototype.dequeue = function() {
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

 Queue.prototype.size = function() {
    return this.key;
  };
var NewQueue = new Queue();