var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
   if(list.head === null){
    list.head = Node(value);
    list.tail = list.head;
   } 
  var result = list.tail;
    result.next = Node(value);
    list.tail = result.next;
    console.log(result)
  };

  list.removeHead = function() {
  };

  list.contains = function(target) {
  };

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
