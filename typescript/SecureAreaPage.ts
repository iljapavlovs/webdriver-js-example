import {By, until} from 'selenium-webdriver'

const NOTIFICATION_SECTION_LOCATOR = By.id("flash-messages");
const LOGOUT_BUTTON_LOCATOR = By.css("[href='/logout']");
//TODO - why default is used?
export default class SecureAreaPage {
    //todo - is this the correct usage?
    constructor(public driver) {
        this.driver = driver;
    }

    async isUserLoggedIn(): boolean {
        await this.driver.wait(until.elementLocated(NOTIFICATION_SECTION_LOCATOR));
        return await this.driver.findElement(NOTIFICATION_SECTION_LOCATOR).isDisplayed();
    }

}






