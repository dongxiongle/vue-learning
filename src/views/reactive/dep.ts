import { def, remove } from '@/utils';
import Watcher from './watch';

let uid = 0;
export default class Dep {
  target?: Watcher | null;
  subs: Array<any>;
  id: number;
  constructor() {
    this.target = null;
    this.id = uid++;
    this.subs = [];
  }
  addSub(sub: Watcher) {
    this.subs.push(sub);
  }
  removeSub(sub: Watcher) {
    remove(this.subs, sub);
  }
  depend() {
    if(Dep.target) {
      this.addSub(Dep.target);
    }
  }
  notify() {
    const subs = this.subs.slice();
    for(let i = 0, l = subs.length; i < l; i++) {
      subs[i].update()
    }
  }
}

Dep.target = null;
const targetStack: Array<any> = [];
export function pushTarget(target?: Watcher) {
  targetStack.push(target);
  Dep.target = target;
}

export function popTarget() {
  targetStack.pop();
  Dep.target = targetStack[targetStack.length - 1];
}