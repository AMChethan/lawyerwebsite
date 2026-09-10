import puppeteer from 'puppeteer-core';
import path from 'path';

const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const artifactDir = 'C:\\Users\\amche\\.gemini\\antigravity-ide\\brain\\21a212a6-11fd-45de-a3e3-85b1323e3a05';

async function capture() {
  const browser = await puppeteer.launch({
    executablePath: chromePath,
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  const page = await browser.newPage();

  // Desktop View
  await page.setViewport({ width: 1280, height: 900, deviceScaleFactor: 2 });
  await page.goto('http://localhost:5173/', { waitUntil: 'networkidle0' });
  await page.screenshot({
    path: path.join(artifactDir, 'desktop_view.png'),
    fullPage: false
  });
  await page.screenshot({
    path: path.join(artifactDir, 'desktop_fullpage.png'),
    fullPage: true
  });
  console.log('Captured desktop screenshots');

  // Mobile View
  await page.setViewport({ width: 390, height: 844, deviceScaleFactor: 2, isMobile: true, hasTouch: true });
  await page.goto('http://localhost:5173/', { waitUntil: 'networkidle0' });
  await page.screenshot({
    path: path.join(artifactDir, 'mobile_view.png'),
    fullPage: false
  });
  await page.screenshot({
    path: path.join(artifactDir, 'mobile_fullpage.png'),
    fullPage: true
  });
  console.log('Captured mobile screenshots');

  // Open QR modal test
  await page.click('#show-qr-code-btn');
  await new Promise(r => setTimeout(r, 600));
  await page.screenshot({
    path: path.join(artifactDir, 'qr_modal_view.png'),
    fullPage: false
  });
  console.log('Captured QR modal view');

  await browser.close();
  console.log('All screenshots captured successfully!');
}

capture().catch(err => {
  console.error(err);
  process.exit(1);
});
