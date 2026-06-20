# L_System — Wammy's Registry

> If you are reading this, I am already dead.

一个基于《死亡笔记》的沉浸式终端交互项目。模拟 L 死后遗留的加密档案系统，以命令行形式呈现他未曾公开的思考、未寄出的信、对案件的分析、以及关于人性的哲学碎片。

## 🎯 在线体验

[https://nanamiapril.github.io/l-system/](https://nanamiapril.github.io/l-system/)

## ✨ 特色

- **终端沉浸体验** — CRT 扫描线 + ASCII Logo + 打字机动画 + 开机序列
- **四大档案模块** — Drafts / Logs / Analysis / Philosophy
- **双语内容** — 英文原文 + 中文翻译，打字机逐字呈现
- **隐藏命令** — `who`、`date`、`exit`、`sudo`、`random`、`kira`
- **移动端适配** — 手机浏览器直接打开，输入区固定底部
- **纯前端** — 零依赖、零后端，双击 index.html 即可运行

## 🛠 技术栈

- 纯 HTML / CSS / JavaScript
- CSS 伪元素（CRT 扫描线 + 屏幕微光）
- async/await 打字机动画（textContent 性能优化版）

## 📁 项目结构

```
L_System/
├── index.html      主页面 + 交互逻辑
├── style.css       终端视觉风格（CRT 美学）
├── README.md
└── db/
    ├── drafts.js       未寄出信笺（5篇）
    ├── logs.js         观察日志（5篇）
    ├── analysis.js     对月的判断（5篇）
    └── philosophy.js   对人的记录（5篇）
```

## 🚀 使用方式

双击 `index.html` 或部署到任意静态托管服务。

**基本命令：**

| 命令 | 说明 |
|------|------|
| `ls` | 列出所有目录 |
| `cd [folder]` | 进入目录，查看文件列表 |
| `read [ID]` | 解密并阅读指定文件 |
| `random` | 随机解密一篇档案 |
| `help` | 显示所有可用命令 |
| `clear` | 清屏 |

## 📖 内容模块

| 模块 | 调性 | 篇数 |
|------|------|------|
| Drafts | 克制的情感、未寄出的告白 | 5 |
| Logs | 冰冷的行为观察、微表情分析 | 5 |
| Analysis | 博弈思维、对对手的逻辑解构 | 5 |
| Philosophy | 存在主义、对秩序与自由的思辨 | 5 |

## 📝 License

MIT
