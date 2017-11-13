/**
 * @fileoverview An example of running Chrome or Firefox in headless mode.
 *
 * To run with Chrome, ensure you have Chrome 59+ installed and that
 * chromedriver 2.30+ is present on your system PATH:
 * <https://sites.google.com/a/chromium.org/chromedriver/downloads>
 *
 *     SELENIUM_BROWSER=chrome node selenium-webdriver/example/headless.js
 *
 * To run with Firefox, ensure you have Firefox 57+ installed and that
 * geckodriver 0.19.0+ is present on your system PATH:
 * <https://github.com/mozilla/geckodriver/releases>
 *
 *     SELENIUM_BROWSER=firefox node selenium-webdriver/example/headless.js
 */

require('chromedriver');
const {Builder, By, Key, until, promise} = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');
const firefox = require('selenium-webdriver/firefox');

const width = 640;
const height = 480;

let path = 'C:\\Users\\s1eamk\\AppData\\Local\\Microsoft\\AppV\\Client\\Integration\\5AB2469D-00C1-42AA-9D1B-3A19ABBF8893\\Root\\VFS\\ProgramFilesX86\\Google\\Chrome\\Application\\chrome.exe';


let driver = new Builder()
    .forBrowser('chrome')
    .setChromeOptions(
        new chrome.Options()
            .setChromeBinaryPath(path)
            // .headless()
            .windowSize({width, height}))
    .setFirefoxOptions(
        new firefox.Options().headless().windowSize({width, height}))
    .build();

driver.get('http://www.google.com/ncr')
    .then(_ =>
        driver.findElement(By.name('q')).sendKeys('webdriver', Key.RETURN))
    .then(_ => driver.wait(until.titleIs('webdriver - Google Search'), 1000))
    .then(
        _ => driver.quit(),
        e => driver.quit().then(() => {
            throw e;
        }));