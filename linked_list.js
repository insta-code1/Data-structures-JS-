/* ============================================================== 
     
                          Linked List

     Linked List have a constant runtime known as

     Constant Time - O (1):
      -Adding/removing head
      -Adding/removing tail

      This is because we are using the head and tail pointers to 
      keep track of our head and tail nodes. There for we next has to 
      iterate through the list to find the head or tail nodes.

      We can find it and preform an operation on it in constant time
      because we always know where they are because we have our pointers.
      Adding and removing the head or tail nodes is a very performant operation.

      Searching though Linked List:
       - Linear time complexity
       - O (n)

       worst case we have to search to the end of the list to find that value.
       So as the list grows in size the time that it takes to run our search
       function will grow proportionally to the size of the Linked List.

       - O (n) is still acceptable and efficient time complexity.

       Linked Lists are rather performant in nature and are a commonly used data 
       structure.
 
 ============================================================== */

function LinkedList() {
  this.head = null;
  this.tail = null;
}

function Node(value, next, prev) {
  this.value = value;
  this.next = next;
  this.prev = prev;
}

LinkedList.prototype.addToHead = function(value) {
  var newNode = new Node(value, this.head, null);
  if (this.head) this.head.prev = newNode;
  else this.tail = newNode;
  this.head = newNode;
}

LinkedList.prototype.addToTail = function(value) {
  var newNode = new Node(value, null, this.tail);
  if (this.tail) this.tail.next = newNode;
  else this.head = newNode;
  this.tail = newNode;
}

LinkedList.prototype.removeHead = function() {
  if (!this.head) return null;
  var val = this.head.value;
  this.head = this.head.next;
  if (this.head) this.head.prev = null;
  else this.tail = null;
  return val;
}

LinkedList.prototype.removeTail = function() {
  if (!this.tail) return null;
  var val = this.tail.value;
  this.tail = this.tail.prev;
  if(this.tail) this.tail.next = null;
  else this.tail = null;
  return val;
}

LinkedList.prototype.search = function(searchValue) {
  var currentNode = this.head;
  while (currentNode) {
    if(currentNode.value === searchValue) return currentNode.value;
    currentNode = currentNode.next;
  }
  return null;
}

LinkedList.prototype.indexOf = function(value) {
  var currentNode = this.head;
  var index = 0;
  var arrayOfListedIndexes = [];
  
  while(currentNode) {
    if (currentNode.value === value)  arrayOfListedIndexes.push(index);
    currentNode = currentNode.next;
    index++;
  }
  return arrayOfListedIndexes;
}



ll = new LinkedList();

ll.addToTail(100);
ll.addToTail('hello');
ll.addToHead(300);
ll.addToHead('hello');
ll.addToHead(300);

console.log(ll.indexOf('hello'));

// // console.log(ll.tail.prev.prev.prev);
// console.log(ll);
// console.log(ll.removeHead());
// console.log(ll.removeTail());
// console.log(ll);
