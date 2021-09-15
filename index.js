const puppeteer = require('puppeteer');


(async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();


    await page.screenshot({ path: 'testBosSepet.png' });
    await page.goto('https://www.trendyol.com/sony/ps3-500-gb-sifir-kol-super-slim-12-ay-garanti-85-oyun-teshir-p-104718748?boutiqueId=580485&merchantId=247638');
    await page.$eval('.add-to-basket', (b => b.click()));
    await page.waitForSelector('.basket-preview-container')
    await page.screenshot({ path: 'testEkleSepet.png' });

    await page.goto('https://www.trendyol.com/sepet');
    await page.screenshot({ path: 'testDoluSepet.png' });

    if (await page.$('.pb-basket-item') != null) {
        console.log("Ürün Var");
    } else {
        console.log("Ürün Yok");
    }


    await browser.close();
})();



    /*
(async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    //https://www.trendyol.com/sony/ps3-500-gb-sifir-kol-super-slim-12-ay-garanti-85-oyun-teshir-p-104718748?boutiqueId=580485&merchantId=247638
    //https://www.trendyol.com/sepet
    await page.goto('https://www.google.com/');
    await page.type('.gLFyf.gsfi','bıktık yaw');
    await page.$eval('.gNO89b', (b => b.click()));
    //await page.click('button');
    await page.waitForNavigation()
    await page.screenshot({ path: 'example.png' });


    await browser.close();
})();

     */