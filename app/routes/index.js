import Route from '@ember/routing/route';

export default class IndexRoute extends Route {
  async model () {
    const wishlists = await fetch('/api/wishlists.json');
    const response = await wishlists.json();

    return response.data;
  }
}
