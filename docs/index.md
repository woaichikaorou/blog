---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: 欢迎来到我的博客  # name?: string  `text` 上方的字符，带有品牌颜色，预计简短，例如产品名称
#  text: "A VitePress Site"  # text: string  hero 部分的主要文字，被定义为 `h1` 标签
  tagline: 富在术数，不在劳身；利在局势，不在力耕。  # tagline?: string  `text` 下方的标语
#  image:  # image?: ThemeableImage  text 和 tagline 区域旁的图片
#    src:  # string
#    light:  # string
#    dark:  # string
#    alt: VitePress
  actions:  # actions?: HeroAction[]  主页 hero 部分的操作按钮
#    - theme?: 'brand' | 'alt'  按钮的颜色主题，默认为 `brand`
#      text: string  按钮的标签
#      link: string  按钮的目标链接
#      target?: string  链接的 target 属性
#      rel?: string  链接的 rel 属性
    - theme: brand  # theme?: 'brand' | 'alt'  按钮的颜色主题，默认为 `brand`
      text: 你好，我爱吃烤肉  # text: string  按钮的标签
      link: /2025/2025-07-01-hello-woaichikaorou  # link: string  按钮的目标链接

features:
#  - icon?: FeatureIcon  # 在每个 feature 框中显示图标
#      src: 
#      light: 
#      dark: 
#      alt?: string
#      width?: string
#      height: string
#    title: string  # feature 的标题
#    details: string  # feature 的详情
#    link?: string  # 点击 feature 组件时的链接，可以是内部链接，也可以是外部链接。例如 `guide/reference/default-theme-home-page` 或 `https://example.com`
#    linkText?: string  # feature 组件内显示的链接文本，最好与 `link` 选项一起使用。例如 `Learn more`, `Visit page` 等
#    rel?: string  # `link` 选项的链接 rel 属性。例如 `external`
#    target?: string # `link` 选项的链接 target 属性
  - icon: 🛠️
    title: 修身
    details: 描述1
  - icon: 📖
    title: 齐家
    details: 描述2
  - icon: 📘
    title: 治国
    details: 描述3
  - icon: 💡
    title: 平天下
    details: 描述4

---

