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
      // 想取dp(n)的最小值(coins[i] + (n-coins[i]) == n)，可以取dp(n - coins[i])的最小值 + 1
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

### 排队取最小移动次数
> 给定一数组，获取排序后的最小移动次数
> 输入 [1,1,4,2,1,3] 获取排序后的最小移动次数
1. 暴力排序
```javascript
function heightChecker(heights) {
  let n = 0;
  if (heights.length <= 0) {
    return -1;
  }
  if (heights.length === 1) {
    return 0;
  }
  const list = Array.from(heights);
  for (let i = 0; i < list.length; i++) {
    for (let j = i + 1; j < list.length; j++) {
      if (list[j] < list[i]) {
        list[i] = list[i] + list[j];
        list[j] = list[i] - list[j];
        list[i] = list[i] - list[j];
      }
    }
  }
  for (let k = 0; k < list.length; k++) {
    if (heights[k] !== list[k]) {
      n++;
    }
  }
  return n;
}
```

### 同构字符串
> 给定两个字符串 s 和 t, 判断它们是否是同构的
> 如果 s 中的字符可以被替换得到 t ， 那么这两个字符串是同构的。所有出现的字符都必须用另一个字符替换，同时保留字符的顺序。两个字符不能映射到同一个字符上，但字符可以映射自己本身

```javascript
function isIsomorphic(s, t) {
  const mapS = {};
  const mapT = {};
  for (let i in s) {
    let valueS = s[i];
    let valueT = t[i];
    if (!mapS[valueS]) {
      mapS[valueS] = valueT;
    } else if (mapS[valueS] != valueT) {
      return false;
    }
    if (!mapT[valueT]) {
      mapT[valueT] = valueS;
    } else if (mapT[valueT] != valueS) {
      return false;
    }
  }
  return true;
}

console.log(isIsomorphic('addsd', 'eggag')); // truetrue
console.log(isIsomorphic('foo', 'bar'));  // false
console.log(isIsomorphic('paper', 'title')); // true
```