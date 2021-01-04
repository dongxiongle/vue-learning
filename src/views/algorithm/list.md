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

# 练习

## 输入两个单调递增的链表，输出两个链表合成后的链表，合成后的链表满足单调不减规则

### 分析
1. 1.设置一个节点**preHead**
2. 2.如果**pHead1** 和 **pHead2**, 均没遍历完：
  * 如果pHead.val <= pHead2.val, 那么当前node的next指向pHead1。并且移动pHead1指针。
  * 否则，当前 node 的next 指向 pHead2，移动 pHead2的指针
  * 移动 node 的指针
  * 继续循环
3. 3.否则，结束循环
  * 如果 pHead1 未遍历完，node 的 next 指向 pHead1
  * 如果 pHead2 未遍历完，node 的 next 指向 pHead2
时间复杂度是 O(N), 空间复杂度是O(1)

代码：
```js
const mergeTwoLists = function(pHead1, pHead2) {
  if (!pHead1) {
    return pHead2;
  } else if (!pHead2) {
    return pHead1;
  }
  let preHead = new ListNode(-1);
  let node = preHead;
  while(pHead1 && pHead2) {
    if (pHead1.value <= pHead2.value) {
      node.next = pHead1;
      pHead1 = pHead1.next;
    } else {
      node.next = pHead2;
      pHead2 = pHead2.next;
    }
    node = node.next;
  }
  if (pHead1) {
    node.next = pHead1;
  } else if(pHead2) {
    node.next = pHead2;
  }
  return preHead.next;
}
```