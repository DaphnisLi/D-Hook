---
title: usePrevious
nav:
  title: Hooks
  path: /hooks
  order: 1
group:
  title: 数据管理
  path: /hooks/data
---

原理: 当给 usePrevious 传入一个 value 后, 会在 useEffect 里将其值保留在 useRef 中, 然后会 return ref.current。而且 useEffect 的回调函数是一个宏任务, 这样就会导致 ref.current 还没有被赋予新的值, 就被 return。


useEffect 的回调函数为什么是宏任务 ?

useEffect 的回调函数要先在 scheduler 注册调度任务, 然后才会执行, 而 scheduler 注册调度任务的过程是一个发布订阅模式, 使用的是 MessageChannel, MessageChannel 属于宏任务

<code src="./__demos__/basic.tsx"></code>
