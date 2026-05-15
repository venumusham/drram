import puppeteer from 'puppeteer';
import fs from 'fs';

async function takeScreenshots() {
  if (!fs.existsSync('./screenshots')) {
    fs.mkdirSync('./screenshots');
  }

  const browser = await puppeteer.launch({
    defaultViewport: { width: 1280, height: 800 }
  });
  const page = await browser.newPage();

  const urls = [
    { path: '/', name: 'home' },
    { path: '/blog', name: 'blog-index' },
    { path: '/gynecomastia', name: 'gynecomastia-landing' },
    { path: '/blog/gynecomastia-recovery-timeline-hyderabad', name: 'recovery-timeline' },
    { path: '/blog/gynecomastia-surgery-cost-hyderabad-2026-guide', name: 'cost-guide' }
  ];

  const PORT = 5174;

  for (const { path, name } of urls) {
    try {
      console.log(`Navigating to http://localhost:${PORT}${path}...`);
      await page.goto(`http://localhost:${PORT}${path}`, { waitUntil: 'networkidle0' });
      // Small wait for animations
      await new Promise(r => setTimeout(r, 1000));
      await page.screenshot({ path: `./screenshots/${name}.png`, fullPage: true });
      console.log(`Saved screenshot for ${name}`);
    } catch (e) {
      console.error(`Failed to screenshot ${name}:`, e.message);
    }
  }

  await browser.close();
}

takeScreenshots();
