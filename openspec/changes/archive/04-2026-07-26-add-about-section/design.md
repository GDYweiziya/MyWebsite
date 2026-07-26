## Design

### Architecture

```
App.tsx
├── Navigation (固定顶部)
├── HeroSection
├── ProjectSection
├── AboutSection (新增)
│   ├── Photo (左侧)
│   ├── Bio (右侧，3段文字)
│   └── Brand Badge (下方，GEDI)
└── ...其他 sections
```

### Components

**AboutSection** (`src/components/AboutSection.tsx`)
- Section ID: `about`
- 显示在 ProjectSection 下方
- 左右布局：左侧照片，右侧简介
- 下方显示品牌标签 GEDI

### Layout

- 桌面端：左侧照片（40%宽度）+ 右侧简介（60%宽度）
- 移动端：照片在上，简介在下，堆叠布局
- 品牌标签 GEDI 显示在底部居中

### Styling

- 使用 Tailwind CSS v4
- 照片：圆角、边框、阴影
- 简介：3段文字，段落间距
- 品牌标签：大写字母、渐变背景、圆角
- 支持亮/暗模式切换

### Data

- 照片 URL（使用 AI 生成图片）
- 个人简介文字（3段）
- 品牌标签：GEDI

### Error Handling

- 照片加载失败时显示占位图
- 文字内容为空时隐藏对应段落

### Accessibility

- 照片添加 alt 属性
- 品牌标签添加 aria-label
- 支持键盘导航

## Risks and Mitigations

| Risk | Mitigation |
|------|------------|
| 照片加载慢 | 使用 lazy loading 和占位图 |
| 文字过长溢出 | 使用 max-w 和 line-clamp |
| 深色模式样式 | 使用 dark: 前缀适配 |