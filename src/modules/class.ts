import {VNode, VNodeData} from '../vnode';
import {Module} from './module';

export type Classed = Record<string, boolean>;

function updateClass(oldVnode: VNode, vnode: VNode): void {
  var cur: any;
  var name: string;
  var elm: Element = vnode.elm as Element;
  var oldClass = (oldVnode.data as VNodeData).class;
  var kclass = (vnode.data as VNodeData).class;
  
  if (!oldClass && !kclass) {
    return;
  }
  if (oldClass === kclass) {
    return;
  }
  oldClass = oldClass || {};
  kclass = kclass || {};

  for (name in oldClass) {
    if (!kclass[name]) {
      elm.classList.remove(name);
    }
  }
  for (name in kclass) {
    cur = kclass[name];
    if (cur !== oldClass[name]) {
      (elm.classList as any)[cur ? 'add' : 'remove'](name);
    }
  }
}

export const classModule = {
  create: updateClass,
  update: updateClass
} as Module;