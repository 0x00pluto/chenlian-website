# chenlian-website

宸联教育官方网站 — OPC 一人公司孵化营 AI 实战落地页。

线上地址：[https://www.chenlian.ai](https://www.chenlian.ai)

## 技术栈

Next.js 16 · React 19 · Tailwind CSS v4 · shadcn/ui · TypeScript

## 本地开发

```bash
pnpm install
cp .env.example .env.local   # 可选，默认已指向正式域名
pnpm dev
```

访问 [http://localhost:3000](http://localhost:3000)

## 常用命令

```bash
pnpm dev      # 开发
pnpm build    # 构建
pnpm start    # 生产预览
pnpm lint     # 代码检查
```

## 目录说明

```
src/app/              页面与全局样式
src/components/       布局、区块、UI 组件
src/lib/              站点文案与 GEO 事实数据
public/images/        静态图片
public/llms*.txt      AI 可读说明（GEO）
docs/                 背景资料与设计稿
```

## 环境变量

| 变量 | 说明 |
|------|------|
| `NEXT_PUBLIC_SITE_URL` | 站点根 URL，用于 canonical、JSON-LD、sitemap |

## 主体信息

武汉宸联科技有限公司 · 宸联教育
