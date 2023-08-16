
export const prettyPrint = (node, prefix = "", isLeft = true) => {
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
        if(!arr || arr.length === 0) 
            return null;
        var copy = copy || arr.slice();
        //remove duplicates;
        copy = [...new Set(arr)];

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
            if(curr.value === value) return null;
            if(curr.value > value) {
                prev = curr;
                curr = curr.left;
            } else if(curr.value < value) {
                prev = curr;
                curr = curr.right;
            }

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

    /**
     * Find largest node that is larger than the root(node)
     * Found in the left subtree and right most node
     * @param {*} node root node
     * @returns 
     */
    successor(node) {
        if(!node) return null;
        node = node.right;
        while(node.left != null) node = node.left;
        return node;
    }

    /**
     * Find largest node that is smaller than the root(node)
     * Found in the right subtree and the left most node
     * @param {*} node rootnode
     * @returns largest node smalle than node
     */
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

        if(!callback) return arr;
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


        if(!callback) return arr;
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
        if(!callback) return arr;
    }

    postorder(callback) {
        let stack = [];

        let arr = [];
        let prev = null;
        let curr = this.root;
        let track = 0;
        stack.push(curr);

        while(stack.length !== 0) {
            curr = stack[stack.length - 1];
            stack.pop();
            callback ?  callback(curr) : arr.unshift(curr.value);

            if(curr.left)  stack.push(curr.left);
            if(curr.right) stack.push(curr.right);
        }

        if(!callback) return arr;
    }

    /**
     * 
     */
    height(node) {
        if(node === null) return null;
        let queue = [];
        let height = 0;
        let curr = null;
        queue.unshift(node);

        while(queue.length > 0) {
            height++;

            for(var i = 0; i < queue.length; i++) {
                curr = queue.pop();
                if(curr.left) queue.unshift(curr.left);
                if(curr.right) queue.unshift(curr.right);
            }
            //Set current node to last queue item
            curr = queue[queue.length - 1];
        }
        return height - 1;
    }

    depth(node) {
        if(node === null) return null;
        if(this.root === node) return 0;
        let depth = 0;
        let max = 0;
        let curr = this.root;
        let stack = []

        while(stack.length > 0 || curr !== null) {
            if(curr !== null) {
                stack.push(curr);
                curr = curr.left;
                depth++;
            } else {
                max = depth > max ? depth : max;
                depth--;
                curr = stack[stack.length - 1];
                stack.pop();
    
                curr = curr.right;
            }   
        }
        return max - 1;
    }

    /**
     * Check if tree is balanced
     * Uses recursion and dfs to check depth of left and right subtree
     * If the difference of the depth of left and right is greater than 1,
     * return Infinity, otherwise return max between depth of left or right
     * @param {*} node 
     * @returns true if balanced, false if tree is not balanced
     */
    isBalanced(node) {
        let dfs = function(curr) {
            if(!curr) return 0;
            let left = 1 + dfs(curr.left);
            let right = 1 + dfs(curr.right);
            if(Math.abs(left - right) > 1) return Infinity;
            return Math.max(left,right);
        }
        return dfs(this.root) === Infinity ? false : true;
    }
    /**
     * Rebalance tree
     * Get 
     * @returns end function if isBalanced() returns true
     */
    rebalance() {
        if(this.isBalanced()) return;
        let arr = this.inorder();
        this.buildTree(arr);
    }
}

/*

let array = [1,2,3,4,5];

let bst = new BST(array);
prettyPrint(bst.root);
console.log(bst.isBalanced(bst.root));
bst.rebalance();
bst.insert(10);
bst.insert(11);
bst.insert(12);
prettyPrint(bst.root);
console.log(bst.isBalanced(bst.root));
bst.rebalance();
prettyPrint(bst.root);
console.log(bst.isBalanced(bst.root));

 */