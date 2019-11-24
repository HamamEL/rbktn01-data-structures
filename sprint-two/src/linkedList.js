var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
  
   if(list.head === null){
    list.head = Node(value);
    list.tail = Node(value);
   }else{ 
   list.tail.next = Node(value);
   list.tail = Node(value) 
}

  
  };

  list.removeHead = function() {
     var remove = list.head.value;
     this.head = this.head.next;
      
     return remove
  }; 

  list.contains = function(target) {
    if(target == this.head.value) return true
      else if (this.head.next == null) return false
      return contains(this.head.next)}
  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
