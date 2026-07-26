## Why

当前网站缺少项目展示区域，用户无法了解我的技术能力和作品集。添加项目展示区可以展示我的技术成果，增强个人品牌形象。同时需要修改 Hero Section 的 CTA 按钮，使其跳转到项目展示区。

## What Changes

- 创建项目展示区组件，显示在 Hero Section 下方
- 卡片式布局，每个项目卡片包含：项目截图、名称、简介、GitHub 链接
- 最少展示 4 个项目
- 添加鼠标悬浮微特效
- 修改 Hero Section 的 CTA 按钮锚点，跳转到项目展示区

## Capabilities

### New Capabilities

- `project-section`: 项目展示区组件，展示个人项目作品集

### Modified Capabilities

- `hero-section`: 修改 CTA 按钮行为，跳转到项目展示区

## Out-of-Scope（不做什么）

- 不做项目详情页
- 不做项目搜索功能
- 不做项目分类筛选
- 不做项目排序功能

## Impact

- 修改 `src/components/HeroSection.tsx` - 更新 CTA 按钮锚点
- 新建 `src/components/ProjectSection.tsx` - 项目展示区组件
- 更新 `src/App.tsx` - 添加 ProjectSection 组件