# TCREI：提示工程五步法 (Interactive Guide)

![TCREI Concept](https://img.shields.io/badge/Prompt-Engineering-coffee) ![Status](https://img.shields.io/badge/Status-Active-success)

> **让 AI 从“猜谜”变成“专家”**

这是一个交互式的学习指南，旨在帮助你掌握 **TCREI** 提示工程框架。通过结构化的输入，将 AI 的能力从随机生成转变为精准执行。

🔗 **在线体验**: [https://shentuyangguang1985-oss.github.io/tcrei_intro/](https://shentuyangguang1985-oss.github.io/tcrei_intro/)

## 📚 什么是 TCREI？

TCREI 是一个由 Google 推荐的提示词设计框架，包含五个核心要素，助记口诀为 **"Tiny Crabs Ride Enormous Iguanas"**（小螃蟹骑着巨型鬣蜥）。

| 简写 | 全称 (English) | 中文 | 核心作用 |
| :---: | :--- | :--- | :--- |
| **T** | **Task** | 任务 | 奠定基石（目标 + 角色 + 格式） |
| **C** | **Context** | 上下文 | 设定语境（受众、场景、限制） |
| **R** | **References** | 示例 | 黄金标准（Few-shot prompting） |
| **E** | **Evaluate** | 评估 | 质量把控（硬性指标检查） |
| **I** | **Iterate** | 迭代 | 持续优化（与 AI 的对话过程） |

## 🌟 项目特色

本项目不仅仅是一个文档，而是一个**单页交互式应用 (SPA)**，包含：

- **🦀 助记口诀卡片**：生动的 Emoji 帮助记忆框架步骤。
- **📊 交互式图表**：使用 Chart.js 展示 TCREI 对比普通提示词在清晰度、稳定性上的提升。
- **🛠️ 任务构建器**：交互式下拉菜单，体验由"目标+角色+格式"组成的精准指令。
- **🧘‍♀️ 语气调节器**：滑动滑块，实时查看不同语气对上下文指令的影响。
- **📝 实战案例拆解**：完整的"公众号文章生成"案例，支持点击高亮，通过代码视角解析提示词结构。

## 🚀 快速开始

### 1. 访问网页
直接点击 [在线演示](https://shentuyangguang1985-oss.github.io/tcrei_intro/) 开始学习。

### 2. 本地运行
如果你想在本地查看或修改源码：

```bash
git clone https://github.com/shentuyangguang1985-oss/tcrei_intro.git
cd tcrei_intro
# 直接用浏览器打开 index.html 即可
open index.html
```

## 📁 项目结构

```
tcrei_intro/
├── index.html        # 核心文件：包含所有逻辑、样式和交互代码
└── README.md         # 项目说明
```
*注：本项目采用 Zero-Dependency 设计（除 CDN 引入的 Tailwind 和 Chart.js），单文件即可运行，极致轻量。*

## 🤝 贡献

欢迎提交 Issue 分享你的 TCREI 实践案例，或者提交 PR 改进交互体验。

## 📄 许可证

MIT License
