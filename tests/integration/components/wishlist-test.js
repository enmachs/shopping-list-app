import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | shopping-list', function(hooks) {
  setupRenderingTest(hooks);

  hooks.beforeEach(function() {
    this.setProperties({
      shopping_list: {
        id: "1",
        uuid: "abc-123",
        name: "First shopping list",
        description: "",
        due_date: "2020-08-25",
        place: "BestBuy",
        status: "active"
      }
    });
  });

  test('it renders shopping_list properly', async function(assert) {
    await render(hbs`<ShoppingList @shopping_list={{this.shopping_list}}/>`);

    // Class including uuid of element
    assert.dom('.shopping-list').exists();
    assert.dom('.shopping-list').hasClass("sl-abc-123");

    // Name
    assert.dom('.shopping-list .sl-name').exists();
    assert.dom('.shopping-list .sl-name').containsText('First shopping list');

    // Attributes
    assert.dom('.shopping-list .sl-attributes').exists();

    // Attributes - Items number
    assert.dom('.shopping-list .sl-attributes .sl-attributes_items').exists();
    assert.dom('.shopping-list .sl-attributes .sl-attributes_items').containsText('3 items');

    // Attributes - Due Date
    assert.dom('.shopping-list .sl-attributes .sl-attributes_due_date').exists();
    assert.dom('.shopping-list .sl-attributes .sl-attributes_due_date').containsText('due at 2020-08-25');

    // Attributes - Place
    assert.dom('.shopping-list .sl-attributes .sl-attributes_place').exists();
    assert.dom('.shopping-list .sl-attributes .sl-attributes_place').containsText('BestBuy');

    // Attributes - Status
    assert.dom('.shopping-list .sl-attributes .sl-attributes_status.badge').exists();
    assert.dom('.shopping-list .sl-attributes .sl-attributes_status.badge').hasClass('active');
    assert.dom('.shopping-list .sl-attributes .sl-attributes_status').containsText('active');
  });
});
