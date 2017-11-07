const {Builder, By, until} = require('selenium-webdriver');
require('chromedriver');
new Builder()
    .forBrowser('chrome')
    .build()
    .then(driver => {
        return driver.get('http://www.google.com/ncr')
            .then(_ => driver.findElement(By.name('q')).sendKeys('webdriver'))
            .then(_ => driver.findElement(By.name('q')).submit())
            .then(_ => driver.wait(until.titleIs('webdriver - Google Search'), 1000))
            .then(_ => driver.quit());
    });