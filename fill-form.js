const puppeteer = require('puppeteer');
const url = "https://www.venture7.com/contact/";
const HeadlessOptions = {
    headless:false, 
    slowMo:10,
    defaultViewport: null
};
//const from = document.querySelector(`form` );
(async () => {
  const browser = await puppeteer.launch(HeadlessOptions); //launch Browser which is "Headless"
  const page = await browser.newPage(); // open a new page
  await page.goto(url); // enter url in page
  await page.waitFor('.wpcf7');
  const name= await page.waitForXPath("/html/body/div[1]/div/div[4]/div[4]/section/div/div/div[2]/div/div[2]/form/p/label[1]/span/input");
  await name.type("ashish mangla");
  const email= await page.waitForXPath("/html/body/div[1]/div/div[4]/div[4]/section/div/div/div[2]/div/div[2]/form/p/label[2]/span/input");
  await email.type("ashish.mangla@venture7.com");
  const subject= await page.waitForXPath("/html/body/div[1]/div/div[4]/div[4]/section/div/div/div[2]/div/div[2]/form/p/label[3]/span/input");
  await subject.type("testing contact form using puppeteer");
  const message= await page.waitForXPath("/html/body/div[1]/div/div[4]/div[4]/section/div/div/div[2]/div/div[2]/form/p/label[4]/span/textarea");
  await message.type("This is test content");
  await page.screenshot({path:'filled.png'});
    await page.waitFor(1000);
    const button = await page.waitForSelector(".btn-contact");
    await button.click();
//   await page.waitForSelector('from');
  console.log('mam');
})();

// await page.waitFor(userName);
// console.log('filled user name');
// await page.click(userName);