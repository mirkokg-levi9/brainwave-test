const { chromium } = require("playwright");
const fs = require("fs");
const path = require("path");

const route = process.argv[2] || "/";
const taskId = process.argv[3];
if (!taskId) { console.error("usage: capture.cjs <route> <task_id>"); process.exit(1); }

const url = "http://localhost:3000" + route;
const pngPath = path.join(__dirname, taskId + ".png");
const jsonPath = path.join(__dirname, taskId + ".json");

(async () => {
  const browser = await chromium.launch();
  try {
    const page = await browser.newPage({ viewport: { width: 1280, height: 800 } });
    await page.goto(url, { waitUntil: "networkidle", timeout: 3000 }).catch(() => {});
    await page.screenshot({ path: pngPath });
    fs.writeFileSync(jsonPath, JSON.stringify({ route, url, screenshot_path: ".brainwave-evidence/" + taskId + ".png", captured_at: new Date().toISOString() }, null, 2));
    console.log("screenshot saved: " + pngPath);
  } finally {
    await browser.close();
  }
})().catch((err) => { console.error("screenshot failed: " + err); process.exit(1); });
