# record 
Record<K, T> 
构造一个类型，其属性名的类型为 K，属性值的类型为 T，这个工具可用来将某个类型的属性映射到另一个类型上。

```ts
interface PageInfo {
  title: string;
}

type Page = 'home' | 'about' | 'contact';

const x: Record<Page, PageInfo> = {
  about: {title: 'about'},
  contact: {title: 'contact'},
  home: {title: 'home'}
}
```