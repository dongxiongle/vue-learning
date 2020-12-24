export interface Item {
  element: string | number;
  next: null | Item
}
export class ListNode implements Item {
  element: Item['element'];
  next: Item['next'];
  constructor(element: Item['element']) {
    this.element = element;
    this.next = null;
  }
}
export class LinkedList {
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
  // 获取某个位置
  getElementAt(position:number) {
    if (position >= 0 && position <= this.length) {
      let node = this.head as Item;
      let i = 0;
      while(i++ < position) {
        node = node.next as Item
      }
      return node;
    }
    return undefined;
  }
  // 插入元素
  insert(position: number, element: Item['element']) {
    if (position >= 0 && position <= this.length) {
      const node = new ListNode(element);
      let current = this.head;
      if (position === 0) {
        const current = this.head;
        node.next = current;
        this.head = node;
      } else {
        const previous = this.getElementAt(position - 1) as Item;
        const current = previous.next;
        node.next = current;
        previous.next = node;
      }
      this.length++;
      return true;
    }
    return false;
  }
  indexOf(element: Item['element']) {
    if(this.length === 0) {
      return -1;
    }
    let current = this.head as Item;
    for(let i = 0; i < this.length; i++) {
      if(current.element === element) {
        return i;
      }
      current = current.next as Item;
    }
    return -1;
  }
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
  remove(element: Item['element']) {
    const position = this.indexOf(element);
    return this.removeAt(position);
  }
  isEmpty() {
    return this.length === 0;
  }
  size() {
    return this.length;
  }
  getHead() {
    return this.head;
  }
  toString() :string {
    if (this.head === null) {
      return '';
    }
    let str = `${this.head.element}`;
    let current = this.head.next;
    for (let i = 1; i < this.length && current !== null; i++) {
      str += `${current.element}`;
      current = current?.next;
    }
    return str;
  }
}
