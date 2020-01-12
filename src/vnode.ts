import { Hooks } from './hooks';
import { Props } from './modules/props';

export type Key = string | number;

export interface VNodeData {
  props?: Props;
  attrs?: Attrs;
}

export interface VNode {
  sel: string | undefined;
  data: VNodeData | undefined;
  children: Array<VNode | string> | undefined;
  elm: Node | undefined;
  text: string | undefined;
  key: Key | undefined;
}

