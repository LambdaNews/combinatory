const API_BASE = '/api';

class SiteRoutes {
  /**
   * '/'
   * @returns {string}
   */
  static get home() {
    return '/';
  }

  /**
   * '/about'
   * @returns {string}
   */
  static get about() {
    return '/about';
  }

  /**
   * '/contact'
   * @returns {string}
   */
  static get contact() {
    return '/contact';
  }
}

export {
  API_BASE,
  SiteRoutes,
};
