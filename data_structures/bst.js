
const prettyPrint = (node, prefix = "", isLeft = true) => {
    if (node === null) {
      return;
    }
    if (node.right !== null) {
      prettyPrint(node.right, `${prefix}${isLeft ? "│   " : "    "}`, false);
    }
    console.log(`${prefix}${isLeft ? "└── " : "┌── "}${node.value}`);
    if (node.left !== null) {
      prettyPrint(node.left, `${prefix}${isLeft ? "    " : "│   "}`, true);
    }
  };

export class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

export class BST {
    constructor(arr) {
        this.root = null;
        this.buildTree(arr);
    }

    /**
     * Build a BST from a sorted array
     * 
     * @param {*} arr 
     * @returns 
     */
    buildTree(arr) {    
        var copy = copy || arr.slice();
        if(!copy || copy.length === 0) 
            return null;

        //Pick a middle value from the array as root
        let mid = Math.floor(copy.length / 2);
        let value = arr.at(mid);
        let root = new Node(value);

        //Get left and right child nodes by recursion
        root.left = this.buildTree(copy.slice(0, mid));
        root.right = this.buildTree(copy.slice(mid + 1));

        this.root = root;
        return this.root;
        
    }

    /**
     * Inserted node in BST iteratively
     * @param {*} value value to be inserted
     * @returns node that is inserted
     */
    insert(value) {
        if(this.root === null) {
            this.root = new Node(key);
            return this.root;
        }

        let prev = null;
        let curr = this.root;
        while(curr) {
            if(curr.value > value) {
                prev = curr;
                curr = curr.left;
            } else if(curr.value < value) {
                prev = curr;
                curr = curr.right;
            } else 
                break;
        }
        let node = new Node(value);
        prev.value > value ? prev.left = node : prev.right = node;
        return node;
    }

    /**
     * Delete node in tree iteratively
     * @param {*} value value to be deleted in tree
     * @returns if root is null, nothing
     */
    delete(value) {
        if(this.root === null) {
            return;
        }

        let prev = null;
        let curr = this.root;
        while(curr && curr.value !== value) {
            prev = curr;
            if(curr.value > value) curr = curr.left; 
            else curr = curr.right;
        }

        if(curr == null) return;
        if(this.child(curr)){
            if(curr != this.root) {
                if(prev.left === curr) prev.left = null; 
                else prev.right = null;
                curr = null;
            } else 
                root = null;
        } else if(curr.left && curr.right) {
            let successor = this.successor(curr.right);
            successor.left = curr.left;
            if(successor === curr.right) {
                if(prev.left === curr) prev.left = successor;
                else prev.right = successor;
            } else {
                let temp = successor.value;
                this.delete(successor.value);
                curr.value = temp;
            }
        } else {
            let child = curr.left === null ? curr.right : curr.left;
            if(prev.left === curr) prev.left = child;
            else prev.right = child;
            curr = null;
        }


    }

    shiftNodes(parent, root) {

    }

    successor(node) {
        if(!node) return null;
        node = node.right;
        while(node.left != null) node = node.left;
        return node;
    }

    predecessor(node) {
        if(!node) return null;
        node = node.left;
        while(node.right != null) node = node.right;
        return node;
    }
    
    find(value) {
        if(!this.root) return null;

        let curr = this.root;
        while(curr) {
            if(curr.value === value) return curr;
            else if(curr.value > value) curr = curr.left;
            else curr = curr.right;
        }
        return null;
    }

    /**
     * Check if a node is a child node
     * @param {*} node 
     * @returns true if no left or right child nodes, false otherwise
     */
    child(node) {
        return (!node.left && !node.right) ? true : false;
    }


    /**
     * Traverses through tree iterating through the nodes by each level
     * @param {*} callback callback function provided
     * @returns return arr
     */
    levelOrder(callback) {
        let queue = [];
        let arr = [];
        let curr = this.root;

        while(curr || queue.length !== 0) {
            //Insert root node into array
            callback ? callback(curr) : arr.push(curr.value);
            //Push left and right nodes into queue if they are there
            if(curr.left) queue.unshift(curr.left);
            if(curr.right) queue.unshift(curr.right);

            //Set current node to last queue item
            curr = queue[queue.length - 1];
            queue.pop();
        }

        return arr;
    }

    /**
     * Traverses through tree by left child, root node, and right node
     * @param {*} callback 
     * @returns array of values in order
     */
    inorder(callback) {
        let stack = [];
        let arr = [];
        let curr = this.root;

        while(curr || stack.length !== 0) {
            while(curr) {
                stack.push(curr);
                curr = curr.left;
            }
            curr = stack[stack.length - 1];
            callback ?  callback(curr) : arr.push(curr.value);
            stack.pop();

            curr = curr.right;
        }


        return arr;
    }

    /**
     * Traverses through the tree first by root, left child, right child
     * @param {*} callback 
     * @returns array of values in preorder
     */
    preorder(callback) {
        let stack = [];
        let arr = [];
        let curr = this.root;

        while(curr || stack.length !== 0) {
            while(curr) {
                callback ?  callback(curr) : arr.push(curr.value);
                stack.push(curr);
                curr = curr.left;
            }
            curr = stack[stack.length - 1];
            stack.pop();

            curr = curr.right;
        }
        return arr;
    }

    postorder(func) {

    }

    height() {
    }

    depth() {
    }

    isBalanced() {
        return true;
    }

    rebalance() {
        
    }
}

let array = [7, 8, 18, 30, 31, 57, 59, 61, 110, 129];

let bst = new BST(array);

console.log(bst);
console.log(bst.root.value);
prettyPrint(bst.root);


console.log(bst.inorder());
console.log(bst.preorder());
console.log(bst.levelOrder());