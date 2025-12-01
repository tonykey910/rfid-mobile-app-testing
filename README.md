# Hotel Linen RFID Mobile ERP (Vue 3 + uViewPlus-inspired)

A bilingual (English/中文) RFID-focused mobile ERP prototype for hotel linen operations. It simulates end-to-end flows for inbound laundry, tag binding, cart/closet transfers, guest-room receiving, usage tracking by room/turnover, stain-repair planning, and scrap governance—all with high-velocity RFID interactions.

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

## Backup all project files at once (Windows)
If you want to preserve the current 25-project files in one go before experimenting, you can make a dated copy or ZIP from the
terminal:

### Option A: Copy to a backup folder
```powershell
cd "C:\Users\tonyk\OneDrive\原X1文件\需同步文件\Github"
robocopy rfid-mobile-app-testing rfid-mobile-app-testing-backup /MIR /XD .git node_modules
```
- `robocopy` mirrors the files into `rfid-mobile-app-testing-backup`.
- `/XD .git node_modules` skips Git metadata and dependencies so the copy stays lightweight.

### Option B: Create a ZIP archive
```powershell
cd "C:\Users\tonyk\OneDrive\原X1文件\需同步文件\Github"
Compress-Archive -Path "rfid-mobile-app-testing\*" -CompressionLevel Optimal -Force \
  -DestinationPath "rfid-mobile-app-testing-backup.zip"
```
- Produces a single ZIP containing all project files (excluding hidden items by default).
- Use `-Force` to overwrite an existing ZIP when you create a fresh snapshot.

## Features
- **RFID-first workflows:** shared scanner panel delivers burst and continuous reads with live velocity metrics tuned for high-volume linen carts.
- **ERP modules:** inbound laundry, tag binding, cart/closet transfers, housekeeping receiving, room-usage tracking, stain-repair planning & records, and scrap handling.
- **Dual language:** English by default with a one-tap 中文 toggle.
- **Mobile-friendly:** responsive cards, concise tables, and minimal chrome for rapid scans during housekeeping peaks.

## Structure
- `src/i18n`: locale dictionaries and i18n setup tailored for linen operations.
- `src/utils/rfid.js`: mock RFID engine for burst or continuous scans with linen asset presets.
- `src/views`: module pages wired to the shared scanner pad and linen-focused mock datasets.
- `src/components`: UI primitives including language switcher, module cards, and the RFID pad.

## RFID simulation
The `useRFID` composable generates EPCs for sheets, duvets, towels, robes, and runners, maintains a bounded queue, and tracks velocity/accuracy so flows can be exercised without hardware.
