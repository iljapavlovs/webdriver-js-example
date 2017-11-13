const {Builder, By, until} = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');


describe('Google Search', function () {
    let driver;
    let chromeOptions = new chrome.Options().setChromeBinaryPath('C:\\Users\\s1eamk\\AppData\\Local\\Microsoft\\AppV\\Client\\Integration\\5AB2469D-00C1-42AA-9D1B-3A19ABBF8893\\Root\\VFS\\ProgramFilesX86\\Google\\Chrome\\Application\\chrome.exe');


    before(function () {
        return new Builder()
            .forBrowser('chrome')
            .setChromeOptions(chromeOptions)
            .build().then(d => {
                driver = d;
            });
    });

    it('example', function theTestFunction() {
        return driver.get('http://www.google.com/ncr')
            .then(_ => driver.findElement(By.name('q')))
            .then(q => q.sendKeys('webdriver'))
            .then(_ => driver.findElement(By.name('btnK')))
            .then(b => b.click())
            .then(_ => driver.wait(until.titleIs('webdriver - Google Search'), 1000));
    });

    after(function () {
        return driver.quit();
    });
});