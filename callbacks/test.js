require('chromedriver');
const assert = require('assert');
const {Builder, By, Key, until, promise} = require('selenium-webdriver');

const chrome = require('selenium-webdriver/chrome');


let chromeOptions = new chrome.Options().setChromeBinaryPath('C:\\Users\\s1eamk\\AppData\\Local\\Microsoft\\AppV\\Client\\Integration\\5AB2469D-00C1-42AA-9D1B-3A19ABBF8893\\Root\\VFS\\ProgramFilesX86\\Google\\Chrome\\Application\\chrome.exe');

// promise.USE_PROMISE_MANAGER = false;

//it`s possible to add all kinds of desired capapbilites for different browsers
new Builder()
    .forBrowser('chrome')
    .setChromeOptions(chromeOptions)
    // .setFirefoxOptions()
    .build().then(driver => {
    return driver.get("https://decohere.herokuapp.com/planets", function () {
        driver.findElement(By.id('wt'), function (weight) {
            weight.sendKeys("200", function () {
                driver.findElement(By.id('calculate'), function (calculate) {
                    calculate.click(function () {
                        driver.findElement(By.id('outputmrc').getAttribute('value'), function (mercury) {
                            assert.equal(mercury, '75.6');

                        });
                    });
                });
            });
        });
    });
});

// var driver = new selenium.Builder().withCapabilities(selenium.Capabilities.firefox()).build();

