## Why

当前网站缺少引人注目的首屏 Hero 区域，用户进入网站后无法快速了解我的个人信息和职业定位。添加 Hero Section 可以提升网站的第一印象，增强品牌形象展示。

## What Changes

- 创建全屏高度的 Hero 组件，居中显示名字、职业和一句话介绍
- 实现 CSS 渐变背景配合 Canvas 粒子效果
- 添加明亮/暗黑模式切换功能
- 移除现有 App.tsx 中的简单占位内容

## Capabilities

### New Capabilities

- `hero-section`: 全屏 Hero 区域组件，包含名字、职业、介绍文字和背景效果
- `theme-toggle`: 亮/暗模式切换功能

### Modified Capabilities

- 无

## Out-of-Scope（不做什么）

- 不做动画效果
- 不做导航栏
- 不做后端 API
- 不做粒子与鼠标交互效果
- 不做视差滚动效果

## Impact

- 修改 `src/App.tsx` - 替换原有内容为 Hero Section
- 修改 `src/index.css` - 可能需要调整全局样式
- 新建 `src/components/HeroSection.tsx` - Hero 区域组件
- 新建 `src/components/ParticleBackground.tsx` - 粒子背景组件
- 新建 `src/context/ThemeContext.tsx` - 主题上下文（含 useTheme Hook）