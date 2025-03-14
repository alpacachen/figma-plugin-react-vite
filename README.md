# Figma React Plugin Template

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
  <p><strong>English</strong> | <a href="./README.zh-CN.md">简体中文</a></p>
  <p>A modern Figma plugin template built with React, TypeScript, and Vite.</p>
</div>

<div align="center">
  <img src="https://img.shields.io/badge/React-19-blue?logo=react" alt="React 19"/>
  <img src="https://img.shields.io/badge/TypeScript-5.7-blue?logo=typescript" alt="TypeScript 5.7"/>
  <img src="https://img.shields.io/badge/Vite-6.2-646CFF?logo=vite" alt="Vite 6.2"/>
  <img src="https://img.shields.io/badge/Figma-Plugin-F24E1E?logo=figma" alt="Figma Plugin"/>
  <img src="https://img.shields.io/badge/License-MIT-green" alt="MIT License"/>
</div>

<br/>

## 📋 Overview

This template provides a starting point for developing Figma plugins using React for the UI and TypeScript for type safety. The project is set up with Vite for fast development and building.

The example plugin creates rectangles based on user input, demonstrating communication between the plugin code and the UI.

**This template is intentionally lightweight and minimal, with no unnecessary dependencies or boilerplate code. It provides just the essential structure needed for a Figma plugin, making it perfect for developers who want to start from a clean slate and customize according to their specific needs.**

## 🚀 Features

- React 19 for UI components
- TypeScript for type safety
- Vite for fast development and building
- ESLint for code quality
- Hot module replacement during development
- Optimized production builds

## 🛠️ Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or newer recommended)
- [Figma Desktop App](https://www.figma.com/downloads/)

### Installation

1. Clone this repository or use it as a template
2. Install dependencies:

```bash
npm install
```

### Development

Run the development server with:

```bash
npm run watch
```

This will:
- Build the plugin code
- Build the UI code
- Watch for changes and rebuild automatically

### Building for Production

Build the plugin for production with:

```bash
npm run build:ui && npm run build:plugin
```

## 🔌 Loading the Plugin in Figma

1. Open the Figma desktop app
2. Create a new design file or open an existing one
3. Go to **Plugins > Development > Import plugin from manifest...**
4. Select the `manifest.json` file from this project
5. The plugin will now appear in the **Plugins > Development** menu

## 📁 Project Structure

```
figma-react-template/
├── dist/                   # Build output
├── src/
│   ├── plugin/             # Plugin code (runs in Figma)
│   │   └── index.ts        # Main plugin code
│   └── ui/                 # UI code (runs in WebView)
│       ├── app/
│       │   ├── app.tsx     # Main React component
│       │   ├── app.css     # Styles
│       │   └── main.tsx    # React entry point
│       ├── index.html      # HTML template
│       └── vite-env.d.ts   # Vite environment types
├── .gitignore
├── eslint.config.js        # ESLint configuration
├── manifest.json           # Figma plugin manifest
├── package.json            # Project dependencies and scripts
├── tsconfig.json           # TypeScript configuration
├── tsconfig.app.json       # TypeScript config for app
├── tsconfig.node.json      # TypeScript config for Node
├── vite.plugin.config.ts   # Vite config for plugin
└── vite.ui.config.ts       # Vite config for UI
```

## 🔄 Plugin-UI Communication

The plugin and UI communicate using the `postMessage` API:

- UI to Plugin: `parent.postMessage({ pluginMessage: { /* your data */ } }, '*')`
- Plugin to UI: `figma.ui.postMessage({ /* your data */ })`

Example from this template:
- UI sends a message to create rectangles with a count
- Plugin receives the message and creates the specified number of rectangles

## 📝 Customizing the Plugin

1. Update `manifest.json` with your plugin details
   - **Important**: Make sure to change the `name` and `id` in the manifest.json file to your own. The `id` should be unique for your plugin.
2. Modify the UI components in `src/ui/app/`
3. Update the plugin logic in `src/plugin/index.ts`

## 📚 Resources

- [Figma Plugin API Documentation](https://www.figma.com/plugin-docs/api/api-overview/)
- [React Documentation](https://react.dev/)
- [TypeScript Documentation](https://www.typescriptlang.org/docs/)
- [Vite Documentation](https://vitejs.dev/guide/)

## 📄 License

This project is licensed under the MIT License.
