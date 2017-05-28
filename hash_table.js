function HashTable(size) {
  this.buckets = Array(size);
  this.numBuckets = this.buckets.length;
}

function hashNode(key, value, next) {
  this.key = key;
  this.value = value;
  this.next = next || null;
}

HashTable.prototype.hash = function(key) {
  var total = 0;
  for (var i = 0; i < key.length; i++) {
    total += key.charCodeAt(i);
  }
  var bucket = total % this.numBuckets;
  return bucket;
}

HashTable.prototype.insert = function(key, value) {
  var index = this.hash(key);
  // console.log(`- INDEX: ${index}`);
  if (!this.buckets[index]) this.buckets[index] = new hashNode(key, value);
  else if (this.buckets[index].key === key){
    this.buckets[index].value = value;
  }
  else {
    var currentNode = this.buckets[index];
    while (currentNode.next) {
      if (currentNode.next.key === key) {
        currentNode.next.value = value;
        return;
      }
      currentNode = currentNode.next;
    }
    currentNode.next = new hashNode(key, value);
  }
}

HashTable.prototype.get = function(key) {
  var index = this.hash(key);
  if (!this.buckets[index]) return null;
  else {
    var currentNode = this.buckets[index];
    while (currentNode) {
      if (currentNode.key === key) return currentNode.value;
      currentNode = currentNode.next;
    }
    return null;
  }
}

HashTable.prototype.retreiveAll = function() {
  debugger;
  var allNodes = [];
  for (var i = 0; i < this.numBuckets; i++) {
    var currentNode = this.buckets[i];
    while (currentNode) {
      allNodes.push(currentNode);
      currentNode = currentNode.next;
    }
  }
  return allNodes;
}



var myHT = new HashTable(30);
myHT.insert('Joe', "joe@gmail.com");
myHT.insert('insta', "insta@gmail.com");
myHT.insert('insta', "insta@gmail.com");
myHT.insert('Patrick', "paddy@one.com");
myHT.insert('Tony', "tony@gmail.com");
myHT.insert('Dave', "dave@gmail.com");
myHT.insert('John', "john@one.com");
// now ipdating emails
myHT.insert('Joe', "angular@ng.com");
myHT.insert('insta', "instacode@gmail.com");
myHT.insert('Patrick', "patrickftw@one.com");

// console.log(myHT.get('Joe'));
console.log(myHT.retreiveAll());
