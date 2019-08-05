import { module, test } from "qunit";
import { visit, currentURL, fillIn, click, find } from "@ember/test-helpers";
import { setupApplicationTest } from "ember-qunit";
import { setupMirage } from "ember-cli-mirage/test-support";

module("Acceptance | movies", function(hooks) {
  setupApplicationTest(hooks);
  setupMirage(hooks);

  test("visiting /movies", async function(assert) {
    await visit("/add/movies");

    assert.equal(currentURL(), "/add/movies");
  });

  test("can create a movie", async function(assert) {
    await visit("/add/movies");

    await fillIn("[data-test-item-title]", "Test Title");
    await click("[data-test-add-item]");
    assert.dom(`[data-test-media-item='Test Title']`).exists({ count: 1 });
  });

  test("can mark a movie complete", async function(assert) {
    this.server.createList('movie', 10);
    
    await visit("/add/movies");
    await click("[data-test-mark-complete]");   
    await visit("/add/movies/1");
    assert.equal(find('[data-test-is-complete]').textContent, "Yes");
  });

  test("can add notes to a movie", async function(assert) {
    this.server.createList('movie', 10);

    await visit("/add/movies/1");
    await click("[data-test-edit-notes]");  
    await fillIn("[data-test-notes-input]", "Test Notes"); 
    await click("[data-test-save-notes]");  
    assert.equal(find("[data-test-notes-output]").textContent, "Test Notes");
    })
});
