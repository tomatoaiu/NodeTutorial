const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('https://github.com/tomatoaiu');
  await page.setViewport({width: 1920, height: 1280});
  await page.screenshot({path: 'tomatoaiu.png'});

  await browser.close();
})();