# Cloudflare Pages 部署错误修复

## 错误信息
```
Executing user deploy command: wrangler deploy
/bin/sh: 1: wrangler: not found
```

## 问题原因
Deploy command 被设置为 `wrangler deploy`，但 wrangler 没有安装。对于纯静态 HTML 项目，不需要 wrangler。

## 修复步骤

### 在 Cloudflare Pages 设置中：

1. 进入你的 Pages 项目
2. 点击 **Settings** → **Builds & deployments**
3. 找到 **Deploy command** 字段
4. 将 `wrangler deploy` 改为：`true`
5. 保存设置

### 完整配置应该是：

```
Framework preset: None (或 Plain HTML)
Build command: (留空)
Deploy command: true  ← 改成这个！
Version command: (可以删除或留空)
Build output directory: /
Root directory: /
```

### 保存后重新部署

1. 点击 **Save**
2. 在 **Deployments** 标签中点击 **Retry deployment**
3. 等待部署完成

## 为什么使用 `true`？

- `true` 是一个始终成功的命令，不会执行任何操作
- 对于纯静态 HTML，不需要实际的部署命令
- Cloudflare Pages 会自动部署 Build output directory 中的文件

