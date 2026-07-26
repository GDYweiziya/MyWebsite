# Tasks for add-navigation

## Phase 1: 创建平滑滚动 Hook

### Task 1.1 创建 useSmoothScroll Hook
- 文件: `src/hooks/useSmoothScroll.ts`
- 实现: 接收 section ID，调用 scrollIntoView 实现平滑滚动
- 处理边界情况: section 不存在时不执行滚动

## Phase 2: 创建导航栏组件

### Task 2.1 创建 Navigation 组件
- 文件: `src/components/Navigation.tsx`
- 实现: 固定定位在顶部，左侧显示名字，右侧显示导航链接

### Task 2.2 添加背景模糊效果
- 使用 Tailwind 的 backdrop-blur-md
- 亮模式: bg-white/80
- 暗模式: bg-slate-900/80

### Task 2.3 实现导航链接点击事件
- 绑定点击事件到 useSmoothScroll
- 导航链接: 首页(#hero), 项目(#projects), 联系我(#contact)

### Task 2.4 添加主题适配
- 使用 useTheme Hook
- 根据主题切换导航栏样式

## Phase 3: 集成到 App.tsx

### Task 3.1 更新 App.tsx
- 在 HeroSection 之前添加 Navigation 组件
- 添加 body padding-top 避免内容被遮挡

### Task 3.2 更新 index.css
- 添加导航栏高度对应的 body padding
- 确保平滑滚动行为