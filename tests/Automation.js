module.exports = {
  "Automation testing": function (browser) {
    browser.url("https://automationtesting.co.uk/index.html");
    browser.window.maximize(function () {
      console.log("Window is maximized");
    });

    browser.pause(2000);
    browser.click(".close-cookie-warning");
    browser.pause(2000);

    browser.click(".toggle");

    //using CSS and Xpath
    const buttonCss = "#menu > ul > li:nth-child(5) > a";
    const toggleXpath = "//a[@class='toggle']";

    browser.click(buttonCss);
    browser.pause(2000);
    browser.useXpath();
    browser.click(toggleXpath);
    browser.pause(2000);
    browser.click(toggleXpath);
    browser.click("//a[text()='Contact Us Form Test']");
    browser.useCss();
    browser.setValue("input[name='first_name']", "Rahul");
    browser.setValue("input[name='last_name']", "Shilimkar");
    browser.setValue("input[name='email']", "silimkarr@gmail.com");
    browser.setValue(
      "textarea[placeholder='Comments']",
      "Adding the comments now"
    );

    browser.pause(3000);

    browser.clearValue("textarea[placeholder='Comments']");
    browser.pause(3000);
    browser.click("#form_buttons > input:nth-child(1)");
    browser.pause(3000);
    browser.pause(1000);
    browser.end();
  },
};
