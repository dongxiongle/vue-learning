import { parsePath } from '../../utils/index';
import Dep, { pushTarget, popTarget } from './dep';
export default class Watcher {
  vm: any;
  cb: Function;
  getter: Function;
  value: any;
  id!: number;
  constructor(vm: any, expOrFn: any, cb: Function) {
    this.vm = vm;
    this.cb = cb;
    this.getter = parsePath(expOrFn);
    this.value = this.getter();
  }
  get() {
    pushTarget(this);
    const vm = this.vm;
    let value = this.getter.call(vm, vm);
  }
}