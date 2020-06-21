import Route from '@ember/routing/route';

export default class WishlistRoute extends Route {

  async model (params) {
    const { uuid } = params;
    const wishlists = await fetch('/api/wishlists.json');
    const response = await wishlists.json();

    const wl = response.data.find((wl) => wl.uuid === uuid);

    return wl;
  }
}
