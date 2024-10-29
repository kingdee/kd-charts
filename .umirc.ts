import { defineConfig } from 'dumi';

export default defineConfig({
  title: '可视化中心',
  favicon: 'https://www.kingdee.design/theme/favicon.ico',
  logo: 'https://kui.kingdee.com/assets/image/logo/charts.png',
  outputPath: 'docs-dist',
  publicPath: '/',
  // base: '/charts/',
  dynamicImport: {
    loading: '@/Loading',
  },
  chunks: ['vendors', 'umi'],
  chainWebpack: function(config, { webpack }) {
    config.merge({
      optimization: {
        splitChunks: {
          chunks: 'all',
          minSize: 30000,
          minChunks: 3,
          automaticNameDelimiter: '.',
          cacheGroups: {
            vendor: {
              name: 'vendors',
              test({ resource }: any) {
                return /[\\/]node_modules[\\/]/.test(resource);
              },
              priority: 10,
            },
          },
        },
      },
    });
  },

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
