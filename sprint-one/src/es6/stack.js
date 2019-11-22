class Stack {
  
  constructor() {
  	this.storage = {}
  	this.key = 0;
  }
push(value){
  this.storage[this.key++] = value;
}
  
pop(value){
   if(this.key === 0){
        return;
      }
     this.key--;
     var val = this.storage[this.key];
     delete this.storage[this.key];
    
       console.log(val)
     return val;

}
size(value){
 return  this.key;  
 
}
}
var NewStack = new Stack();