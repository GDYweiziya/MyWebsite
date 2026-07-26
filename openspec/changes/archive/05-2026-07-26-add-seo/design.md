## Design

### Architecture

```
index.html (SEO 元标签)
├── <title>子雅 - 全栈工程师 | 个人品牌站</title>
├── <meta name="description" />
├── Open Graph 标签
├── Twitter Card 标签
└── canonical link

public/robots.txt (爬虫规则)
├── User-agent: *
├── Allow: /
└── Sitemap: (预留)

src/App.tsx (语义化优化)
├── <header> - Navigation
├── <main> - 主内容区
├── <section> - 各区域
└── <footer> - 页脚（如需要）
```

### Meta Tags

**基础标签:**
- title: "子雅 - 全栈工程师 | 个人品牌站"
- description: "子雅的个人品牌站，全栈工程师，专注于打造优雅的用户体验。展示技术项目和个人作品。"
- lang: "zh-CN"
- charset: "UTF-8"
- viewport: "width=device-width, initial-scale=1.0"

**Open Graph 标签:**
- og:title
- og:description
- og:type
- og:url
- og:image

**Twitter Card 标签:**
- twitter:card
- twitter:title
- twitter:description
- twitter:image

### robots.txt

```
User-agent: *
Allow: /
Disallow: /dist/
Disallow: /node_modules/

User-agent: Googlebot
Allow: /

Sitemap: https://example.com/sitemap.xml
```

### 语义化 HTML

| 组件 | 语义化标签 |
|------|------------|
| Navigation | `<header>` |
| HeroSection | `<section id="hero">` |
| ProjectSection | `<section id="projects">` |
| AboutSection | `<section id="about">` |
| Footer | `<footer>` (如需要) |

### Error Handling

- robots.txt 不存在时返回 404
- 图片 URL 为空时不渲染 og:image 标签

## Risks and Mitigations

| Risk | Mitigation |
|------|------------|
| 元标签过长 | 限制 title 在 60 字符内，description 在 160 字符内 |
| 图片加载慢 | 使用 CDN 图片或压缩图片 |
| 爬虫被禁止 | 在 robots.txt 中明确 Allow 规则 |