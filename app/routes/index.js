import Route from '@ember/routing/route';

export default class IndexRoute extends Route {
  async model () {
    const shopping_lists = await fetch('/api/shopping_lists.json');
    const response = await shopping_lists.json();

    return response.data;
  }
}
