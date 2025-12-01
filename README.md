# RFID Mobile ERP (Vue 3 + uViewPlus-inspired)

A bilingual (English/中文) RFID-focused mobile ERP prototype built with Vue 3 and a uViewPlus-inspired UI. It simulates end-to-end asset flows for inbound, tag binding, transfers, receiving, usage tracking, maintenance, and scrap management with fast RFID interactions.

## Quick start

```bash
npm install
npm run dev
```

Open `http://localhost:4173`.

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
