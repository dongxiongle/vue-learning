## 斐波那契数列
### 解决方法
1. 暴力递归
```javascript
// 自顶向下
function fa(n) {
  if (n == 1 || n == 2) {
    return 1;
  }
  return fa(n - 1) + fa(n - 2);
}
```

2. 备忘录(存储状态，避免重复计算)
```javascript
// 自顶向下
function fb(n) {
  const obj = {};
  return fbb(obj, n);
}
function fbb(obj, n) {
  if (n == 1 || n == 2) {
    return 1;
  }
  if (obj[n]) {
    return obj[n];
  }
  obj[n] = fbb(obj, n - 1) + fbb(obj, n - 2);
  return obj[n];
}
```
3. 存储前两个状态
```javascript
// 自下往上
function fc(n) {
  if (n == 1 || n == 2) {
    return 1;
  }
  let pre1 = 1;
  let pre2 = 1;
  for (let i = 3; i <= n; i++) {
    const sum = pre1 + pre2;
    pre1 = pre2;
    pre2 = sum;
  }
  return pre2;
}
```

### 凑零钱
> 有 **k** 种面值的硬币，面额分别为 **c1,c2, ... c3**，每种硬币的数量无限，再给一个总金额 **amount**，问 **最少** 需要几枚硬币凑出这个金额，如果不能凑出来，返回 -1
```javascript
function coinChange(coins, n) {
  const obj = {};
  function dp(n) {
    if (n === 0) {
      return 0;
    }
    if (n < 0) {
      return -1;
    }
    if (obj[n]) {
      return obj[n];
    }
    let res = Infinity;
    const { length } = coins;
    for (let i = 0; i < length; i++) {
      subProblem = dp(n - coins[i]);
      if (subProblem == -1) {
        continue;
      }
      res = Math.min(res, 1 + subProblem);
    }
    if (res !== Infinity) {
      obj[n] = res;
    }
    return res !== Infinity ? res : -1;
  }
  return dp(n);
}
```