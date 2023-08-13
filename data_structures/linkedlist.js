export class Node {
    constructor(value, nextNode) {
        if(!nextNode instanceof Node) {
            throw new Error('Node expected');
        } 
        this.value = value;
        this.nextNode = nextNode;
    }
}

export class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;

    }
    
    /**
     * appends node to end of list with a given value
     * @param {*} value value to be inserted into node 
     */
    append(value) {
        var newNode = new Node(value, null);
        if(this.size === 0) {
            this.head = newNode;
            this.tail = this.head;
        } else {
            this.tail.nextNode = newNode;
            this.tail = newNode;
        }
        this.size++;
    }
    
    /**
     * add value in beginning of the list
     * @param {*} value new value to add in list
     */
    prepend(value) {
        var newNode = new Node(value, this.head);
        this.head = newNode;
    }

    /**
     * 
     * @returns size of linked list
     */

    getSize() {
        return this.size;
    }

    /**
     * 
     * @returns head node of list
     */
    getHead() {
        return this.head;
    }

    /**
     * 
     * @returns tail node of list
     */
    getTail() {
        return this.tail;
    }

    /**
     * return node from list given index
     * @param {*} index position in linked list
     * @returns 
     */
    at(index) {
        if(index > this.size) 
        throw new Error("Index over length of linkedlist");
        let node = this.head;
        while(node != null && index > 0) {
            node = node.nextNode;
            index--;
        }
        return node;
    }
    /**
     * remove tail(last node) from list
     * @returns node removed
     */
    pop() {
        let node = this.head;
        if(node === null) {
            return null;
        } else if(node === this.tail) {
            this.head = this.tail = null;
            return node;
        }
        while(node != null) {
            console.log(node);
            if(node.nextNode === this.tail) {
                let temp = this.tail;
                this.tail = null;
                node.nextNode = null;
                this.tail = node;
                return temp;
            }
            node = node.nextNode;
        }
        return null;
    }

    /**
     * find value within linkedlist
     * iteratively searches for value
     * @param {*} value value to find in list
     * @returns true if value is found, false if value is not found
     */
    contains(value) {
        let node = this.head;
        while(node != null) {
            if(node.value === value) return true;
            node = node.nextNode;
        }
        return false;
    }
    /**
     * find value within linkedlist and return index;
     * @param {*} value some value
     * @returns 
     */
    find(value) {
        let node = this.head;
        let i = 0;
        while(node != null) {
            if(node.value === value) return i;
            i++;
            node = node.nextNode;
        }
        return null;
    }

    /**
     * 
     * @returns string of linked list
     */
    toString() {
        let node = this.head;
        let string = "";
        while(node != null) {
            //console.log(node);
            string+= "( " + node.value + " ) -> ";
            node = node.nextNode;
        }    
        console.log("yo");
        string+= "null";
        return string;
    }

}


let list = new LinkedList();
list.append("42");
list.prepend(10);
console.log(list.toString());
console.log(list.pop().value);