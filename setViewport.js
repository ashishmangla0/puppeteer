const puppeteer = require('puppeteer');
const viewportOptions = {
  width: 992,
  height: 1000
};
(async () => {
  const browser = await puppeteer.launch(); 
  //launch Browser which is "Headless"
  const page = await browser.newPage(); 
  // open a new page
  await page.setViewport(viewportOptions)
  //set the viewport

  await page.goto('https://www.google.co.in/'); 
  // enter url in page
  await page.screenshot({path: 'viewport.png'});
  // takes a screenshot
  await browser.close(); 
  //close the browser
})();

