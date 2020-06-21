import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | wishlist', function(hooks) {
  setupRenderingTest(hooks);

  hooks.beforeEach(function() {
    this.setProperties({
      wishlist: {
        id: "1",
        uuid: "abc-123",
        name: "First wishlist",
        description: "",
        due_date: "2020-08-25",
        place: "BestBuy",
        status: "active"
      }
    });
  });

  test('it renders wishlist properly', async function(assert) {
    await render(hbs`<Wishlist @wishlist={{this.wishlist}}/>`);

    // Class including uuid of element
    assert.dom('.wishlist').exists();
    assert.dom('.wishlist').hasClass("wl-abc-123");

    // Name
    assert.dom('.wishlist .wl-name').exists();
    assert.dom('.wishlist .wl-name').containsText('First wishlist');

    // Attributes
    assert.dom('.wishlist .wl-attributes').exists();

    // Attributes - Items number
    assert.dom('.wishlist .wl-attributes .wl-attributes_items').exists();
    assert.dom('.wishlist .wl-attributes .wl-attributes_items').containsText('3 items');

    // Attributes - Due Date
    assert.dom('.wishlist .wl-attributes .wl-attributes_due_date').exists();
    assert.dom('.wishlist .wl-attributes .wl-attributes_due_date').containsText('due at 2020-08-25');

    // Attributes - Place
    assert.dom('.wishlist .wl-attributes .wl-attributes_place').exists();
    assert.dom('.wishlist .wl-attributes .wl-attributes_place').containsText('BestBuy');

    // Attributes - Status
    assert.dom('.wishlist .wl-attributes .wl-attributes_status.badge').exists();
    assert.dom('.wishlist .wl-attributes .wl-attributes_status.badge').hasClass('active');
    assert.dom('.wishlist .wl-attributes .wl-attributes_status').containsText('active');
  });
});
