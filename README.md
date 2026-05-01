📂 Wammy's House Central Server - L_Legacy System

    "If you are reading this, I am already dead."

这是一个基于 Web 的模拟终端界面，旨在重现 L (Lawliet) 留给继任者的遗密档案库。系统通过模拟命令行交互（CLI），带领用户深入探索这位世界级侦探留下的思想碎片与未竟之作。
### 📟 系统功能 (Core Features)

    沉浸式终端体验：采用 1.5rem 以上的高清黑客风大字体，适配 CRT 扫描线质感。

    模拟 CLI 交互：支持 ls (列出目录)、cd (切换路径)、read (读取档案) 等基础指令。

    双语档案系统：档案内容支持英中双语对照展示，采用亮白色与神秘紫的视觉区分。

    响应式设计：完美适配宽屏显示器与移动端设备，确保在任何终端都能获得一致的情报阅读体验。

### 🛠️ 快速开始 (Usage)

你可以直接通过以下链接访问系统（如果你已部署 GitHub Pages）：
🔗 [你的 GitHub Pages 链接]
#### 常用指令清单：

    输入 ls：查看当前目录下的档案文件夹。

    输入 cd [文件夹名]：进入特定目录（如 cd drafts）。

    输入 read [档案编号]：解密并阅读特定档案（如 read D-001）。

    输入 help：获取系统指令指引。

### 📁 目录架构 (Project Structure)
Plaintext

/wammys-registry
├── index.html      # 系统核心逻辑与终端容器
├── style.css       # 严格对齐的 UI 样式表 (v5.3.2)
├── db/             # 核心数据库文件 (.js/.json)
│   └── files.js    # 存储所有解密档案内容
└── README.md       # 本说明文件

### 📝 开发者备注 (Developer Notes)

本系统是为了致敬而建立的纯前端交互项目。为了保证最佳的截图效果和沉浸感，建议使用 Chrome 浏览器并在全屏模式下运行。
