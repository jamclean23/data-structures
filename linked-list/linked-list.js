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

        removeLast(list);
        
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

    function contains (value) {
        return recurse(value, this.storedList);

        function recurse (value, list) {
            if (list.value === value) {
                return true;
            } else if (list.next === null) {
                return false;
            } else {
                return recurse(value, list.next);
            }
        }

    }

    function find (value) {
        return recurse(value, this.storedList);

        function recurse (value, list, accumulator = 0) {
            if (list.value === value) {
                return accumulator;
            } else if (list.next === null) {
                return null;
            } else {
                return recurse(value, list.next, ++accumulator);
            }
        }
    }

    function toString () {
        return recurse(this.storedList)

        function recurse(list, string = '') {
            if (list.next === null) {
                return list.value;
            } else {
                return string + list.value + ', ' + recurse(list.next, string);
            }
        }
    }

    function insertAt (value, index) {
        if (index >= 0) {
            this.storedList = recurse(value, index, Object.assign({}, this.storedList));
        } else {
             console.log('Out of bounds');
        }

        function recurse (value, index, list, accumulator = 0) {
            if (accumulator === index) {
                let newItem = CreateNode();
                newItem.value = value;
                newItem.next = Object.assign({}, list);
                return newItem;
            } else if (list.next === null) {
                return 'Out of bounds';
            } else {
                list.next = recurse(value, index, list.next, ++accumulator);
                return list;
            }
        }
    }

    function removeAt (index) {
        if (index >= 0) {
            this.storedList = recurse(index, Object.assign({}, this.storedList));
        } else {
            return 'Out of bounds';
        }

        function recurse (index, list, accumulator = 0) {
            if (accumulator === index) {
                let newItem = Object.assign({}, list.next);
                return newItem;
            } else if (list.next === null) {
                console.log('Out of bounds');
                return list;
            } else {
                list.next = recurse(index, list.next, ++accumulator);
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
        pop,
        contains,
        find,
        toString,
        insertAt,
        removeAt
    }
}());

function test(condition) {
    if (condition) {
        console.log('\x1b[32m%s\x1b[0m', 'PASS');
    } else {
        console.log('\x1b[31m%s\x1b[0m', 'FAIL');
    }
}

// INITIALIZE

const myArray = ['blah', 14, -6, 0, true, 'yellow', 2, 1, 'orangutan']; 

LinkedList.arrayToLinkedList(myArray);




// TESTS
console.log('\n\n----TESTS----\n');

// LinkedList.tail() returns the last node on the list
console.log('\n.tail() returns the last item of list');
test(LinkedList.tail().value === 'orangutan');

// Add a node containing a value to the end of the list with LinkedList.append(value)
console.log('\n.append(value) adds an item to the end of the list');
LinkedList.append('bleh');
test(LinkedList.tail().value === 'bleh');

// LinkedList.head() returns the first node on the list
console.log('\n.head() returns the first node on the list');
test(LinkedList.head().value === 'blah');

// Add a node containing a value to the beginning of the list with LinkedList.prepend(value)
console.log('\n.prepend(value) adds a node to the beginning of the list');
LinkedList.prepend(23);
test(LinkedList.head().value === 23);

// LinkedList.size() returns the total number of nodes
console.log('\n.size() counts the total number of nodes');
test(LinkedList.size() === 11);

// LinkedList.at(index) returns the node at the given index
console.log('\n.at(index) returns the node at the given index');
test(LinkedList.at(5) === true);

// LinkedList.pop() removes the last element from the list
console.log('\n.pop() removes the last element from the list');
LinkedList.pop();
test(LinkedList.tail().value === 'orangutan');

// LinkedList.contains(value) returns true if the given value is in the list, false if not
console.log('\n.contains(value) returns true/false depending on if the list contains a value');
test(LinkedList.contains(true));

// LinkedList.find(value) returns the index of the value if it's in the list, or null if it is not
console.log('\n.find(value) returns the index of the value, or null if the value is not present');
test(LinkedList.find('blah') === 1);

// LinkedList.toString() returns the entire list in string format
console.log('\n.toString() returns a string of all values in the list');
test(LinkedList.toString() === '23, blah, 14, -6, 0, true, yellow, 2, 1, orangutan');

// LinkedList.insertAt(value, index) inserts a new node at provided index with provided value
console.log('\n.insertAt(value, index) inserts a new node at index with value');
LinkedList.insertAt('blue', 1);
test(LinkedList.at(1) === 'blue');

// LinkedList.removeAt(index) removes the node at given index
console.log('\n.removeAt(index) removes node at index');
LinkedList.removeAt(1);
test(LinkedList.at(1) === 'blah');


// Final Linked List
console.log('\n\n----RESULTANT LIST----\n')
console.dir(LinkedList.storedList, {depth: null});
console.log('\n');

