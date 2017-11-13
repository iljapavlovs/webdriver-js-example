/**
 * @fileoverview A basic example of working with Chrome on Android. Before
 * running this example, you must start adb and connect a device (or start an
 * AVD).
 */

'use strict';

require('chromedriver');
const {Builder, By, Key, until, promise} = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');
const firefox = require('selenium-webdriver/firefox');

(async function () {
    let driver;
    try {
        driver = await new Builder()
            .forBrowser('chrome')
            .setChromeOptions(new chrome.Options().androidChrome())
            .build();
        await driver.get('http://www.google.com/ncr');
        await driver.findElement(By.name('q')).sendKeys('webdriver', Key.RETURN);
        await driver.wait(until.titleIs('webdriver - Google Search'), 1000);
    } finally {
        await driver && driver.quit();
    }
})().then(_ => console.log('SUCCESS'), err => console.error('ERROR: ' + err));