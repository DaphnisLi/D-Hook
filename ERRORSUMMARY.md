# 踩坑总结



## Build
### 打包出 xxx.d.ts 需要 typings.d.ts
### 在模块化之外不能用 ESM, 比如 release.js 要用 CJS。之前在做 cli 的时候因为要用 ts build, 所以还是在模块化中写的 node。但要注意 depend 的版本, 因为版本太高就只会支持 ESM


## Command Line
### Permission denied 对某一个文件没有权限, 有两个[解决办法](https://zhuanlan.zhihu.com/p/95148639)
  - chmod a+x ./文件名  ———— 针对单一文件
  - sudo chmod -R 777 目录路径  ———— 针对整个目录
注意: 此方法在 git 看来是改变文件的表现, 但如果用 git 放弃修改, 那么权限会被去掉, 所以只能提交



## CI/CD
### vercel 对 github 组织的仓库要收费



## antd
### antd 样式要 import, 但是此项目没有 HostRootFiber, 所以不得不放在 global.less 应用到全局
### antd 4 依赖 react 16, 所以本项目也需一致


## npm
### peerDependencies 可以避免重复 install 同一个基础包
