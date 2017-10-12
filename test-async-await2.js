/*
 NOT WORKING CORRECTLY - PASSING 0
 */
import mochaAsync from '../utils/mochaAsync';

const firstLink = 'React - A JavaScript library for building user interfaces - Facebook Code';

describe(`Sample Test`, function() {
    /**
     * Extend timeout for mocha
     */
    this.timeout(10000);


    beforeEach(async function() {
        driver = await new Builder().forBrowser('firefox').build();
    });

    afterEach(async function() {
        await driver.quit();
    });

    it('should google for react', mochaAsync ( async () => {
        await driver.get('http://www.google.de/');
        await driver.findElement(By.name('q')).sendKeys('react')
        await driver.findElement(By.name('btnG')).click();
        await driver.wait(until.elementLocated(By.linkText(firstLink)));
        await driver.findElement(By.linkText(firstLink)).click();
        await driver.quit();
    }));
});
