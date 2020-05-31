const puppeteer = require('puppeteer');
const iPhone = puppeteer.devices['iPhone 6'];
const url = "https://www.venture7.com/";
(async () => {
  const browser = await puppeteer.launch();
  //launch Browser which is "Headless"
  const page = await browser.newPage();
    // open a new page
    await page.emulate(iPhone);
  //set the viewport
  await page.goto(url);
   // enter url in page
   await page.waitFor(5000);
   console.log('wait is over');
   await page.screenshot({path: 'iphone.png'});
   // takes a screenshot
  await browser.close()
    //close the browser
})();


// more on https://pptr.dev/#?product=Puppeteer&version=v3.0.2&show=api-pageemulateoptions
