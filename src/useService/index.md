---
title: useService
nav:
  title: Hooks
  path: /hooks
  order: 1
group:
  title: 请求
  path: /hooks/request
  order: 4
---

```js
import React from 'react';
import useService from '@daphnis/d-hook'

// 参数 请求接口、接口参数、中断请求
// return loading: 是否请求完成, res: 请求结果, err: 报错信息, forceRequest: 强制重新请求
const [loading, res, err, forceRequest] = useService(fech, params, () => false
```
