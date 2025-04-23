import { defineConfig } from 'vitepress'
import { sidebar } from './config/sidebar'
import { nav } from './config/nav'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "康师傅前端面馆",
  description: "专职前端开发，精通Javascript，Css，Html，React，Vue",
  themeConfig: {
    logo: '/public/logo.jpg',
    outlineTitle: '大纲',
    lastUpdated: {
      text: '更新时间',
      formatOptions: {
        dateStyle: 'short',
        timeStyle: 'short',
        hourCycle: 'h24',
      }
    },
    docFooter: {
      prev: '上一篇',
      next: '下一篇'
    },
    nav,
    sidebar,
    search: {
      provider: 'local'
    },
    socialLinks: [
      { 
        icon: 'juejin', 
        ariaLabel: '掘金',
        link: 'https://juejin.cn/user/386665047396936' 
      }
    ]
  },
  cleanUrls: true,
})
