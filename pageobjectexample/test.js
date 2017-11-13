require('chromedriver');
const {Builder, By, until, promise} = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');
const LoginPage = require('./LoginPage');
const SecureAreaPage = require('./SecureAreaPage');
const assert = require('assert');
const {assert: chaiAssert} = require('chai');


promise.USE_PROMISE_MANAGER = false;

describe('Login', function () {
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
        await driver.get('http://the-internet.herokuapp.com/login');

        const loginPage = new LoginPage(driver);

        await loginPage.login("tomsmith", "SuperSecretPassword!");

        const secureAreaPage = new SecureAreaPage(driver);
        const isUserLoggedIn = await secureAreaPage.isUserLoggedIn();
        console.log(isUserLoggedIn);
        assert.equal(isUserLoggedIn, true);
        chaiAssert(isUserLoggedIn === true);


    });
});