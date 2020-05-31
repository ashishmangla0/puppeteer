const puppeteer = require('puppeteer');
const viewportOptions = {
  width: 992,
  height: 1000
};
const pdfOptions = { 
  path: 'google.pdf', 
  format: 'A4' 
};
const url = "https://www.google.co.in/";
(async () => {
  const browser = await puppeteer.launch();
  //launch Browser which is "Headless"
  const page = await browser.newPage();
    // open a new page
  await page.setViewport(viewportOptions);
  //set the viewport
  await page.goto(url);
   // enter url in page
  await page.pdf(pdfOptions);
  //download as pdf
  await browser.close()
    //close the browser
})();


// more on https://github.com/puppeteer/puppeteer/blob/v3.1.0/docs/api.md#pagepdfoptions
