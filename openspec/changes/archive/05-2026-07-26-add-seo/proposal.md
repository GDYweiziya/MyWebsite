## Why

当前网站缺少SEO基础优化，搜索引擎无法有效索引网站内容，影响个人品牌的曝光度。添加SEO优化可以提升网站在搜索引擎中的排名，增加流量。

## What Changes

- 更新 HTML 的 title 和 description 标签
- 添加 Open Graph 标签（社交分享支持）
- 添加 Twitter Card 标签
- 语义化 HTML 审查和优化
- 创建 robots.txt 文件，允许 Google 爬虫索引

## Capabilities

### New Capabilities

- `seo-meta`: SEO 元标签管理
- `robots-txt`: 爬虫访问控制

## Out-of-Scope（不做什么）

- 不做 sitemap.xml
- 不做结构化数据（Schema.org）
- 不做多语言 SEO
- 不做动态路由 SEO（SSR/SSG）

## Impact

- 修改 `index.html` - 添加 SEO 元标签
- 新建 `public/robots.txt` - 爬虫访问规则
- 修改 `src/App.tsx` - 语义化 HTML 优化