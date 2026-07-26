# About Section Specification

## Purpose
TBD - created by archiving change add-about-section. Update Purpose after archive.

## Requirements

### Requirement: 关于我区域位置

The system SHALL display the About Section below the Project Section.

#### Scenario: 页面加载后关于我区域显示在项目区下方
- **WHEN** 用户访问网站首页
- **THEN** "关于我"区域应显示在 Project Section 下方

### Requirement: 左侧照片展示

The system SHALL display a photo on the left side of the About Section.

#### Scenario: 照片显示在左侧
- **WHEN** 用户查看"关于我"区域
- **THEN** 个人照片应显示在左侧

#### Scenario: 照片响应式调整
- **WHEN** 在小屏幕设备上查看
- **THEN** 照片应显示在简介上方

### Requirement: 右侧个人简介

The system SHALL display a personal bio with 3 paragraphs on the right side.

#### Scenario: 显示3段简介文字
- **WHEN** 用户查看"关于我"区域
- **THEN** 右侧应显示3段个人简介文字

#### Scenario: 文字可读性
- **WHEN** 在亮/暗模式下查看
- **THEN** 文字应保持清晰可读

### Requirement: 品牌标签 GEDI

The system SHALL display the brand badge "GEDI" below the photo and bio.

#### Scenario: 品牌标签显示在底部
- **WHEN** 用户查看"关于我"区域
- **THEN** 品牌标签 GEDI 应显示在照片和简介下方

#### Scenario: 品牌标签样式
- **WHEN** 用户查看品牌标签
- **THEN** 标签应为大写字母，带有渐变背景效果

### Requirement: 主题适配

The system SHALL adapt the About Section style based on the current theme.

#### Scenario: 亮模式下关于我区域样式
- **WHEN** 用户在亮模式下查看关于我区域
- **THEN** 背景和文字应使用浅色配色

#### Scenario: 暗模式下关于我区域样式
- **WHEN** 用户在暗模式下查看关于我区域
- **THEN** 背景和文字应使用深色配色

### Requirement: 响应式布局

The system SHALL provide responsive layout for different screen sizes.

#### Scenario: 桌面端左右布局
- **WHEN** 用户在桌面端查看
- **THEN** 照片在左，简介在右

#### Scenario: 移动端堆叠布局
- **WHEN** 用户在移动端查看
- **THEN** 照片在上，简介在下