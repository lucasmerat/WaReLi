import { module, test, skip } from "qunit";
import { setupRenderingTest } from "ember-qunit";
import { render, fillIn, click, find, isSettled } from "@ember/test-helpers";
import hbs from "htmlbars-inline-precompile";
import { task } from 'ember-concurrency';
import EmberObject from '@ember/object';

module("Integration | Component | add-item-input", function(hooks) {
  setupRenderingTest(hooks);

  test("it renders", async function(assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`<AddItemInput />`);

    assert.dom(`[data-test-item-title]`).exists({ count: 1 });
    assert.dom(`[data-test-add-item]`).exists({ count: 1 });
  });
  test("it can accept an input", async function(assert) {
    await render(hbs`<AddItemInput />`);

    await fillIn("[data-test-item-title]", "Test Title");
    const inputField = find("[data-test-item-title]");
    assert.ok(inputField.value.includes("Test Title"));
  });
  test("it can display an error flash", async function(assert) {
    this.set("errorFlash", "Error") ;
    await render(hbs`<AddItemInput @errorFlash={{errorFlash}} />`); //Setting a value with passed in props
    const errorFlash = find("[data-test-error-flash]");
    assert.ok(errorFlash.textContent.includes("Error"));
  });
  test("it performs create resource task on click", async function(assert) {
    assert.expect(1);
    const taskWrapper = EmberObject.extend({ createResourceTask: task(function * (title, clearTitleValue) {
      assert.ok(true);
    })});
    const wrapperObject = taskWrapper.create();
    this.set("createResourceTask", wrapperObject.createResourceTask);
    await render(hbs`<AddItemInput @createResourceTask={{createResourceTask}} />`); //Testing false positives and async tasks
    await fillIn("[data-test-item-title]", "Test Title");
    await click("[data-test-add-item]");
  });
});
