// Linked List Project

/*Assignment

OBJECTIVE:
    - Build a module that will convert an array into a linked list.
    - Build functionality so that the module passes a series of tests.

You will need two classes or factories:

    LinkedList class / factory, which will represent the full list.
    Node class / factory, containing a value function and a link to the nextNode,
        set both as null by default.

Build the following functions in your linked list class:

    append(value) adds a new node containing value to the end of the list
    prepend(value) adds a new node containing value to the start of the list
    size returns the total number of nodes in the list
    head returns the first node in the list
    tail returns the last node in the list
    at(index) returns the node at the given index
    pop removes the last element from the list
    contains(value) returns true if the passed in value is in the list and otherwise returns false.
    find(value) returns the index of the node containing value, or null if not found.
    toString represents your LinkedList objects as strings, so you can print them out and preview them
        in the console. The format should be: ( value ) -> ( value ) -> ( value ) -> null

Extra Credit
    insertAt(value, index) that inserts a new node with the provided value at the given index.
    removeAt(index) that removes the node at the given index.
    Extra Credit Tip: When you insert or remove a node, consider how it will affect the existing nodes. Some of the nodes will need their nextNode link updated.
    */


// FUNCTIONS

const LinkedList = (function () {

    let storedList = {};

    function printSomething() {
        console.log('something');
    }

    function CreateNode (value = null) {
        return {
            value: value,
            next: null
        }
    }

    function arrayToLinkedList (array) {
        let list = {};

        array.forEach( (element, index) => {
            if (index > 0) { 
            list = buildList(list, element);
            } else {
                list = {
                    value: element,
                    next: null
                }
            }
        });


        this.storedList = list;

    }  
    
    function buildList (list, value) {

        if (list.next === null) {
            list.next = CreateNode(value);
            return list;
        } else {
            list.next = buildList(list.next, value);
            return list;
        }
    }

    function append (value) {
        let list = this.storedList;
        buildList(list.next, value);
    }

    function tail () {
        let list = this.storedList;
        return findLast(list);

        function findLast (list) {
            if (list.next === null) {
                return list;
            } else {
                return findLast(list.next);
            }
        }
    }

    function head () {
        let list = Object.assign({}, this.storedList);
        list.next = null;
        return list;
    }

    function prepend (value) {
        let list = CreateNode();
        list.value = value;
        list.next = this.storedList;
        this.storedList = list;

    }

    function size () {
        let numberOfNodes = count(this.storedList);
        return numberOfNodes;

        function count (list, accumulator = 0) {
            if (list.next === null) {
                ++accumulator;
                return accumulator;
            } else {
                return count(list.next, ++accumulator);
            }
        }
        

    }

    function at (index) {
        if (index >= 0 && (typeof index === 'number')) {
            return findIndex(index, this.storedList)
        } else {
            return 'Out of Bounds';
        }

        function findIndex(index, list) {
            if (index === 0) {
                return list.value;
            } else if (list.next === null) {
                return 'Out of bounds';
            } else {
                return findIndex(--index, list.next);
            }
        }
    }

    function pop () {

        let list = Object.assign({}, this.storedList);

        console.log(removeLast(list));
        
        function removeLast (list) {

            if (list.next === null) {
                list = null;
                return list;
            } else if (list.next.next === null) {
                list.next = null;
                return list;
            } else {
                list.next = removeLast(list.next);
                return list;
            }
        }
    }

    return {
        CreateNode,
        arrayToLinkedList,
        printSomething,
        storedList,
        append,
        tail,
        head,
        prepend,
        size,
        at,
        pop
    }
}());


// INITIALIZE

const myArray = ['blah', 14, -6, 0, true, 'yellow', 2, 1, 'orangutan']; 

LinkedList.arrayToLinkedList(myArray);




// TESTS
console.log('\n----TESTS----\n');

// LinkedList.tail() returns the last node on the list
console.log('\n.tail() returns the last item of list');
if (LinkedList.tail().value === 'orangutan') {
    console.log('PASS');
} else {
    console.log('FAIL');
}

// Add a node containing a value to the end of the list with LinkedList.append(value)
console.log('\n.append(value) adds an item to the end of the list');
LinkedList.append('bleh');
if (LinkedList.tail().value === 'bleh') {
    console.log('PASS');
} else {
    console.log('FAIL');
}

// LinkedList.head() returns the first node on the list
console.log('\n.head() returns the first node on the list');
if (LinkedList.head().value === 'blah') {
    console.log('PASS');
} else {
    console.log('FAIL');
}

// Add a node containing a value to the beginning of the list with LinkedList.prepend(value)
console.log('\n.prepend(value) adds a node to the beginning of the list');
LinkedList.prepend(23);
if (LinkedList.head().value === 23) {
    console.log('PASS');
} else {
    console.log('FAIL');
}

// LinkedList.size() returns the total number of nodes
console.log('\n.size() counts the total number of nodes');
if (LinkedList.size() === 11) {
    console.log('PASS');
} else {
    console.log('FAIL');
}

// LinkedList.at(index) returns the node at the given index
console.log('\n.at(index) returns the node at the given index');
if (LinkedList.at(5) === true) {
    console.log('PASS');
} else {
    console.log('FAIL');
}

// LinkedList.pop() removes the last element from the list
console.log('\n.pop() removes the last element from the list');
LinkedList.pop();
if (LinkedList.tail().value === 'orangutan') {
    console.log('PASSED');
} else {
    console.log('FAIL');
}

// LinkedList.contains(value) returns true if the given value is in the list, false if not

// LinkedList.find(value) returns the index of the value if it's in the list, or null if it is not

// LinkedList.toString() returns the entire list in string format

// LinkedList.insertAt(value, index) inserts a new node at provided index with provided value

// LinkedList.removeAt(index) removes the node at given index


// Final Linked List
console.log('\n----RESULTANT LIST----\n')
console.dir(LinkedList.storedList, {depth: null});
console.log('\n');

