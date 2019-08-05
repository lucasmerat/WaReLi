import { module, test } from 'qunit';
import { visit, currentURL, fillIn, click } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';
import { setupMirage } from 'ember-cli-mirage/test-support';

module('Acceptance | movies', function(hooks) {
  setupApplicationTest(hooks);
  setupMirage(hooks);

  test('visiting /movies', async function(assert) {
    await visit('/add/movies');

    assert.equal(currentURL(), '/add/movies');
  });

  test('can create a movie', async function(assert) {
    await visit('/add/movies');

    await fillIn("[data-test-item-title]", "Test Title");
    await click("[data-test-add-item]");
    assert.dom(`[data-test-media-item='Test Title']`).exists({count: 1});
  });
});
