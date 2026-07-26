## Context

当前网站只有简单的占位内容，缺少专业的首屏 Hero 区域。需要创建一个视觉吸引力强的 Hero Section，包含个人信息展示和科技感背景效果，同时支持亮/暗模式切换。

## Goals / Non-Goals

**Goals:**
- 创建全屏高度的 Hero Section，居中展示名字、职业和介绍
- 实现 CSS 渐变背景 + Canvas 粒子效果
- 支持亮/暗模式切换，主题状态持久化到 localStorage
- 确保文字在动态背景上的可读性
- 保持首屏加载 < 2 秒

**Non-Goals:**
- 不做复杂动画效果
- 不做导航栏
- 不做后端 API
- 不做粒子与鼠标交互
- 不做视差滚动

## Decisions

### 1. 粒子背景实现方式

**选择**: 自定义 Canvas 实现

**理由**: 
- Bundle Size: 自写 Canvas 代码约 5KB，远小于 tsparticles (100KB+)
- 性能: 直接操作 Canvas API，避免第三方库的额外开销
- 可控性: 完全自定义粒子行为，便于适配亮/暗模式

**替代方案**:
- tsparticles: 功能丰富但体积过大，影响首屏加载
- CSS-only: 无法实现真正的粒子效果，视觉效果有限

### 2. 主题状态管理

**选择**: React Context + localStorage

**理由**:
- 简单直接，适合轻量级主题切换
- localStorage 持久化主题偏好，刷新后保持用户选择
- Context 提供全局访问，便于未来扩展

### 3. 文字可读性保证

**选择**: 半透明遮罩层 + text-shadow

**理由**:
- 动态渐变背景颜色变化大，文字需要固定的可读性保障
- 半透明遮罩在文字区域提供稳定的背景
- text-shadow 增强文字对比度

### 4. 响应式设计

**选择**: Tailwind CSS 响应式断点

**理由**:
- 项目已使用 Tailwind CSS v4
- 统一的响应式断点，保持代码一致性
- 在小屏幕上降低粒子数量和密度

## Risks / Trade-offs

[Risk] Canvas 初始化前可能出现背景闪烁 → Mitigation: 设置初始背景色，确保 Canvas 加载前有过渡效果

[Risk] 低性能设备上粒子动画可能卡顿 → Mitigation: 根据设备性能动态调整粒子数量，支持 prefers-reduced-motion

[Risk] localStorage 不可用时主题状态丢失 → Mitigation: 降级到系统主题检测作为默认值