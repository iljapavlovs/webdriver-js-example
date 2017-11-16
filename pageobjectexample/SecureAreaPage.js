const {By, until} = require('selenium-webdriver');


const NOTIFICATION_SECTION_LOCATOR = By.id("flash-messages");
const LOGOUT_BUTTON_LOCATOR = By.css("[href='/logout']");


const SecureAreaPage = function SecureAreaPage(driver) {
    this.driver = driver;
};

SecureAreaPage.prototype.isUserLoggedIn = async function () {

    await this.driver.wait(until.elementLocated(NOTIFICATION_SECTION_LOCATOR));
    return await this.driver.findElement(NOTIFICATION_SECTION_LOCATOR).isDisplayed();

};


module.exports = SecureAreaPage;

