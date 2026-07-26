# Project Section Specification

## Purpose
TBD - created by archiving change add-project-section. Update Purpose after archive.

## Requirements

### Requirement: 项目展示区位置

The system SHALL display the Project Section below the Hero Section.

#### Scenario: 页面加载后项目区显示在 Hero 下方
- **WHEN** 用户访问网站首页
- **THEN** 项目展示区应显示在 Hero Section 下方

### Requirement: 卡片式布局

The system SHALL display projects in a card-based grid layout.

#### Scenario: 桌面端 4 列布局
- **WHEN** 用户在桌面端查看
- **THEN** 项目卡片应按 4 列网格显示

#### Scenario: 平板端 2 列布局
- **WHEN** 用户在平板端查看
- **THEN** 项目卡片应按 2 列网格显示

#### Scenario: 移动端 1 列布局
- **WHEN** 用户在移动端查看
- **THEN** 项目卡片应按 1 列显示

### Requirement: 项目卡片内容

The system SHALL display project information on each card.

#### Scenario: 项目卡片包含截图
- **WHEN** 用户查看项目卡片
- **THEN** 卡片顶部应显示项目截图

#### Scenario: 项目卡片包含名称
- **WHEN** 用户查看项目卡片
- **THEN** 卡片应显示项目名称

#### Scenario: 项目卡片包含简介
- **WHEN** 用户查看项目卡片
- **THEN** 卡片应显示项目简介

#### Scenario: 项目卡片包含 GitHub 链接
- **WHEN** 用户查看项目卡片
- **THEN** 卡片应显示 GitHub 链接按钮

### Requirement: 最少展示 4 个项目

The system SHALL display at least 4 projects.

#### Scenario: 页面加载时显示 4 个项目
- **WHEN** 页面加载完成
- **THEN** 应显示至少 4 个项目卡片

### Requirement: 鼠标悬浮特效

The system SHALL apply hover effects when the mouse is over a project card.

#### Scenario: 鼠标悬浮时卡片上浮
- **WHEN** 用户将鼠标悬停在项目卡片上
- **THEN** 卡片应轻微上浮

#### Scenario: 鼠标悬浮时阴影加深
- **WHEN** 用户将鼠标悬停在项目卡片上
- **THEN** 卡片阴影应加深

### Requirement: Hero CTA 按钮跳转

The system SHALL make the Hero Section CTA button scroll to the Project Section.

#### Scenario: 点击 CTA 按钮跳转到项目区
- **WHEN** 用户点击 Hero Section 的"查看我的项目"按钮
- **THEN** 页面应平滑滚动到项目展示区

### Requirement: 主题适配

The system SHALL adapt the Project Section style based on the current theme.

#### Scenario: 亮模式下项目区样式
- **WHEN** 用户在亮模式下查看项目区
- **THEN** 卡片应使用浅色背景

#### Scenario: 暗模式下项目区样式
- **WHEN** 用户在暗模式下查看项目区
- **THEN** 卡片应使用深色背景