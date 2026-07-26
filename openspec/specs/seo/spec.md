# SEO Specification

## Purpose
TBD - created by archiving change add-seo. Update Purpose after archive.

## Requirements

### Requirement: HTML title 标签

The system SHALL set an appropriate HTML title tag.

#### Scenario: 页面加载时显示正确标题
- **WHEN** 用户访问网站首页
- **THEN** 页面标题应为"子雅 - 全栈工程师 | 个人品牌站"

#### Scenario: 标题长度限制
- **WHEN** 查看页面标题
- **THEN** 标题长度不应超过 60 个字符

### Requirement: HTML description 标签

The system SHALL set an appropriate HTML description meta tag.

#### Scenario: 页面加载时显示正确描述
- **WHEN** 用户访问网站首页
- **THEN** description 应为关于个人品牌的简要介绍

#### Scenario: 描述长度限制
- **WHEN** 查看页面描述
- **THEN** 描述长度不应超过 160 个字符

### Requirement: Open Graph 标签

The system SHALL add Open Graph meta tags for social sharing.

#### Scenario: 社交平台分享时显示预览
- **WHEN** 用户在社交平台分享网站链接
- **THEN** 应显示正确的标题、描述和缩略图

#### Scenario: Open Graph 类型设置
- **WHEN** 查看页面元数据
- **THEN** og:type 应为 "website"

### Requirement: Twitter Card 标签

The system SHALL add Twitter Card meta tags.

#### Scenario: Twitter 分享时显示卡片
- **WHEN** 用户在 Twitter 分享网站链接
- **THEN** 应显示 Twitter Card 样式的预览

#### Scenario: Twitter Card 类型
- **WHEN** 查看页面元数据
- **THEN** twitter:card 应为 "summary_large_image"

### Requirement: robots.txt 文件

The system SHALL create a robots.txt file to allow search engine indexing.

#### Scenario: Google 爬虫访问网站
- **WHEN** Google 爬虫访问网站
- **THEN** robots.txt 应允许索引所有页面

#### Scenario: 禁止爬取敏感目录
- **WHEN** 爬虫访问 /dist/ 目录
- **THEN** robots.txt 应禁止访问

### Requirement: 语义化 HTML

The system SHALL use semantic HTML tags.

#### Scenario: 使用语义化标签
- **WHEN** 查看页面 HTML 结构
- **THEN** 应使用 header、main、section、footer 等语义化标签

#### Scenario: 页面结构清晰
- **WHEN** 查看页面结构
- **THEN** 各区域应使用 section 标签并带有 id 属性