const puppeteer = require('puppeteer');
(async () => {
  const browser = await puppeteer.launch(); //launch Browser which is "Headless"
  const page = await browser.newPage(); // open a new page
  await page.goto('https://www.google.co.in/'); // enter url in page
  await page.screenshot({path: 'screenshot.png'});// takes a screenshot
  await browser.close(); //close the browser
})();

