import { def } from '../../utils/index';
import Dep from './dep';
import Def from './dep';

export class Observer {
  public value;
  constructor(value: any) {
    this.value = value;
    def(value, '__ob__', this);
    if(Array.isArray(value)) {
      console.log(value);
    } else {
      this.walk(value);
    }
  }
  walk(obj: Object) {
    const keys = Object.keys(obj);
    for(let i = 0; i < keys.length; i++) {
      defineReactive(obj, keys[i]);
    }
  }
}

function defineReactive(obj: Record<string, any>, key: string, val?: any) {
  if(arguments.length === 2) {
    val = obj[key];
  }
  if(typeof val === 'object') {
    new Observer(val);
  }
  const dep = new Dep();
  Object.defineProperty(obj, key, {
    enumerable: true,
    configurable: true,
    get() {
      console.log(`${key}被获取了`);
      dep.depend();
      return val;
    },
    set(newVal) {
      if (val == newVal) {
        return;
      }
      console.log(`${key}被重新赋值了`);
      val = newVal;
      dep.notify();
    }
  })
}