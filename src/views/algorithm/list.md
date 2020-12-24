# 单向链表
链表存储有序的元素集合，不同于数组，链表中的元素在内存中并不是连续的。每个元素由一个存储元素本身的节点和指向下一个元素的引用组成。
1. 1.节点组成

```typescript
interface Node {
  element: number | string;
  next: Node | null;
}
```

2. 2.创建节点
```typescript
class ListNode implements Item {
  element: Item['element'];
  next: Item['next'];
  constructor(element: Node['element']) {
    this.element = element;
    this.next = null;
  }
}
```
3. 3.创建链表
```typescript
class LinkedList {
  head: Item|null;
  length: number;
  // 追加元素
  append(element: Item['element']){}
  // 获取某个位置的元素
  getElementAt(position: number) {}
  // 插入元素
  insert(position: number, element: Item['element']){}
  // 获取某个元素的位置
  indexOf(element: Item['element']) {}
  // 删除某个位置的元素
  removeAt(position: number) {}
  // 删除某项元素
  remove(element: Item['element']) {}
  // 是否为空
  isEmpty() {}
  // 链表长度
  size() {}
  // 链表第一个元素
  getHead() {}
  // toString
  toString() {}
}
```