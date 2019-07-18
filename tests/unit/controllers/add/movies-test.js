import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Controller | add/movies', function(hooks) {
  setupTest(hooks);

  // Replace this with your real tests.
  test('it exists', function(assert) {
    let controller = this.owner.lookup('controller:add/movies');
    assert.ok(controller);
  });
});
