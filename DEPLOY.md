# Cloudflare Pages 部署配置

## 构建设置

如果 Deploy command 必须填写，使用以下命令：

```
echo "Deploying static site"
```

或者更简单的：

```
true
```

或者：

```
echo "No build needed for static HTML"
```

## 完整配置

- **Framework preset**: `None` 或 `Plain HTML`
- **Build command**: (留空，如果必须填就用上面的命令)
- **Deploy command**: `echo "Deploying static site"` 或 `true`
- **Build output directory**: `/`
- **Root directory**: `/`

