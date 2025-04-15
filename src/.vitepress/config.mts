import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "康师傅前端面馆",
  description: "专职前端开发，精通Javascript，Css，Html，React，Vue",
  themeConfig: {
    docFooter: {
      prev: '上一篇',
      next: '下一篇'
    },
    nav: [
      { text: '首页', link: '/' },
      { text: 'CSS', link: '/css' },
      // { text: 'JS/TS', link: '/js' },
    ],

    sidebar: {
      "/css/": {
        text: 'CSS基础教程',
        base: '/css/',
        items: [
          { text: '选择器', link: '选择器' },
          { text: '属性介绍及分类', link: '属性介绍及分类' },
          { text: '值与单位', link: '值与单位' },
          { text: '盒模型详解', link: '盒模型详解' },
          { text: '布局', link: 'CSS布局教程' },
          { text: '动画', link: '动画' },
          { text: '变量', link: 'CSS变量' },
          { text: '优先级', link: '优先级' },
          { text: '选择器查找算法', link: 'CSS选择器查找算法' },
          { text: '性能优化', link: 'CSS性能优化' },
        ]
      },
      // "/js/": {
      //   text: 'JS/TS基础教程',
      //   base: '/js/',
      //   items: [
      //     { text: '动画', link: '动画' },
      //   ]
      // }
    },
    outline: {
      label: '大纲'
    },

    socialLinks: [
      { icon: 'github', link: 'https://kanghz.github.io/' }
    ]
  },
  cleanUrls: true,
})
