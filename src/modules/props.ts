import { VNode, VNodeData } from '../vnode';

export type Props = Record<string, any>;

function updateProps(oldVnode: VNode, vNode: VNode): void {
  var key: string;
  var cur: any;
  var old: any;
  var elm = vNode.elm;
}

export const propsModule = { create: updateProps, update: updateProps } as Module;

export default propsModule;