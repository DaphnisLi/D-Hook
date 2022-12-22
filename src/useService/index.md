---
title: useService
nav:
  title: Hooks
  path: /hooks
  order: 1
group:
  title: 请求
  path: /hooks/request
---

```js
import React from 'react';
import useService from '@daphnis/d-hook'

const [loading, res, err, forceRequest] = useService(service, params, () => false)
```

# Params

| 参数            | 说明                   | 类型                           | 默认值         |
| -------------- | ---------------------- | ----------------------------- | ------------- |
| `service`      | 请求接口                | `(params: T) => Promise<[R, CommonError]>` | 无|
| `params`       | 请求参数                | `T`                           | 无             |
| `discontinue`  | 拦截请求, 为 true 时拦截  |  `() => boolean`              |  无           |



# Result

| 参数            | 说明                   | 类型                           | 默认值         |
| -------------- | ---------------------- | ----------------------------- | ------------- |
| `loading`      | 响应 loading            | `boolean`                     | false         |
| `res`          | 响应结果                 | `R`                           | null          |
| `err`          | 响应错误信息              | `CommonError`                  | null          |
| `forceRequest` | 强制重新发起请求           | `() => void`                   | 无            |
