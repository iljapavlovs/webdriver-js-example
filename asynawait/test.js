require('chromedriver');
const {Builder, By, until, promise} = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');


promise.USE_PROMISE_MANAGER = false;

describe('Google Search', function () {
    this.timeout(20000);
    let driver;
    let chromeOptions = new chrome.Options().setChromeBinaryPath('C:\\Users\\s1eamk\\AppData\\Local\\Microsoft\\AppV\\Client\\Integration\\5AB2469D-00C1-42AA-9D1B-3A19ABBF8893\\Root\\VFS\\ProgramFilesX86\\Google\\Chrome\\Application\\chrome.exe');

    beforeEach(async function () {
        driver = await new Builder()
            .forBrowser('chrome')
            .setChromeOptions(chromeOptions)
            .build();
    });

    afterEach(async function () {
        await driver.quit();
    });

    it('example', async function () {
        await driver.get('https://www.google.com/ncr');

        await driver.findElement(By.name('q')).sendKeys('webdriver');
        await driver.findElement(By.name('btnK')).click();

        await driver.wait(until.titleIs('webdriver - Google Search'), 1000);
    });
});