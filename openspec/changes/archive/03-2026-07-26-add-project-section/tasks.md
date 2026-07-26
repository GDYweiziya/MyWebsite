# Tasks for add-project-section

## Phase 1: 创建项目卡片组件

### Task 1.1 创建 ProjectCard 组件
- 文件: `src/components/ProjectCard.tsx`
- 实现: 卡片式设计，包含截图、名称、简介、GitHub 链接
- 添加鼠标悬浮微特效

## Phase 2: 创建项目展示区组件

### Task 2.1 创建 ProjectSection 组件
- 文件: `src/components/ProjectSection.tsx`
- 实现: 网格布局，渲染多个 ProjectCard
- 硬编码 4 个项目数据

### Task 2.2 添加响应式布局
- 桌面端: 4 列
- 平板端: 2 列
- 移动端: 1 列

## Phase 3: 修改 Hero Section CTA 按钮

### Task 3.1 更新 HeroSection.tsx
- 将 CTA 按钮添加点击事件
- 跳转到项目展示区 (#projects)

## Phase 4: 集成到 App.tsx

### Task 4.1 更新 App.tsx
- 在 HeroSection 之后添加 ProjectSection 组件