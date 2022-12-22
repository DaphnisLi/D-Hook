---
title: useObject
nav:
  title: Hooks
  path: /hooks
  order: 1
group:
  title: 数据管理
  path: /hooks/data
---

useState 推崇原子化的状态管理, 如果给其传入一个对象, 在只修改对象中一个属性的情况下, 需要手动聚合其他属性

useObject 和 this.setState 类似, 可以自动聚合对象的其他属性
<code src="./__demos__/basic.tsx"></code>

