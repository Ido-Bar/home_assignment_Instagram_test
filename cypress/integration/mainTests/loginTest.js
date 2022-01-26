/// <reference types="cypress" />
import travelUtils from "../Utils/travelUtils.js";
import loginPage from "../pageObjectsModels/loginPage.js";
import homePage from "../pageObjectsModels/homePage.js";
import accountPage from "../pageObjectsModels/accountPage.js";

describe("loginTest", function () {
  before(function () {
    cy.fixture("userData").then(function (data) {
      this.data = data;
    });
  });

  it("signs into a Instagram account and makes sure that the login was successful", function () {
    const login = new loginPage();
    const home = new homePage();
    const account = new accountPage();

    travelUtils.visitInstagram();
    login.enterUsername(this.data.username);
    login.enterPassword(this.data.password);
    login.clickLogIn();
    login.clickNotNow();
    home.checkAccount(this.data.username);
  });
});