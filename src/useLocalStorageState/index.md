---
title: useLocalStorageState
nav:
  title: Hooks
  path: /hooks
  order: 1
group:
  title: 数据管理
  path: /hooks/data
---

数据持久化, 页面刷新后依旧可以从 localStorage 中恢复数据

注意: 每次 setState 都会更新过期时间

思考: 其实我还想加一个 remove 函数, 但是有两个问题没有找到合适的答案
- 1、执行 remove 后, state 里的数据要不要删除。
- 2、组件更新或者页面刷新后还要不要继续将 state 和 localStorage 绑定。

<code src="./__demos__/basic.tsx"></code>



# Params

| 参数            | 说明                   | 类型                           | 默认值         |
| -------------- | ---------------------- | ----------------------------- | ------------- |
| `keyName`      | localStorage 的 name   | `string`                      | 无            |
| `initialValue` | 初始值                  | `any`                         | 无            |
| `expireDate`   | 过期时间, 不传永不过期, 单位: ms       | `number`          | 无            |
