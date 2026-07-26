## Design

### Architecture

```
App.tsx
├── Navigation (固定顶部)
├── HeroSection (已有)
├── ProjectSection (新增)
│   └── ProjectCard x 4
└── ...其他 sections
```

### Components

**ProjectSection** (`src/components/ProjectSection.tsx`)
- Section ID: `projects`
- 显示在 HeroSection 下方
- 网格布局，响应式 2-4 列
- 包含标题和描述

**ProjectCard** (`src/components/ProjectCard.tsx`)
- 卡片式设计
- 包含项目截图、名称、简介、GitHub 链接
- 鼠标悬浮时微特效（阴影加深、轻微上浮）

### Styling

- 使用 Tailwind CSS v4
- 卡片样式: 圆角、阴影、边框
- 悬浮效果: `hover:shadow-lg`, `hover:-translate-y-1`
- 响应式布局: 移动端 1 列, 平板 2 列, 桌面 4 列

### Data

- 项目数据硬编码（4个项目）
- 每个项目包含: id, name, description, imageUrl, githubUrl

### Error Handling

- 图片加载失败时显示占位图
- GitHub 链接为空时隐藏链接按钮

### Accessibility

- 项目卡片添加 aria-label
- 图片添加 alt 属性
- 支持键盘导航

## Risks and Mitigations

| Risk | Mitigation |
|------|------------|
| 图片加载慢 | 使用 lazy loading 和占位图 |
| 卡片数量变化 | 使用动态数组渲染 |
| 深色模式样式 | 使用 dark: 前缀适配 |