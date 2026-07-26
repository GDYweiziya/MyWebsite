# Navigation Spec

## Overview

导航栏组件，固定在页面顶部，提供品牌标识和导航链接。

## ADDED Requirements

### 1. 固定定位

#### Scenario: 页面加载后导航栏固定在顶部
- **Given** 用户进入网站
- **When** 页面加载完成
- **Then** 导航栏固定在页面顶部

### 2. 品牌标识

#### Scenario: 导航栏左侧显示品牌名
- **Given** 导航栏已显示
- **When** 用户查看导航栏左侧
- **Then** 显示名字 "子雅"

### 3. 导航链接

#### Scenario: 导航栏右侧显示三个链接
- **Given** 导航栏已显示
- **When** 用户查看导航栏右侧
- **Then** 显示三个链接: 首页、项目、联系我

### 4. 平滑滚动

#### Scenario: 目标 section 存在时平滑滚动
- **Given** 用户点击导航链接
- **When** 目标 section 存在
- **Then** 页面平滑滚动到对应 section

#### Scenario: 目标 section 不存在时不滚动
- **Given** 用户点击导航链接
- **When** 目标 section 不存在
- **Then** 不执行滚动操作

### 5. 背景模糊效果

#### Scenario: 导航栏具有玻璃态效果
- **Given** 导航栏已显示
- **When** 用户查看导航栏样式
- **Then** 导航栏具有背景模糊效果

### 6. 主题适配

#### Scenario: 亮模式下导航栏样式
- **Given** 用户在亮模式下
- **When** 查看导航栏
- **Then** 导航栏使用浅色背景和深色文字

#### Scenario: 暗模式下导航栏样式
- **Given** 用户在暗模式下
- **When** 查看导航栏
- **Then** 导航栏使用深色背景和浅色文字

### 7. 响应式设计

#### Scenario: 桌面端显示所有导航链接
- **Given** 用户在桌面端
- **When** 查看导航栏
- **Then** 显示所有导航链接

#### Scenario: 移动端自适应屏幕宽度
- **Given** 用户在移动端
- **When** 查看导航栏
- **Then** 导航栏自适应屏幕宽度