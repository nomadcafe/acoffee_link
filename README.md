# 一杯咖啡 ☕️

Lee 的个人页面

## 功能特点

- 简洁优雅的个人介绍页面
- 安全的二维码联系方式（防止垃圾邮件收集）
- 响应式设计，支持深色模式
- 极简风格，参考 it.ai 设计

## 技术栈

- 纯 HTML/CSS/JavaScript
- 无依赖，无需构建工具
- 使用在线 QR API 生成二维码

## 部署到 Cloudflare Pages

### 1. 准备工作

1. 确保代码已推送到 GitHub 仓库
2. 登录 [Cloudflare Dashboard](https://dash.cloudflare.com/)

### 2. 创建 Cloudflare Pages 项目

1. 在 Cloudflare Dashboard 中，进入 **Pages** 部分
2. 点击 **Create a project**
3. 选择 **Connect to Git**
4. 授权 Cloudflare 访问你的 GitHub 账户
5. 选择仓库 `onecafe/acoffee`
6. 点击 **Begin setup**

### 3. 配置构建设置

由于这是一个纯静态 HTML 项目，配置如下：

- **Project name**: `acoffee` (或你喜欢的名称)
- **Production branch**: `main`
- **Framework preset**: `None` 或 `Plain HTML`
- **Build command**: 留空（无需构建）
- **Build output directory**: `/` (根目录)
- **Root directory**: `/` (根目录)

### 4. 环境变量（可选）

本项目不需要环境变量，直接跳过即可。

### 5. 部署

1. 点击 **Save and Deploy**
2. Cloudflare 会自动开始部署
3. 部署完成后，你会获得一个免费的 `.pages.dev` 域名

### 6. 自定义域名（可选）

1. 在项目设置中，点击 **Custom domains**
2. 添加你的自定义域名（如 `acoffee.com`）
3. Cloudflare 会自动配置 DNS 和 SSL 证书

## 本地开发

直接在浏览器中打开 `index.html` 即可，无需任何构建步骤。

## 安全特性

- 邮箱地址使用 Base64 编码保护
- 域名白名单验证
- 多重安全验证机制
- CSP（内容安全策略）保护
- XSS 防护

## 许可证

MIT License

