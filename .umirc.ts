import { defineConfig } from 'dumi';

export default defineConfig({
  title: '可视化中心',
  // favicon:
  //   'https://user-images.githubusercontent.com/9554297/83762004-a0761b00-a6a9-11ea-83b4-9c8ff721d4b8.png',
  // logo:
  //   'https://user-images.githubusercontent.com/9554297/83762004-a0761b00-a6a9-11ea-83b4-9c8ff721d4b8.png',
  outputPath: 'docs-dist',
  publicPath: '/charts/',
  base: '/charts/',
  mode: 'site',
  styles: [
    `.markdown{padding: 0 20px 30px 60px;max-width: initial !important;};`,
  ],
  // headScripts: [`https://kui.kingdee.com/static/kui-auth.js`],
  // links: [
  //   { rel: 'stylesheet', href: '/style.css' },
  // ],
  resolve: {
    includes: ['docs', 'src', 'images'],
  },
  // dynamicImport: {
  //   loading: '@/Loading',
  // },

  navs: [
    {
      title: '指南',
      path: '/tutorial',
    },
    {
      title: '组件',
      path: '/components',
    },
  ],

  menus: {
    '/tutorial': [
      {
        title: '开发指南',
        children: [
          {
            title: '快速上手',
            path: '/tutorial',
          },
          {
            title: '主题下载',
            path: '/tutorial/download',
          },
          {
            title: '所有图表',
            path: '/tutorial/overview',
          },
          {
            title: '可视化脚手架',
            path: '/tutorial/visual',
          },
          {
            title: '在 vue 中如何使用',
            path: '/tutorial/vue',
          },
        ],
      },
    ],
  },
  hash: true,
  targets: {
    ie: 11,
  },
});
