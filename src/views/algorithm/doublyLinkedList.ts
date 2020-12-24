import { Item, ListNode, LinkedList } from './linkedList';

interface DoublyItem extends Item {
  next: null | DoublyItem;
  prev: null | DoublyItem;
}

class DoublyNode extends ListNode {
  prev: DoublyItem['prev'];
  constructor(element: DoublyItem['element'], next: DoublyItem['next'], prev: DoublyItem['prev']) {
    super(element);
    this.prev = prev
  }
}

class DoublyLinkedList extends LinkedList {}