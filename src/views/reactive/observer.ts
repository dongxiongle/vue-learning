function defineReactive(obj, key: string, val?: any) {
  if (arguments.length === 2) {
    val = obj[key];
  }
  if (typeof val === 'object') {
    new Observer(val);
  }
  Object.defineProperty(obj, key {
    enumerable: true,
    configurable: true,
    get() {
      console.log(`${key}被读取了`);
      return val;
    },
    set(newVal) {
      if (val = newVal) {
        return;
      }
      console.log(`${key}被修改了`);
      val = newVal;
    }
  });
}
export class Observer {
  constructor(value: any) {
    this.value = value;
    def(val, '__ob__', this);
    if (Array.isArray(value)) {
      console.log(value);
    } else {
      this.walk(value);
    }
  }
  walk(obj: Object) {
    const keys = Object.keys(obj);
    for (let i = 0; i < keys.length; i++) {
      defineReactive(obj, keys[i]);
    }
  }
}