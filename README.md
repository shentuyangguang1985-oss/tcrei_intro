# TCREI：提示工程五步法 (Interactive Guide)

![TCREI Concept](https://img.shields.io/badge/Prompt-Engineering-coffee) ![Status](https://img.shields.io/badge/Status-Active-success)

> **让 AI 从“猜谜”变成“专家”**

本仓库以 **TCREI** 提示工程交互式学习指南为主入口，帮助你通过结构化输入，让 AI 更准确地执行任务；同时收录墨咖文章起稿 Skill 和「粉白跳跃大冒险」网页游戏。

🔗 **在线体验**: [https://shentuyangguang1985-oss.github.io/tcrei_intro/](https://shentuyangguang1985-oss.github.io/tcrei_intro/)

## 🧭 仓库导航

| 入口 | 用途 |
| :--- | :--- |
| [moka_coffee_system](moka_coffee_system/) | 墨咖内容创作目录，当前收录文章起稿 Skill 及其模板、文风样本和测试提示词。 |
| [draft-article Skill](moka_coffee_system/skills/draft-article/SKILL.md) | 根据已确认的主题卡和写前包，参考墨咖文风样本生成公众号正文初稿。 |
| [pink-jump-game](pink-jump-game/) | 「粉白跳跃大冒险」网页游戏，包含游戏页面、教程脚本、发布说明和截图。 |

## 📚 什么是 TCREI？

TCREI 是一个由 Google 推荐的提示词设计框架，包含五个核心要素，助记口诀为 **"Tiny Crabs Ride Enormous Iguanas"**（小螃蟹骑着巨型鬣蜥）。

| 简写 | 全称 (English) | 中文 | 核心作用 |
| :---: | :--- | :--- | :--- |
| **T** | **Task** | 任务 | 奠定基石（目标 + 角色 + 格式） |
| **C** | **Context** | 上下文 | 设定语境（受众、场景、限制） |
| **R** | **References** | 示例 | 黄金标准（Few-shot prompting） |
| **E** | **Evaluate** | 评估 | 质量把控（硬性指标检查） |
| **I** | **Iterate** | 迭代 | 持续优化（与 AI 的对话过程） |

## 🌟 TCREI 项目特色

TCREI 学习指南是一个**单页交互式应用 (SPA)**，包含：

- **🦀 助记口诀卡片**：生动的 Emoji 帮助记忆框架步骤。
- **📊 交互式图表**：使用 Chart.js 展示 TCREI 对比普通提示词在清晰度、稳定性上的提升。
- **🛠️ 任务构建器**：交互式下拉菜单，体验由"目标+角色+格式"组成的精准指令。
- **🧘‍♀️ 语气调节器**：滑动滑块，实时查看不同语气对上下文指令的影响。
- **📝 实战案例拆解**：完整的"公众号文章生成"案例，支持点击高亮，通过代码视角解析提示词结构。

## 🚀 快速开始

### 1. 访问网页
直接点击 [在线演示](https://shentuyangguang1985-oss.github.io/tcrei_intro/) 开始学习。

### 2. 本地运行
如果你想在本地查看或修改 TCREI 学习指南源码：

```bash
git clone https://github.com/shentuyangguang1985-oss/tcrei_intro.git
cd tcrei_intro
# 直接用浏览器打开 index.html 即可
open index.html
```

## 📁 项目结构

| 路径 | 内容 |
| :--- | :--- |
| [index.html](index.html) | TCREI 学习指南页面，包含该页面的逻辑、样式和交互代码。 |
| [README.md](README.md) | 仓库说明与导航。 |
| [.gitignore](.gitignore) | Git 忽略配置。 |
| [moka_coffee_system/](moka_coffee_system/) | 墨咖内容创作目录。 |
| [moka_coffee_system/skills/draft-article/](moka_coffee_system/skills/draft-article/) | 现有文章起稿 Skill，包含说明、代理配置、模板、文风样本和测试提示词。 |
| [pink-jump-game/](pink-jump-game/) | 网页游戏目录，包含 `index.html`、`tutorial_new.js`、`发布流程.md` 和截图。 |
| [test_hook_demo.py](test_hook_demo.py) | 用于测试 hook 的占位文件，目前仅包含一行注释。 |

*注：TCREI 学习指南由根目录的 `index.html` 单文件实现，无需本地构建，使用 CDN 引入 Tailwind 和 Chart.js；以上其他目录为仓库中独立收录的内容。*

## 🤝 贡献

欢迎提交 Issue 分享你的 TCREI 实践案例，或者提交 PR 改进交互体验。

## 📄 许可证

MIT License
