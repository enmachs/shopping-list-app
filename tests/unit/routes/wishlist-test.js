import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | Shopping List', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:shopping_list');
    assert.ok(route);
  });
});
