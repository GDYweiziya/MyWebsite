## Why

当前网站缺少"关于我"区域，用户无法深入了解我的个人背景和技术理念。添加"关于我"区域可以增强个人品牌形象，让访客更好地认识我。

## What Changes

- 创建"关于我"区域组件，显示在 Project Section 下方
- 左侧显示个人照片
- 右侧显示个人简介（3段文字）
- 下方显示品牌标签 GEDI
- 支持亮/暗模式切换

## Capabilities

### New Capabilities

- `about-section`: "关于我"区域组件，展示个人信息

## Out-of-Scope（不做什么）

- 不做联系我的表单
- 不做社交链接列表
- 不做详细的履历时间线
- 不做技能标签云

## Impact

- 新建 `src/components/AboutSection.tsx` - "关于我"区域组件
- 更新 `src/App.tsx` - 添加 AboutSection 组件
- 更新导航栏"联系我"链接跳转到关于我区域（或新建联系区域时调整）