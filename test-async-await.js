/*
NOT WORKING CORRECTLY - PASSING 0
 */
const {Builder, By, until} = require('selenium-webdriver');

//turns off built in Promise Manager in Selenum WebDriver JS
promise.USE_PROMISE_MANAGER = false;

describe('Google Search', function() {
    let driver;

    beforeEach(async function() {
        driver = await new Builder().forBrowser('firefox').build();
    });

    afterEach(async function() {
        await driver.quit();
    });

    it('example', async function() {
        await driver.get('https://www.google.com/ncr');

        await driver.findElement(By.name('q')).sendKeys('webdriver');
        await driver.findElement(By.name('btnG')).click();

        await driver.wait(until.titleIs('webdriver - Google Search'), 1000);
        await assert.equal(driver.getTitle(), 'webdriver - Google Search');
        await console.log(driver.getTitle());
    });
});