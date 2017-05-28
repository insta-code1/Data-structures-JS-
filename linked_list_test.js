function LinkedList() {
    this.head = null;
    this.tail = null
}

function Node(value, prev, next) {
    this.value = value;
    this.prev = prev;
    this.next = next;
}

LinkedList.prototype.addHeadNode = function(value) {
    var newNode = new Node(value, null, this.head);
    if (this.head) this.head.prev = newNode;
    else this.tail = newNode;
    this.head = newNode;
}

LinkedList.prototype.tailHeadNode = function(value) {
    var newNode = new Node(value, this.tail, null);
    if (this.tail) this.tail.next = newNode;
    else this.tail = newNode;
    this.tail = newNode;
}

// LinkedList.prototype.removeHeadNode = function(value) {
//     if (!this.head === null) return null;

// }


var LL = new LinkedList;

LL.addHeadNode(100);
LL.addHeadNode(200);
LL.addHeadNode(300);

console.log(LL);