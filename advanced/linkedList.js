class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

function countNodes(head) {
  //assuming at least 1 node
  let count = 1;
  let current = head;
  while (current.next !== null) {
    current = current.next;
    count += 1;
  }
  return count;
}

let nodeA = new Node(6);
let nodeB = new Node(3);
let nodeC = new Node(4);
let nodeD = new Node(2);
let nodeE = new Node(1);

nodeA.next = nodeB;
nodeB.next = nodeC;
nodeC.next = nodeD;
nodeD.next = nodeE;

console.log("This linked list's length is: (should print 5)");

console.log(countNodes(nodeA));
