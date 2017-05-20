/* ============================================================== 
     
             Constant runtime - Big O Notation: "O (1)" // O of 1
 ============================================================== */

function log(array) {
    console.log(array[0]);
    console.log(array[1]);
}

log([ 1, 2, 3, 4 ]);
log([ 1, 2, 3, 4 ,6 ,8 ]);
log([ 1, 2, 3, 4 ,5 ,6 ,7 ,8 ,9 ]);

/* ============================================================== 
    Function log will always take the same amount of
    time to complete no matter what size array is passed
    to it as it will only ever execute two console logs
    on the first two items in the array.

    This is known as: Constant runtime - Big O Notation: "O (1)"
    when plotted on a graph its runs from right to left. 
 
 ============================================================== */


/*****************************************************************/


/* ============================================================== 
     
             Linear runtime - Big O Notation: "O (n)"
 
 ============================================================== */

function logAll(array) {
    for(var i = 0; i < array.length; i++) {
        console.log(array[i]);
    }
}

logAll([ 1, 2, 3, 4 ]);
logAll([ 1, 2, 3, 4 ,6 ,8 ]);
logAll([ 1, 2, 3, 4 ,5 ,6 ,7 ,8 ,9 ]);


/* ============================================================== 
    Function logAll will increase the amount of time to complete
    relative to number of iterations in the array.

    This is known as: Linear runtime - Big O Notation: "O (n)"
    45* angle on chart.
 ============================================================== */


/*****************************************************************/


/* ============================================================== 
     
             Exponential runtime - Big O Notation: "O (n^2)"    O of n squared

 ============================================================== */

function addAndLog(array) {
    for (var i = 0; i < array.length; i++){
        for (var j = 0; j < array.length; j++) {
            console.log(array[i] + array[j]);
        }
    }
}
 
addAndLog([ 'a', 'b', 'c', 'd']); // 16 pairs logged out
addAndLog([ 'a', 'b', 'c', 'd', 'e', 'f' ]); // 36 pairs
addAndLog([ 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h' ]); // 64 pairs

/* ============================================================== 
    Super insufficient puts takes about of computational power to 
    execute large arrays and dramatically times more time to complete
    when passing in larger arrays.

    This is known as: Exponential runtime - Big O Notation: "0 (n^2)"
    curves almost straight up on graph.
 ============================================================== */


/*****************************************************************/


/* ============================================================== 
     
             Logarithmic runtime - Big O Notation: "0 (log n)" // O of log n
 
 ============================================================== */


function binarySearch(array, key) {
    debugger;
    var low = 0;
    var high = array.length - 1;
    var mid;
    var element;

    while(low <= high) {
        mid = Math.floor((low + high) / 2 , 10);
        element = array[mid];
        if (element < key) {
            low = mid + 1;
        } else if (element > key) {
            high = mid - 1;
        } else {
            return mid;
        }
    }
    return -1;
}

console.log(binarySearch([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20], 3));



/* ============================================================== 
    Function binarySearch returns the index of the key.
    In every iteration we preform we are cutting the input in half
    iteration again unit you reach the 
    This is great because even if you have a huge input we are only
    going to be looking at a fraction of the elements to find the 
    one we are searching for.  
    
    As the number of the input grows the number of operations preformed 
    will not grow proportionally but grow logarithmically.

    This is known as Logarithmic runtime - Big O Notation: "0 (log n)"
    This has a steep rise at the start at the chart and levels off v

    note* if we had an input of 4000 elements it would only take about 12 
    operations to find what we are looking for!
 ============================================================== */








