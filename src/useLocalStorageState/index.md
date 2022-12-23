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

<code src="./__demos__/basic.tsx"></code>



# Params

| 参数            | 说明                   | 类型                           | 默认值         |
| -------------- | ---------------------- | ----------------------------- | ------------- |
| `keyName`      | localStorage 的 name   | `string`                      | 无            |
| `initialValue` | 初始值                  | `any`                         | 无            |
| `expireDate`   | 过期时间, 不传永不过期, 单位: ms       | `number`          | 无            |
