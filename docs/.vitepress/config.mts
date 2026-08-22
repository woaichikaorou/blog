import { defineConfig } from 'vitepress'

// https://vitepress.dev/zh/reference/site-config
export default defineConfig({
  title: "我爱吃烤肉",
  description: "我爱吃烤肉的博客",
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
  ],
  themeConfig: {
    // https://vitepress.dev/zh/reference/default-theme-config
    nav: [
      { text: '首页', link: '/' },
      { text: '碎碎念', link: '/blog/2025/2025-07-01-nihao-woaichikaorou' },
      {
        text: '编程',
        items: [
          {
            text: '开发工具',
            items: [
              { text: 'IntelliJ IDEA', link: '/biancheng/intellij-idea/01-changyongshezhi' },
              { text: 'Visual Studio Code', link: '/biancheng/vs-code/01-changyongshezhi' }
            ]
          },
          {
            text: '环境安装',
            items: [
              { text: 'Java', link: '...' },
              { text: 'Python', link: '...' }
            ]
          }
        ]
      },
      {
        text: '钓鱼',
        items: [
          { text: '敬请期待', link: '...' },
        ]
      },
      {
        text: '投资',
        items: [
          { text: '敬请期待', link: '...' },
        ]
      },
      { text: '关于我', link: '/......' }
    ],

    sidebar: [
      {
        text: '我的碎碎念',
        items: [
          { text: '你好，我爱吃火锅', link: '/blog/2025/2025-07-01-nihao-woaichikaorou' },
          { text: '一切重新开始【202601】', link: '/blog/2026/2026-01-monthly-records.md' },
          { text: '春节变了【202602】', link: '/blog/2026/2026-02-monthly-records.md' },
          { text: '休息最重要【202603】', link: '/blog/2026/2026-03-monthly-records.md' },
          { text: '又是忙碌的一个月【202604】', link: '/blog/2026/2026-04-monthly-records.md' },
          { text: '忙【202605】', link: '/blog/2026/2026-05-monthly-records.md' },
          { text: '恭喜纽约【202606】', link: '/blog/2026/2026-06-monthly-records.md' },
          { text: '累【202607】', link: '/blog/2026/2026-07-monthly-records.md' },
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/woaichikaorou' }
    ],

    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2019-present woaichikaorou'
    }
  }
})
