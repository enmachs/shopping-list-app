import Route from '@ember/routing/route';

export default class ShoppingListRoute extends Route {

  async model (params) {
    const { uuid } = params;
    const shopping_lists = await fetch('/api/shopping_lists.json');
    const response = await shopping_lists.json();

    const sl = response.data.find((sl) => sl.uuid === uuid);

    return sl;
  }
}
