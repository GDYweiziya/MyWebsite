## Why

当前网站缺少导航栏，用户无法快速跳转到不同的页面区域。添加顶部导航栏可以提升网站的可导航性，让用户能够快速访问首页、项目和联系我等核心内容。

## What Changes

- 创建固定在顶部的导航栏组件
- 左侧显示个人名字（子雅）作为品牌标识
- 右侧包含导航链接：首页、项目、联系我
- 实现点击导航链接平滑滚动到对应 section
- 添加背景模糊效果（glassmorphism）
- 支持亮/暗模式适配

## Capabilities

### New Capabilities

- `navigation`: 顶部导航栏组件，包含品牌标识和导航链接
- `smooth-scroll`: 平滑滚动到页面指定 section 的功能

### Modified Capabilities

- 无

## Out-of-Scope（不做什么）

- 不做搜索功能
- 不做多级下拉菜单
- 不做用户登录和注册
- 不做移动端汉堡菜单
- 不做滚动时导航栏样式变化

## Impact

- 修改 `src/App.tsx` - 添加导航栏组件
- 新建 `src/components/Navigation.tsx` - 导航栏组件
- 新建 `src/hooks/useSmoothScroll.ts` - 平滑滚动 Hook