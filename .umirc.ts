// config: https://d.umijs.org/config

import { defineConfig } from 'dumi'

const logo = 'https://common-1305245006.cos.ap-shanghai.myqcloud.com/orange.png'

export default defineConfig({
  title: 'D-Hook',
  favicon: logo,
  logo,
  outputPath: 'docs',
  mode: 'site',
  navs: [
    null,
    { title: '源码', path: 'https://github.com/DaphnisLi/D-Hook.git' }
  ],
  mfsu: {},
  hash: true,
});
