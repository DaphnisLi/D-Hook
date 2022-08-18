---
title: useQuery
nav:
  title: Hooks
  path: /hooks
  order: 1
group:
  title: 路由
  path: /hooks/router
  order: 1
---

```jsx | pure
<Link to={{ search: '?songTitle=最伟大的作品' }} />

interface QueryProps {
  songTitle: string
}
const search = useQuery<QueryProps>() // { songTitle: '最伟大的作品' }
```
