const ListNode = require('../extensions/list-node');
/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 *
 */

class Queue {
  constructor() {
    this.curNode = new ListNode();
    this.lastNode = this.curNode;
    this.listSize = 0;
  }

  get size() {
    return this.listSize;
  }

  enqueue(element) {
    this.lastNode.value = element;
    this.lastNode.next = new ListNode();
    this.lastNode = this.lastNode.next;
    this.listSize++;
  }

  dequeue() {
    const res = this.curNode.value;

    if (this.curNode.next) this.curNode = this.curNode.next;
    else if (this.listSize === 1) this.curNode.value = undefined;
    this.listSize = this.listSize === 0 ? 0 : this.listSize - 1;

    return res;
  }
}

module.exports = Queue;
