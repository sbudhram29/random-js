class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor(node) {
    if (node.constructor === Node) {
      this.node = node;
    } else {
      this.node = new Node();
    }
  }

  addNode(value) {
    let current = this.node;
    while (current.next !== null) {
      current = current.next;
    }

    current.next = new Node(value);
  }

  deleteNode(value) {
    let current = this.node;
    if (current.data === value) {
      current = current.next;
      this.node = current;
      return;
    }
    while (current.next !== null) {
      if (current.next.data === value) {
        current.next = current.next.next;
      }
      if (current.next) {
        current = current.next;
      } else {
        break;
      }
    }
  }

  countNodes() {
    //assuming at least 1 node
    let count = 1;
    let current = this.node;
    while (current.next !== null) {
      current = current.next;
      count += 1;
    }
    return count;
  }
}

let nodeA = new Node(6);

console.log("This linked list's length is: (should print 5)");

let linkedList = new LinkedList(nodeA);
console.log(linkedList.countNodes());
linkedList.addNode(7);
linkedList.addNode(8);
linkedList.deleteNode(6);
linkedList.deleteNode(8);
console.log(linkedList.countNodes());
console.log(linkedList);
