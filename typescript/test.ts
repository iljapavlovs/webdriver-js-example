require('chromedriver');
import {Builder, By, until, promise} from 'selenium-webdriver'
import chrome from 'selenium-webdriver/chrome'
import LoginPage from './LoginPage'
import SecureAreaPage from './SecureAreaPage'
import assert = require('assert');
const {assert: chaiAssert} = require('chai');


promise.USE_PROMISE_MANAGER = false;

describe('Login', function () {
    //needed for mocha timeout
    this.timeout(20000);
    let driver;
    // let chromeOptions = new chrome.Options().setChromeBinaryPath('C:\\Users\\s1eamk\\AppData\\Local\\Microsoft\\AppV\\Client\\Integration\\5AB2469D-00C1-42AA-9D1B-3A19ABBF8893\\Root\\VFS\\ProgramFilesX86\\Google\\Chrome\\Application\\chrome.exe');

    beforeEach(async function () {
        driver = await new Builder()
            .forBrowser('chrome')
            // .setChromeOptions(chromeOptions)
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
        console.log('Is user logged in: ' + isUserLoggedIn);
        assert.equal(isUserLoggedIn, true);
        chaiAssert(isUserLoggedIn === true);


    });
});