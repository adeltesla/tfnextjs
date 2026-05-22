import { chromium } from "@playwright/test";

const browser = await chromium.launch();
const context = await browser.newContext({ viewport: { width: 1440, height: 900 } });
const page = await context.newPage();

// Login
await page.goto("http://localhost:3002/admin/login", { waitUntil: "networkidle" });
await page.screenshot({ path: "/tmp/ss-admin-login.png" });
console.log("Captured login");

await page.fill("#username", "admin");
await page.fill("#password", "admin123");
await page.click('button[type="submit"]');
await page.waitForURL("**/admin", { timeout: 5000 });
await page.waitForTimeout(1000);
await page.screenshot({ path: "/tmp/ss-admin-dashboard.png" });
console.log("Captured dashboard");

// Go to home page editor
await page.click('a[href="/admin/pages/home"]');
await page.waitForTimeout(2000);
await page.screenshot({ path: "/tmp/ss-admin-editor.png", fullPage: true });
console.log("Captured editor");

await browser.close();
