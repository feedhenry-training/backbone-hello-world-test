var url = "https://prod-demos-emea.redhat.feedhenry.com/box/srv/1.1/wid/prod-demos-emea/studio/yismku5dviax4vizr7nxvbsq/file/www/index.html?fh_destination_code=studio&url=https://prod-demos-emea-yismku5jrivvkn2ok6n7q2wt-rht-dev.mbaas1.rht.feedhenry.com";

module.exports = {
  'Test Backbone App': function(client) {
    client
      .url(url)
      .waitForElementVisible('body', 1000)
      .assert.title('QuickStart - Backbone')
      .assert.visible('input[type=text]')
      .setValue('input[type=text]', 'Joe Bloggs')
      .waitForElementVisible('button', 1000)
      .click('button')
      .pause(1000)
      .assert.containsText('.hello-result', 'Hello Joe Bloggs')
      .pause(600000)
      .end();
  }
};