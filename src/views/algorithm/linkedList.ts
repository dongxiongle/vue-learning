interface Item {
  element: string | number;
  next: null | Item
}
class ListNode implements Item {
  element: Item['element'];
  next: Item['next'];
  constructor(element: Item['element']) {
    this.element = element;
    this.next = null;
  }
}
class LinkedList {
  length: number = 0;
  head: Item | null = null;
  // 追加元素
  append(element: Item['element']) {
    let node = new ListNode(element);
    let current: Item;
    if (this.head === null) {
      this.head = node;
    } else {
      current = this.head;
      while(current.next) {
        current = current.next;
      }
      current.next = node;
    }
    this.length++;
  }
  // 插入元素
  insert(position: number, element: Item['element']) {}
  removeAt(position: number) {}
  remove(element: Item['element']) {}
  indexOf(element: Item['element']) {}
  isEmpty() {}
  size() {}
  getHead() {}
  toString() {}
  print() {}
}

export default LinkedList;
