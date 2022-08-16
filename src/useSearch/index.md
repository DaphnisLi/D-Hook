---
title: useSearch
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

interface SearchProps {
  songTitle: string
}
const search = useSearch<SearchProps>() // { songTitle: '最伟大的作品' }
```
