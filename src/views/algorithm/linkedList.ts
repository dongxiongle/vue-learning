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
  removeAt(position: number) {
    // 越界检测
    if (position < 0 || position >= this.length) {
      return Error('越界了');
    }
    if (this.length === 0) {
      return null;
    }
    let current = this.head as Item;
    let previous: Item = current;
    let index = 0;
    if (position === 0) {
      this.head = current.next;
    } else {
      while(index++ < position) {
        previous = current;
        current = current.next as Item;
      }
      previous.next = current.next;
    }
    this.length--;
    return current.element;
  }
  remove(element: Item['element']) {}
  indexOf(element: Item['element']) {}
  isEmpty() {}
  size() {}
  getHead() {}
  toString() {}
  print() {}
}

export default LinkedList;
