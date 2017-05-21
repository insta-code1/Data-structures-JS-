/* ============================================================== 
     
             Binary Search Tree: Big O Notation: "O (log n)"
 
 ============================================================== */

function BST(value) {
    this.value = value;
    this.left = null;
    this.right = null;
}

BST.prototype.insert = function (value) {
    if (value <= this.value) {
        if (!this.left) this.left = new BST(value);
        else this.left.insert(value);
    }
    else if (value > this.value) {
        if (!this.right) this.right = new BST(value);
        else this.right.insert(value);
    }
}

BST.prototype.firstNode = function () {
    return this;
}

BST.prototype.contains = function (value) {
    if (value === this.value) return true;
    else if (value < this.value) {
        if (!this.left) return false;
        else return this.left.contains(value);
    }
    else if (value > this.value) {
        if (!this.right) return false;
        else return this.right.contains(value);
    }
}
functionality
BST.prototype.depthFirstTraversal = function (iteratorFunc, order) {
    if (order === 'pre-order') iteratorFunc(this.value)
    if (this.left) this.left.depthFirstTraversal(iteratorFunc, order);
    if (order === 'in-order') iteratorFunc(this.value);
    if (this.right) this.right.depthFirstTraversal(iteratorFunc, order);
    if (order === 'post-order') iteratorFunc(this.value);
}

BST.prototype.breathFirstTraversal = function (iteratorFunc) {
    var queue = [this];

    while (queue.length) {
        var treeNode = queue.shift();
        iteratorFunc(treeNode.value);
        if (treeNode.left) queue.push(treeNode.left);
        if (treeNode.right) queue.push(treeNode.right);
    }
}

BST.prototype.getMinVal = function () {
    if (this.left) return this.left.getMinVal();
    else return this.value;
}

BST.prototype.getMaxVal = function () {
    if (this.right) return this.right.getMaxVal();
    else return this.value
}


var bst = new BST(50);

bst.insert(30);
bst.insert(70);
bst.insert(100);
bst.insert(60);
bst.insert(59);
bst.insert(20);
bst.insert(45);
bst.insert(35);
bst.insert(85);
bst.insert(105);
bst.insert(10);


function log(value) {
    console.log(value);
}


// console.log(bst.firstNode())

// console.log(bst.left.right.left)
// console.log(bst.contains(15));
// console.log(bst.depthFirstTraversal(log, 'in-order'));
// console.log(bst.depthFirstTraversal(log, 'pre-order'));
// console.log(bst.depthFirstTraversal(log, 'post-order'));


// console.log(bst.breathFirstTraversal(log))


console.log(`MIN : ${bst.getMinVal()}`);
console.log(`MIN : ${bst.getMaxVal()}`);


/* ============================================================== 
     
             Binary Search Tree: Big O Notation: "O (log n)"

    In a balanced binary search tree if you had to search 4000 nodes
    this can done in 12 operations.

    Use cases would be: Dictionary, Phone Book Users 

    Example: Store users is a binary search tree.
             You could store users by numerical key and very quickly 
             find the user that you are looking for using binary search.  
                                
                                "O (log n)"

                            ********************

    Compare that to a linked list with 4000 nodes you could end up 
    searching through all 4000 nodes to find the node/value you are 
    looking for.
                                 "O (n)"
 
    Note: if BST is not balanced and you only have values on the right 
    or left nodes then it is the same as searching through a linked list. 

 ============================================================== */