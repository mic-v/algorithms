import { BST, prettyPrint } from './bst.js';

console.log("Three random sets of 100 numbers that are sorted:");
let one = [2, 9, 12, 33, 39, 40, 44, 56, 61, 76, 96, 99, 107, 115, 137, 139, 143, 168, 186, 190, 191, 195, 200, 201, 202, 203, 210, 216, 221, 249, 257, 280, 292, 301, 304, 320, 338, 349, 356, 372, 375, 390, 393, 394, 399, 416, 418, 445, 469, 473, 485, 491, 494, 496, 511, 513, 533, 534, 539, 551, 560, 573, 588, 592, 598, 632, 649, 650, 661, 680, 691, 698, 710, 718, 725, 730, 735, 742, 747, 751, 761, 781, 791, 795, 797, 817, 825, 840, 856, 869, 874, 881, 883, 902, 913, 923, 926, 929, 933, 947];
let two = [14, 29, 53, 54, 71, 84, 92, 93, 109, 114, 138, 177, 179, 181, 187, 189, 196, 205, 230, 231, 239, 247, 249, 254, 278, 282, 300, 303, 311, 319, 327, 329, 341, 391, 399, 419, 428, 432, 437, 443, 470, 471, 476, 480, 481, 490, 497, 503, 514, 515, 534, 537, 542, 549, 561, 566, 572, 576, 581, 583, 585, 587, 588, 589, 605, 636, 641, 662, 665, 693, 695, 697, 705, 728, 769, 774, 775, 790, 792, 802, 813, 814, 830, 831, 844, 845, 851, 863, 868, 888, 891, 908, 910, 927, 931, 941, 949, 978, 981, 985];
let three = [22, 34, 46, 48, 59, 75, 84, 96, 102, 109, 120, 145, 163, 178, 182, 188, 197, 198, 202, 206, 232, 233, 237, 252, 253, 255, 256, 264, 266, 270, 271, 292, 300, 301, 303, 316, 324, 349, 355, 369, 373, 380, 405, 413, 427, 431, 435, 445, 480, 488, 498, 524, 529, 531, 532, 535, 537, 547, 551, 555, 566, 580, 581, 608, 613, 623, 631, 654, 661, 667, 669, 677, 692, 696, 712, 720, 734, 743, 749, 752, 755, 777, 784, 788, 794, 814, 824, 827, 861, 866, 869, 877, 889, 908, 917, 920, 924, 961, 978, 993];
/**
 * Helper functions 
 */

const inorder = (root) => {
    if(root === null) return [];
    if(root.left === null && root.right === null) return [root.value];
    let left = inorder(root.left);
    left.push(root.value);
    let right = inorder(root.right);
    return [...left, ...right];
}

const levelorder = (root) => {

    const height = (node) => {
        if(node === null) return 0;

        let lh = height(node.left);
        let rh = height(node.right);
        
        return lh > rh ? lh + 1 : rh + 1;
    }

    const levelorderHelper = (curr, h) => {
        if(curr === null) return [];
        if(h === 1) {
            return [curr.value];
        } else {
            let left = levelorderHelper(curr.left, h - 1);
            let right = levelorderHelper(curr.right, h - 1);
            return [...left, ...right];
        }
    }

    let h = height(root);
    let result = [];
    for(let i = 1; i <= h; i++) {
        result = [...result, ...levelorderHelper(root, i)];
    }
    return result;

}


const preorder = (root) => {

}

const postorder = (root) => {

}


describe("BST Creation", () => {
    it("should create bst that is empty", () => {
        let bst = new BST();
        expect(bst.root).toBeNull();
    });

    it("should create bst with a root", () => {
        let bst = new BST([1]);
        expect(bst.root.value).toBe(1);
    });

    it("should create a balanced bst", () => {
        let bst = new BST([1]);
        expect(bst.inorder()).toStrictEqual([ 1]);
        bst = new BST([1,2]);
        expect(bst.inorder()).toStrictEqual([ 1, 2]);
        bst = new BST([1,2,3]);
        expect(bst.inorder()).toStrictEqual([ 1, 2, 3]);
    });

    it("should create a balanced bst(big sets)", () => {
        let bst = new BST(one);
        expect(bst.inorder()).toStrictEqual(one);
        bst = new BST(two);
        expect(bst.inorder()).toStrictEqual(two);
        bst = new BST(three);
        expect(bst.inorder()).toStrictEqual(three);
    });

});


describe("BST Order (BST functions mostly iterative, helper is recursion)", () => {
    it("should print in order same as helper inorder function", () => {
        let bst = new BST([1,2,3]);
        expect(bst.inorder()).toStrictEqual(inorder(bst.root));
    
        bst = new BST([1,4,8,10,15,20]);
        expect(bst.inorder()).toStrictEqual(inorder(bst.root));
    });

    it("should print in order same as helper inorder function(large sets)", () => {
        let bst = new BST(one);
        expect(bst.inorder()).toStrictEqual(inorder(bst.root));
    
        bst = new BST(two);
        expect(bst.inorder()).toStrictEqual(inorder(bst.root));

        bst = new BST(three);
        expect(bst.inorder()).toStrictEqual(inorder(bst.root));
    });

    it("should print in order same as helper inorder function(large sets)", () => {
        let bst = new BST(one);
        expect(bst.inorder()).toStrictEqual(inorder(bst.root));
    
        bst = new BST(two);
        expect(bst.inorder()).toStrictEqual(inorder(bst.root));

        bst = new BST(three);
        expect(bst.inorder()).toStrictEqual(inorder(bst.root));
    });

    it("should print level order same as helper level order", () => {
        let bst = new BST([1,2]);
        expect(bst.levelOrder()).toStrictEqual(levelorder(bst.root));
        bst = new BST([1]);
        expect(bst.levelOrder()).toStrictEqual(levelorder(bst.root));
        bst = new BST([1,2,3]);
        expect(bst.levelOrder()).toStrictEqual(levelorder(bst.root));
        bst = new BST([]);
        expect(bst.levelOrder()).toStrictEqual(levelorder(bst.root));
    });


    it("should print level order same as helper level order(duplicates)", () => {
        let bst = new BST([1,2,3,4,5,6,7,8,1,2,3,4,5,6,7,8]);
        expect(bst.levelOrder()).toStrictEqual(levelorder(bst.root));
    });

    it("should print level order same as helper level order(even bigger set)", () => {
        let bst = new BST(one);
        expect(bst.levelOrder()).toStrictEqual(levelorder(bst.root));
        bst = new BST(two);
        expect(bst.levelOrder()).toStrictEqual(levelorder(bst.root));
        bst = new BST(three);
        expect(bst.levelOrder()).toStrictEqual(levelorder(bst.root));
    });


    
});