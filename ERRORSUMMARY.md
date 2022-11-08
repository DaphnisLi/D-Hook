# 踩坑总结



## Build
1、打包出 xxx.d.ts 需要 typings.d.ts
2、在模块化之外不能用 ESM, 比如 release.js 要用 CJS。之前在做 cli 的时候因为要用 ts build, 所以还是在模块化中写的 node。但要注意 depend 的版本, 因为版本太高就只会支持 ESM


## Command Line
1、Permission denied 对某一个文件没有权限, 有两个[解决办法](https://zhuanlan.zhihu.com/p/95148639)
  - chmod a+x ./文件名  ———— 针对单一文件
  - sudo chmod -R 777 目录路径  ———— 针对整个目录
注意: 此方法在 git 看来是改变文件的表现, 但如果用 git 放弃修改, 那么权限会被去掉, 所以只能提交



## CI/CD
1、vercel 对 github 组织的仓库要收费



## antd
1、antd 样式要 import, 但是此项目没有 HostRootFiber, 所以不得不放在 global.less 应用到全局
2、antd 4 依赖 react 16, 所以本项目也需一致


## npm
1、peerDependencies 可以避免重复 install 同一个基础包而导致版本不一，但需注意，宿主环境的版本要大于等于此项目依赖的版本
2、为了防止依赖冗余，package-lock.json 绝对不能发布到 npm 包，因为 npm install 的安装机制是扁平的并且 package-lock.json 会锁定依赖版本。如果宿主环境的依赖和 npm 包依赖重复并且版本不一致，就会造成依赖冗余（一个依赖，两个版本）


## package.json
#### NPM 包入口优先级
webpack + 浏览器环境: browser > module > main
webpack + node 环境: module > main
只是 node 环境: main
如果这三个字段都没有, 那么默认入口文件为包根目录的 index.js 文件
https://juejin.cn/post/6844903862977953806

## 构建
1、tree sharking 要搭配 sideEffects 才能完美发挥其能力, 不然 webpack 会将那些认为有副作用的代码保留
副作用：比如修改了全局属性等

2、peerDependencies 要搭配 external、globals, 因为 peerDependencies 只是一个标记, 告诉宿主环境我需要的依赖版本。external、globals 是告诉 rollup, 不打包指定依赖, 并且使用全局依赖。我觉得全局依赖有两种情况, 1、宿主环境中的依赖。2、如果宿主环境没有这个依赖, 就去获取真正的全局依赖。但如果都没有, 就要报错了。其实一般这种经过 rollup 打包后的文件都是在线上通过 cnd 来引入, 所以 global（其实就是 this） 应该是 window 对象。在控制台输入 window.React 就可以打印出 React export 出来的东西。
