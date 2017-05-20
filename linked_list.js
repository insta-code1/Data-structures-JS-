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

LinkedList.prototype.search = function(serchValue) {
  var currentNode = this.head;
  while (currentNode) {
    if(currentNode.value === serchValue) return currentNode.value;
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
