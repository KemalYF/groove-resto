const assert = require('assert');

Feature('Unlike Restaurants');

Before(({ I }) => {
  I.amOnPage('/#/favorite');
});

Scenario('showing empty liked restaurant', ({ I }) => {
  I.see('You dont have any Favorite Restaurant', '#restaurants');
});

Scenario('unliking one restaurant', async ({ I }) => {
  I.seeElement('#restaurants');
  I.amOnPage('/');
  I.seeElement('.post-item a');

  const firstResto = locate('.post-item__title a').first();
  const firstRestoTitle = await I.grabTextFrom(firstResto);
  I.click(firstResto);

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.seeElement('.post-item');

  const unlikedRestoTitle = await I.grabTextFrom('.post-item__title');
  assert.strictEqual(firstRestoTitle, unlikedRestoTitle);

  I.seeElement('.post-item__title a');
  await I.grabTextFrom(firstResto);
  I.click(firstResto);

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.dontSeeElement('.post-item');
});
