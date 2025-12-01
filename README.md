# RFID Mobile ERP (Vue 3 + uViewPlus-inspired)

A bilingual (English/中文) RFID-focused mobile ERP prototype built with Vue 3 and a uViewPlus-inspired UI. It simulates end-to-end asset flows for inbound, tag binding, transfers, receiving, usage tracking, maintenance, and scrap management with fast RFID interactions.

## Quick start

```bash
npm install
npm run dev
```

Open `http://localhost:4173`.

## Sync the code to your local folder (Windows example)
1. Choose the folder where you want the project to live, for example:
   ```bash
   cd "C:\\Users\\tonyk\\OneDrive\\原X1文件\\需同步文件\\Github"
   ```
2. Clone the repo from GitHub (creates the `rfid-mobile-app-testing` folder):
   ```bash
   git clone https://github.com/tonykey910/rfid-mobile-app-testing.git
   cd rfid-mobile-app-testing
   ```
3. If you already have local changes from the previous prototype, copy/replace them into this folder as needed.
4. Verify you are on the desired branch (e.g., `work`):
   ```bash
   git status
   git branch
   ```
5. When you are ready to push your local code up to GitHub:
   ```bash
   git add .
   git commit -m "Your message"
   git push origin work   # or the branch name you are using
   ```
These commands keep the local folder and the GitHub repo in sync.

## Features
- **RFID-first workflows:** shared scanner panel delivers burst and continuous reads with live velocity metrics.
- **ERP modules:** inbound, tag binding, transfer, receiving, usage tracking, maintenance planning & records, and scrap handling.
- **Dual language:** English by default with a one-tap 中文 toggle.
- **Mobile-friendly:** responsive cards, concise tables, and minimal chrome for rapid scans.

## Structure
- `src/i18n`: locale dictionaries and i18n setup.
- `src/utils/rfid.js`: mock RFID engine for burst or continuous scans.
- `src/views`: module pages wired to the shared scanner pad and mock datasets.
- `src/components`: UI primitives including language switcher, module cards, and the RFID pad.

## RFID simulation
The `useRFID` composable generates EPCs, maintains a bounded queue, and tracks velocity/accuracy so flows can be exercised without hardware.

# RFID Mobile ERP Prototype (Vue 3 + uViewPlus)
# RFID 移动端双语 ERP 原型系统（Vue 3 + uViewPlus）

A bilingual (English/中文) mobile-focused ERP prototype with RFID-first workflows.  
测试与展示 RFID 全流程资产管理的移动端 ERP 系统原型，支持中英文双语。

---

## 🌐 Features | 功能特点

### 🎯 **RFID-first workflows | RFID 优先的业务流程**
系统围绕 RFID 高速读取设计，支持连续读、批量处理、实时读取速率统计。

### 📦 **Core ERP Modules | ERP 核心模块**
系统模拟资产从入库到报废的全生命周期管理，包括：

- **Inbound / 入库**
- **Tag Binding / 标签绑定（RFID 绑定资产）**
- **Transfer / 调拨**
- **Receiving / 接收**
- **Usage Tracking / 使用追踪**
- **Maintenance Plan / 维修计划**
- **Maintenance Records / 维修记录**
- **Scrap / 报废管理**

以上模块均支持移动端友好界面与 RFID 交互。

### 🌍 **Bilingual (EN/中文) UI | 中英文切换界面**
内置语言切换组件，可一键在英文与中文之间切换。

### 📱 **Mobile-first UI (uViewPlus) | 移动端优先 UI**
使用 **uViewPlus** 组件库，适配 iOS/Android 设备的交互体验。

---

## 🏗 Tech Stack | 技术栈

| Layer | 技术 |
|-------|------|
| Framework | Vue 3 (Composition API) |
| Mobile UI | uViewPlus |
| Build Tool | Vite |
| State Management | Composables / Reactive APIs |
| RFID Engine | Mock RFID high-speed scanner (可接入真实 SDK) |
| i18n | vue-i18n / 自定义语言字典 |
| Project Type | Mobile-first ERP Prototype |

---

## 📘 Project Structure | 项目结构

rfid-mobile-app-testing/
├── index.html
├── package.json
├── vite.config.js
├── src/
│ ├── App.vue
│ ├── router/
│ │ └── index.js
│ ├── components/
│ │ ├── LanguageToggle.vue # 中英文切换组件
│ │ ├── ModuleCard.vue # 主菜单卡片
│ │ └── RFIDScannerPad.vue # RFID 扫描器界面（模拟连续扫描）
│ ├── views/
│ │ ├── DashboardView.vue
│ │ ├── InboundView.vue
│ │ ├── TagBindingView.vue
│ │ ├── TransferView.vue
│ │ ├── ReceivingView.vue
│ │ ├── UsageTrackingView.vue
│ │ ├── MaintenancePlanView.vue
│ │ ├── MaintenanceRecordsView.vue
│ │ └── ScrapView.vue
│ ├── styles/global.css
│ ├── utils/rfid.js # RFID 连续扫描模拟引擎
│ ├── i18n/
│ └── data/mockData.js # 模拟数据源
└── README.md


---

## 🚀 Quick Start | 本地运行指南

### **1. Clone the repo | 克隆仓库**

```bash
git clone https://github.com/tonykey910/rfid-mobile-app-testing.git
cd rfid-mobile-app-testing

2. Install dependencies | 安装依赖
npm install

3. Run dev server | 启动开发环境
npm run dev


浏览器打开：

http://localhost:4173/

📡 RFID Integration | RFID 集成说明

当前项目内置 Mock RFID Engine，用于：

模拟持续高速扫描

模拟 EPC 队列

模拟读写器吞吐率与准确率

为每个业务模块提供快速测试体验

你可以将 utils/rfid.js 替换为真实硬件厂商 SDK，例如：

Impinj

Alien

Zebra

Nordic

国内读写器厂商的 WebSocket / 串口 / BLE SDK

我可以帮你重写适配层（Adapter Layer）。

👥 Contributing | 团队协作说明

推荐团队开发流程：

main：保持稳定可运行版本

feature/*：按模块开发（如 feature/inbound-api）

通过 Pull Request 合并到 main

ChatGPT/Codex 可辅助生成组件与业务逻辑

提交信息建议使用：

feat: add inbound page logic
fix: 修复 RFID 扫描 pad 的渲染 bug
refactor: 重构 tag-binding 逻辑

📄 License | 许可证

本项目采用 MIT License。
你可以修改、商用、分发本项目代码。

✨ Maintainer | 项目维护者

tonykey910
RFID Asset Management / ERP / Mobile App Developer
GitHub: https://github.com/tonykey910

🎉 End
