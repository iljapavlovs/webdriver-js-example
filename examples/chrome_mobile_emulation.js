/**
 * @fileoverview This is an example of emulating a mobile device using the
 * ChromeDriver.
 */

'use strict';


require('chromedriver');
const {Builder, By, Key, until, promise} = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');
const firefox = require('selenium-webdriver/firefox');
const path = 'C:\\Users\\s1eamk\\AppData\\Local\\Microsoft\\AppV\\Client\\Integration\\5AB2469D-00C1-42AA-9D1B-3A19ABBF8893\\Root\\VFS\\ProgramFilesX86\\Google\\Chrome\\Application\\chrome.exe';

(async function () {
    let driver;
    try {
        driver = await new Builder()
            .forBrowser('chrome')

            .setChromeOptions(
                new chrome.Options()
                    .setChromeBinaryPath(path)
                    .setMobileEmulation({deviceName: 'Nexus 5X'}))
            .build();
        await driver.get('http://www.google.com/ncr');
        await driver.findElement(By.name('q')).sendKeys('webdriver', Key.RETURN);
        await driver.wait(until.titleIs('webdriver - Google Search'), 1000);
    } finally {
        await driver && driver.quit();
    }
})().then(_ => console.log('SUCCESS'), err => console.error('ERROR: ' + err));