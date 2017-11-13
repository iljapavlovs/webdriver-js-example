//npm install --save--dev selenium-webdriver
const {Builder, By, Key, until, promise} = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');
const firefox = require('selenium-webdriver/firefox');


//npm install --save--dev chromedriver
// The idea here is that you do not need to build a service. The trick here is that require('chromedriver');
// will add chromedriver path to the process.env.PATH
// const chromedriver = require('chromedriver');
require('chromedriver');
require('geckodriver');


// promise.USE_PROMISE_MANAGER = false;

// let service = new chrome.ServiceBuilder(chromedriver.path).build();
// chrome.setDefaultService(service);

// path to binary

let firefoxOptions = new firefox.Options().setBinary('C:\\tools\\Firefox');

let chromeOptions = new chrome.Options().setChromeBinaryPath('C:\\Users\\s1eamk\\AppData\\Local\\Microsoft\\AppV\\Client\\Integration\\5AB2469D-00C1-42AA-9D1B-3A19ABBF8893\\Root\\VFS\\ProgramFilesX86\\Google\\Chrome\\Application\\chrome.exe');


//it`s possible to add all kinds of desired capapbilites for different browsers
const driver = new Builder()
    .forBrowser('chrome')
    .setChromeOptions(chromeOptions)
    // .setFirefoxOptions()
    .build();

driver.get('http://www.google.com/ncr');
driver.findElement(By.name('q')).sendKeys('webdriver', Key.RETURN);
driver.wait(until.titleIs('webdriver - Google Search'), 1000);
driver.findElements(By.css(".g"))
    .then((resultElements) => {
            console.log('Search result count: ' + resultElements.length);
            resultElements[0].getText()
                .then((text) => {
                    console.log('Text of 1st Search Result: ' + text);
                });

        }
    );

driver.quit();