/**
 * Given a singly linked list of integers l and an integer k,
 * remove all elements from list l that have a value equal to k.
 *
 * @param {List} l
 * @param {Number} k
 * @return {List}
 *
 * @example
 * For l = [3, 1, 2, 3, 4, 5] and l = 3,
 * the output should be [1, 2, 4, 5]
 *
 * Singly - linked lists are already defined with this interface
 * function ListNode(x) {
 *   this.value = x;
 *   this.next = null;
 * }
 */

function removeKFromList(l, k) {
  // throw new Error('Not implemented');
  let res = l;

  while (res.value === k) {
    res = res.next;
  }

  let tmpNode = res;
  let curNode = tmpNode;
  let nextNode = tmpNode.next;

  while (tmpNode.next) {
    if (tmpNode.value !== k) {
      curNode = tmpNode;
      nextNode = tmpNode.next;
    } else {
      nextNode = tmpNode.next;
    }
    curNode.next = nextNode;
    tmpNode = tmpNode.next;
  }

  return res;
}

module.exports = removeKFromList;
