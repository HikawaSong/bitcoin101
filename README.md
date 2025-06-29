# Bitcoin101 科普页面项目

这是一个使用 **React + Vite** 构建的单页网页项目，用于展示一篇关于比特币的科普文章。
---

## ✅ 开发环境准备

### 推荐工具：
- 使用 **Visual Studio Code**（VS Code）打开本项目根目录
- Node.js 版本建议 ≥ 16.x

---

## 🚀 启动本地开发服务器

请在项目根目录下打开终端，并依次执行以下命令：

1. 安装依赖：

   ```bash
   npm install
   ```

2. 启动开发模式：

   ```bash
   npm run dev
   ```

3. 打开浏览器，访问显示的本地地址，例如：

   ```
   http://localhost:5173
   ```

---

## 📝 如何修改文章内容

文章的内容与结构配置在以下文件中：

```
src/content/bitcoin101Article.tsx
```

你可以修改以下字段：

- `title`：文章标题
- `author`：作者名
- `paragraph`：正文文本（支持分段与图片占位符）
- `imageMap`：图片插入标记与路径的映射

### ✅ 插入图片的方式：

正文中使用 `[[IMAGE1]]`、`[[IMAGE2]]` 等占位符，即可自动在相应位置插入图片。

---

## 🖼 添加或更换图片

### 图片存放位置：

请将图片放置于项目的 `public/images/` 文件夹下，例如：

```
public/images/image1.png
public/images/image2.png
```

### 修改图片映射：

在 `bitcoin101Article.tsx` 中的 `imageMap` 中添加或修改路径：

```ts
imageMap: {
  '[[IMAGE1]]': {
    src: '/images/image1.png',
    alt: '示意图 1',
  },
  '[[IMAGE2]]': {
    src: '/images/image2.png',
    alt: '示意图 2',
  },
}
```

---

## 📦 打包构建（可选）

若需要生成静态文件用于部署：

```bash
npm run build
```

构建输出在：

```
dist/
```

---

## 📁 项目结构简要说明

```
public/
  images/                        # 存放图片资源

src/
  content/
    bitcoin101Article.tsx       # 文章文本和图片映射配置
  pages/
    Bitcoin101Page.tsx          # 页面主体组件
    Bitcoin101Page.css          # 页面样式文件
  index.css                     # 全局样式文件
  main.tsx                      # React 应用入口
```
---