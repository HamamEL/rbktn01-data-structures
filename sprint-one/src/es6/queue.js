class Queue {
	constucter(){
	this.storage = {};
	this.key = 0;	
	}
	

 enqueue(value) {
    this.storage[this.key] = value;
    this.key++;
  }

  dequeue() {
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

 size() {
    return this.key;
  }
}

var Queue2 = new Queue();
