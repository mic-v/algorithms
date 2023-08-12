import { LinkedList } from './linkedlist.js';

describe("LinkedList Creation", () => {
    it("should create linkedlist", () => {
        let list = new LinkedList();
        expect(list.head).toBe(null);
        expect(list.tail).toBe(null);
    });
});


describe("LinkedList Append", () =>  {
    it("should add one value into empty list", () => {
        let list = new LinkedList();
        list.append(2);
        expect(list.toString()).toBe("( 2 ) -> null");
    });
    it("should add a value into list with one value", () => {
        let list = new LinkedList();
        list.append(49);
        list.append(2);
        expect(list.toString()).toBe("( 49 ) -> ( 2 ) -> null");
    });

    it("should add a value into list with multiple values", () => {
        let list = new LinkedList();
        list.append(52)
        list.append(120);
        list.append(42)
        expect(list.toString()).toBe("( 52 ) -> ( 120 ) -> ( 42 ) -> null");
    });
});


describe("LinkedList Prepend", () => {
    it("should add a value into empty list", () => {
        let list = new LinkedList();
        list.prepend(2100);
        expect(list.toString()).toBe("( 2100 ) -> null");
    });

    it("should prepend value into list with one value", () => {
        let list = new LinkedList();
        list.append(2100);
        list.prepend(2099);
        expect(list.toString()).toBe("( 2099 ) -> ( 2100 ) -> null");
    });

    it("should prepend value into list with multiple values", () => {
        let list = new LinkedList();
        list.append(220);
        list.prepend(420);
        list.prepend(4598);
        expect(list.toString()).toBe("( 4598 ) -> ( 420 ) -> ( 220 ) -> null");
    });
});

describe("LinkedList Pop", () => {
    it("should return null if empty list", () => {
        let list = new LinkedList();
        let node = list.pop();
        expect(node).toBe(null);
    });

    it("should return a node if list contains a node", () => {
        let list = new LinkedList();
        list.append("41");
        let node = list.pop();
        expect(node.value).toBe("41");
    });

    it("should return a node if list contains nodes", () => {
        let list = new LinkedList();
        list.append("42");
        list.prepend(10);
        console.log(list.toString());
        let node = list.pop();

        expect(node.value).toBe("42");
    });

    it("should return a node if list contains nodes(string version))", () => {
        let list = new LinkedList();
        list.append("42");
        list.prepend(10);
        let node = list.pop();
        expect(list.toString()).toBe("( 10 ) -> null");
    })

});

describe("LinkedList Size", () =>  {
    it("should return size 0 on empty", () => {
        let list = new LinkedList();
        expect(list.getSize()).toBe(0);
    });

    it("should return size 1 on list with one value", () => {
        let list = new LinkedList();
        list.append(1);
        expect(list.getSize()).toBe(1);
    });

    it("should return size 4 on list", () => {
        let list = new LinkedList();
        list.append(1);
        list.append(1);
        list.append(1);
        list.append(1);
        expect(list.getSize()).toBe(4);
    });
});

describe("LinkedList Head", () => {
    it("should return null on empty list", () => {
        let list = new LinkedList();
        expect(list.getHead()).toBe(null);
    });

    it("should return head on list with values", () => {
        let list = new LinkedList();
        list.append(1); list.append(42);
        let node = list.getHead();
        expect(node.value).toBe(1);
    });

    it("should return correct head after pop", () => {
        let list = new LinkedList();
        list.append(1); list.append(50);
        list.pop();
        let node = list.getHead();
        expect(node.value).toBe(1);
    });
});

describe("LinkedList Tail", () => {
    it("should return null on empty list", () => {
        let list = new LinkedList();
        expect(list.getTail()).toBe(null);
    });

    it("should return tail on list with values", () => {
        let list = new LinkedList();
        list.append(1); list.append(42);
        let node = list.getTail();
        expect(node.value).toBe(42);
    });

    it("should return correc tail after pop", () => {
        let list = new LinkedList();
        list.append(1); list.append(50);
        list.pop();
        let node = list.getTail();
        expect(node.value).toBe(1);
    });
});

describe("LinkedList At", () => {
    it("should return null at empty list", () => {
        let list = new LinkedList();
        expect(list.at(0)).toBe(null);
    });

    it("should return node with value 1", () => {
        let list = new LinkedList();
        list.append(1);
        let node = list.at(0);
        expect(node.value).toBe(1);
    });

    it("should return node with value 2", () => {
        let list = new LinkedList();
        list.append(1); list.append(2);
        let node = list.at(1);
        expect(node.value).toBe(2);
    });
});

describe("LinkedList Contains", () => {
    it("should return false at empty list", () => {
        let list = new LinkedList();
        expect(list.contains(42)).toBeFalsy();
    });

    it("should find value and return true with a list of values", () => {
        let list = new LinkedList();
        list.append(2); list.append(1); list.append(4); list.append(2);
        expect(list.contains(1)).toBeTruthy();
    });

    it("should not find value and return false", () => {
        let list = new LinkedList();
        list.append(2); list.append(1); list.append(4); list.append(2);
        expect(list.contains(5)).toBeFalsy();
    });
});

describe("LinkedList Find", () => {
    it("should return null at empty list", () => {
        let list = new LinkedList();
        expect(list.find(42)).toBe(null);
    });

    it("should find value and return index 1 with a list of values", () => {
        let list = new LinkedList();
        list.append(2); list.append(1); list.append(4); list.append(2);
        expect(list.find(1)).toBe(1);
    });

    it("should not find value and return null", () => {
        let list = new LinkedList();
        list.append(2); list.append(1); list.append(4); list.append(2);
        expect(list.find(5)).toBe(null);
    });
});
