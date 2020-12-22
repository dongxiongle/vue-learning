## 队列
### 使用两个栈来实现一个队列
* 完成队列的 **push** 和 **pop** 操作
* 队列中的元素为 **int** 类型
```javascript
const Queue = function() {
  this.inStack = [];
  this.outStack = [];
};

Queue.prototype.appendTail = function(item) {
  this.inStack.push(item);
};
Queue.prototype.deleteHead = function() {
  const { inStack, outStack } = this;
  if (outStack.length) {
    return outStack.pop();
  } else {
    while(inStack.length) {
      outStack.push(inStack.pop());
    }
    return outStack.length ? outStack.pop() : -1;
  }
}
```

```javascript
class Queue {
  construction() {
    this.inStack = [];
    this.outStack = [];
  }
  appendTail(item) {
    this.inStack.push(item);
  }
  deleteHead() {
    const { inStack, outStack } = this;
    if (outStack.length) {
      return outStack.pop();
    } else {
      while(inStack.length) {
        outStack.push(inStack.pop());
      }
      return outStack.length ? outStack.pop() : -1;
    }
  }
}
```
### 使用两个队列实现一个栈