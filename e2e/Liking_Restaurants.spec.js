const assert = require('assert');

Feature('Liking Restaurants');

Before(({ I }) => {
  I.amOnPage('/#/favorite');
});

Scenario('showing empty liked Restaurants', ({ I }) => {
  I.see('You dont have any Favorite Restaurant', '#restaurants');
});

Scenario('liking one restaurant', async ({ I }) => {
  I.see('You dont have any Favorite Restaurant', '#restaurants');

  I.amOnPage('/');

  I.seeElement('.post-item a');

  const firstResto = locate('.post-item__title a').first();
  const firstRestoTitle = await I.grabTextFrom(firstResto);
  I.click(firstResto);

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.seeElement('.post-item');
  const likedRestoTitle = await I.grabTextFrom('.post-item__title');

  assert.strictEqual(firstRestoTitle, likedRestoTitle);
});
