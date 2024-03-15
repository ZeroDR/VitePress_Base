import { defineConfig } from 'vitepress'
import { mdPlugin } from './config/plugins'
export default defineConfig({
  title: 'DozoUIPlus基础组件文档',
  description: '基于Element-plus基础组件封装使用',
  lang: 'cn-ZH',
  base: '/Dozo-ui-plus/',
  lastUpdated: true,
  themeConfig: {
    logo: '/publis/logo.svg',
    siteTitle: 'DozoUIPlus基础组件文档',
    outline: 3,
    nav: [
      {
        text: '介绍',
        link: '/components/',
      },
      { text: '基础组件', link: '/components/DZSelect/base.md' },
      {
        text: 'Gitee码云地址',
        link: 'https://gitee.com/wocwin/t-ui-plus',
      },
      // {
      //   text: '博客',
      //   items: [
      //     { text: 'CSDN', link: 'https://blog.csdn.net/cwin8951' },
      //     {
      //       text: '掘金',
      //       link: 'https://juejin.cn/user/888061128344087/posts',
      //     },
      //   ],
      // },
    ],
    sidebar: {
      '/components': [
        {
          text: '常用组件',
          items: [
            { text: '下拉选择组件', link: '/components/DZSelect/base.md' },
            // { text: '详情组件', link: '/components/TDetail/base.md' },
            // { text: 'Button组件', link: '/components/TButton/base.md' },
            // { text: 'Radio组件', link: '/components/TRadio/base.md' },
            // { text: '多选框组组件', link: '/components/TCheckbox/base.md' },
            // { text: '日期组件', link: '/components/TDatePicker/base.md' },
            // { text: 'Tabs组件', link: '/components/TTabs/base.md' },
            // { text: '步骤组件', link: '/components/TStepWizard/base.md' },
            // { text: '地图坐标选择组件', link: '/components/TMap/base.md' },
          ],
        },
        {
          text: '复杂组件',
          items: [
            { text: 'Chart图表组件', link: '/components/DZCharts/base.md' },
            // {
            //   text: '下拉选择表格组件',
            //   link: '/components/TSelectTable/base.md',
            // },
            // {
            //   text: 'TAdaptivePage组件',
            //   link: '/components/TAdaptivePage/base.md',
            // },
            // {
            //   text: '条件查询组件',
            //   link: '/components/TQueryCondition/base.md',
            // },
            // { text: '表单组件', link: '/components/TForm/base.md' },
            // { text: '模块表单组件', link: '/components/TModuleForm/base.md' },
            // { text: 'table组件', link: '/components/TTable/base.md' },
          ],
        },
      ],
    },
  },
  markdown: {
    headers: {
      level: [0, 0],
    },
    // light: #f9fafb, dark: --vp-code-block-bg
    theme: { light: 'github-light', dark: 'github-light' },
    config: (md) => mdPlugin(md),
  },
})