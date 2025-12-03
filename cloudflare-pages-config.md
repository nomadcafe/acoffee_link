# Cloudflare Pages 配置说明

如果部署后只显示 "hello world"，请检查以下配置：

## 正确的构建设置

在 Cloudflare Pages 项目设置中：

1. **Settings** → **Builds & deployments**

2. 配置如下：
   ```
   Framework preset: None (或 Plain HTML)
   Build command: (留空)
   Deploy command: true
   Build output directory: /
   Root directory: /
   ```

3. **重要**：确保 **Build output directory** 设置为 `/`（根目录）

4. **重要**：确保 **Root directory** 设置为 `/`（根目录）

## 检查部署日志

1. 进入 **Deployments** 标签
2. 查看最新的部署日志
3. 确认是否成功找到了 `index.html` 文件

## 如果还是显示 "hello world"

可能的原因：
- Build output directory 配置错误（应该是 `/`）
- 有缓存问题，尝试清除缓存并重新部署
- 检查是否有其他文件覆盖了 index.html

