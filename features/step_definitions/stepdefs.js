const assert = require('assert');
const puppeteer = require('puppeteer');
const {Given, When, Then, Before, After} = require('@cucumber/cucumber');

var {setDefaultTimeout} = require('@cucumber/cucumber');
setDefaultTimeout(10000);

var _browser;
var _page;

Before(async function () {
    const browser = await puppeteer.launch({headless: false});//{headless: false}
    const page = await browser.newPage();
    _browser = browser;
    _page = page;
});

Given('while on the product page', async function () {
    await _page.goto('https://www.trendyol.com/sony/ps3-500-gb-sifir-kol-super-slim-12-ay-garanti-85-oyun-teshir-p-104718748?boutiqueId=580485&merchantId=247638');
    //await _page.waitForNavigation()
});

When('i add a Product to the cart', async function () {

    await _page.$eval('.add-to-basket', (b => b.click()));
    await _page.waitForSelector('.basket-preview-container')
    await _page.goto('https://www.trendyol.com/sepet', {
        waitUntil: 'networkidle2',
    });
    //await _page.waitForNavigation()
});

Then('the product must be in the cart', async function () {
    let result = await _page.$('.pb-basket-item') ? "Sepette" : "SepetteDegil";
    assert.strictEqual(result, "Sepette");
});

After(async function () {
    if (_browser) {
        await _browser.close();
    }
});