import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "我爱吃烤肉",
  description: "我爱吃烤肉的博客",
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
  ],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首页', link: '/' },
      { text: '碎碎念', link: '/2025/2025-07-01-hello-woaichikaorou' },
      {
        text: 'Dropdown Menu',
        items: [
          { text: 'Item A', link: '/item-1' },
          { text: 'Item B', link: '/item-2' },
          { text: 'Item C', link: '/item-3' }
        ]
      },
      {
        text: 'Dropdown Menu',
        items: [
          {
            text: 'Dropdown Menu',
            // 也可以省略标题
            items: [
              { text: 'Section A Item A', link: '...' },
              { text: 'Section B Item B', link: '...' }
            ]
          },
          {
            text: 'Dropdown Menu',
            // 也可以省略标题
            items: [
              { text: 'Section A Item A', link: '...' },
              { text: 'Section B Item B', link: '...' }
            ]
          }
        ]
      }
    ],

    sidebar: [
      {
        text: '我的碎碎念',
        items: [
          { text: '你好，我爱吃火锅', link: '/2025/2025-07-01-hello-woaichikaorou' }
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
