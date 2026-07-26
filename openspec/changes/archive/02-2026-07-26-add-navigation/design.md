## Design

### Architecture

```
App.tsx
├── Navigation (固定顶部, z-50)
│   ├── Logo/名字 (左侧)
│   └── NavLinks (右侧: 首页, 项目, 联系我)
└── HeroSection (已有)
    └── ...其他 sections
```

### Components

**Navigation** (`src/components/Navigation.tsx`)
- 固定定位 (`fixed top-0 left-0 right-0`)
- 背景模糊效果 (`backdrop-blur-md`)
- 半透明背景 (`bg-white/80` 亮模式, `bg-slate-900/80` 暗模式)
- 左侧: 显示名字 "子雅"
- 右侧: 三个导航链接

**useSmoothScroll** (`src/hooks/useSmoothScroll.ts`)
- 自定义 Hook
- 接收目标 section ID
- 使用 `scrollIntoView` 实现平滑滚动
- 处理 section 不存在的边界情况

### Styling

- 使用 Tailwind CSS v4
- 背景模糊: `backdrop-blur-md`
- 亮模式: `bg-white/80` + `text-slate-800`
- 暗模式: `bg-slate-900/80` + `text-white`
- 链接悬停: 下划线或颜色变化

### Data

- 导航链接配置:
  - 首页 → `#hero`
  - 项目 → `#projects`
  - 联系我 → `#contact`

### Error Handling

- section ID 不存在时，不执行滚动
- 滚动过程中出现异常时，降级到普通跳转

### Accessibility

- 导航链接添加 aria-label
- 支持键盘导航
- 焦点状态可见

## Risks and Mitigations

| Risk | Mitigation |
|------|------------|
| 导航栏遮挡内容 | 在 body 添加 `pt-16` 内边距 |
| section ID 变化 | 使用常量定义 section ID |
| 平滑滚动兼容性 | 使用标准 `scrollIntoView` API |
| 移动端导航溢出 | 使用响应式布局，小屏幕隐藏部分链接 |