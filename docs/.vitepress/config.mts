import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "我爱吃烤肉的博客",
  description: "我爱吃烤肉的博客",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首页', link: '/' },
      { text: '文章', link: '/2025/2025-07-01-hello-woaichikaorou' }
    ],

    sidebar: [
      {
        text: '文章列表',
        items: [
          { text: '你好，我爱吃火锅', link: '/2025/2025-07-01-hello-woaichikaorou' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
