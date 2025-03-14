# Figma React 插件模板

<div align="center">
  <a href="https://figma.com">
    <img src="https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg" alt="Figma" width="40" height="40"/>
  </a>
  <a href="https://react.dev">
    <img src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" alt="React" width="45" height="40"/>
  </a>
  <a href="https://www.typescriptlang.org">
    <img src="https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg" alt="TypeScript" width="40" height="40"/>
  </a>
  <a href="https://vitejs.dev">
    <img src="https://vitejs.dev/logo.svg" alt="Vite" width="40" height="40"/>
  </a>
</div>

<div align="center">
  <p><a href="./README.md">English</a> | <strong>简体中文</strong></p>
  <p>一个使用 React、TypeScript 和 Vite 构建的现代 Figma 插件模板。</p>
</div>

<div align="center">
  <img src="https://img.shields.io/badge/React-19-blue?logo=react" alt="React 19"/>
  <img src="https://img.shields.io/badge/TypeScript-5.7-blue?logo=typescript" alt="TypeScript 5.7"/>
  <img src="https://img.shields.io/badge/Vite-6.2-646CFF?logo=vite" alt="Vite 6.2"/>
  <img src="https://img.shields.io/badge/Figma-Plugin-F24E1E?logo=figma" alt="Figma Plugin"/>
  <img src="https://img.shields.io/badge/License-MIT-green" alt="MIT License"/>
</div>

<br/>

## 📋 概述

这个模板为使用 React 开发 UI 和 TypeScript 提供类型安全的 Figma 插件开发提供了起点。项目使用 Vite 进行快速开发和构建。

示例插件根据用户输入创建矩形，展示了插件代码和 UI 之间的通信。

**这个模板有意设计得轻量且简洁，没有不必要的依赖或样板代码。它只提供了 Figma 插件所需的基本结构，非常适合那些想要从零开始自定义的开发者。**

## 🚀 特性

- 使用 React 19 构建 UI 组件
- 使用 TypeScript 确保类型安全
- 使用 Vite 进行快速开发和构建
- 使用 ESLint 保证代码质量
- 开发过程中的热模块替换
- 优化的生产构建

## 🛠️ 入门指南

### 前置条件

- [Node.js](https://nodejs.org/) (推荐 v18 或更新版本)
- [Figma 桌面应用](https://www.figma.com/downloads/)

### 安装

1. 克隆此仓库或将其用作模板
2. 安装依赖：

```bash
npm install
```

### 开发

使用以下命令运行开发服务器：

```bash
npm run watch
```

这将：
- 构建插件代码
- 构建 UI 代码
- 监视更改并自动重新构建

### 生产构建

使用以下命令为生产环境构建插件：

```bash
npm run build:ui && npm run build:plugin
```

## 🔌 在 Figma 中加载插件

1. 打开 Figma 桌面应用
2. 创建新的设计文件或打开现有文件
3. 前往 **插件 > 开发 > 从清单文件导入插件...**
4. 选择此项目中的 `manifest.json` 文件
5. 插件将出现在 **插件 > 开发** 菜单中

## 📁 项目结构

```
figma-react-template/
├── dist/                   # 构建输出
├── src/
│   ├── plugin/             # 插件代码（在 Figma 中运行）
│   │   └── index.ts        # 主插件代码
│   └── ui/                 # UI 代码（在 WebView 中运行）
│       ├── app/
│       │   ├── app.tsx     # 主 React 组件
│       │   ├── app.css     # 样式
│       │   └── main.tsx    # React 入口点
│       ├── index.html      # HTML 模板
│       └── vite-env.d.ts   # Vite 环境类型
├── .gitignore
├── eslint.config.js        # ESLint 配置
├── manifest.json           # Figma 插件清单
├── package.json            # 项目依赖和脚本
├── tsconfig.json           # TypeScript 配置
├── tsconfig.app.json       # 应用的 TypeScript 配置
├── tsconfig.node.json      # Node 的 TypeScript 配置
├── vite.plugin.config.ts   # 插件的 Vite 配置
└── vite.ui.config.ts       # UI 的 Vite 配置
```

## 🔄 插件-UI 通信

插件和 UI 使用 `postMessage` API 进行通信：

- UI 到插件：`parent.postMessage({ pluginMessage: { /* 你的数据 */ } }, '*')`
- 插件到 UI：`figma.ui.postMessage({ /* 你的数据 */ })`

此模板中的示例：
- UI 发送消息，带有创建矩形的数量
- 插件接收消息并创建指定数量的矩形

## 📝 自定义插件

1. 使用你的插件详情更新 `manifest.json`
   - **重要**: 确保将manifest.json文件中的 `name` 和 `id` 更改为你自己的。`id` 应该是你的插件的唯一标识符。
2. 修改 `src/ui/app/` 中的 UI 组件
3. 更新 `src/plugin/index.ts` 中的插件逻辑

## 📚 资源

- [Figma 插件 API 文档](https://www.figma.com/plugin-docs/api/api-overview/)
- [React 文档](https://react.dev/)
- [TypeScript 文档](https://www.typescriptlang.org/docs/)
- [Vite 文档](https://vitejs.dev/guide/)

## 📄 许可证

本项目采用 MIT 许可证。 